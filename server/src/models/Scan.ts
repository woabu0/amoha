import mongoose, { Document, Schema } from 'mongoose';

export interface IScan extends Document {
  userId: mongoose.Types.ObjectId;
  imageUrl: string;
  detectedDisease: string;
  confidence: number;
  createdAt: Date;
}

const ScanSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  detectedDisease: {
    type: String,
    required: true,
    enum: ['Normal', 'Cataract', 'Retinopathy', 'Glaucoma', 'Macular'],
  },
  confidence: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IScan>('Scan', ScanSchema);

