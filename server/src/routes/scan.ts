import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { authenticate, AuthRequest } from '../middleware/auth';
import Scan from '../models/Scan';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'scan-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Mock disease detection function
// In production, this would use a trained ML model
const detectDisease = async (imagePath: string): Promise<{ disease: string; confidence: number }> => {
  // This is a mock implementation
  // Replace with actual ML model inference
  const diseases = ['Normal', 'Cataract', 'Retinopathy', 'Glaucoma', 'Macular'];
  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  const confidence = Math.floor(Math.random() * 30) + 70; // 70-100%

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    disease: randomDisease,
    confidence,
  };
};

// @route   POST /api/scan/upload
// @desc    Upload eye scan image and detect disease
// @access  Private
router.post(
  '/upload',
  authenticate,
  upload.single('image'),
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No image file provided' });
      }

      const imageUrl = `/uploads/${req.file.filename}`;
      const detectionResult = await detectDisease(req.file.path);

      // Save scan to database
      const scan = new Scan({
        userId: req.user!._id,
        imageUrl,
        detectedDisease: detectionResult.disease,
        confidence: detectionResult.confidence,
      });

      await scan.save();

      res.json({
        success: true,
        scan: {
          id: scan._id,
          imageUrl,
          detectedDisease: detectionResult.disease,
          confidence: detectionResult.confidence,
          createdAt: scan.createdAt,
        },
      });
    } catch (error: any) {
      console.error('Scan upload error:', error);
      res.status(500).json({ message: error.message || 'Server error' });
    }
  }
);

// @route   GET /api/scan/history
// @desc    Get user's scan history
// @access  Private
router.get('/history', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const scans = await Scan.find({ userId: req.user!._id })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      scans: scans.map(scan => ({
        id: scan._id,
        imageUrl: scan.imageUrl,
        detectedDisease: scan.detectedDisease,
        confidence: scan.confidence,
        createdAt: scan.createdAt,
      })),
    });
  } catch (error: any) {
    console.error('Get scan history error:', error);
    res.status(500).json({ message: error.message || 'Server error' });
  }
});

export default router;

