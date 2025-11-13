import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import Logo from '../icons/logo';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const DashboardPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [scanHistory, setScanHistory] = useState([]);
  const fileInputRef = useRef(null);
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchScanHistory();
  }, [token, navigate]);

  const fetchScanHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/scan/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setScanHistory(response.data.scans || []);
    } catch (error) {
      console.error('Failed to fetch scan history:', error);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
      setError('');
      setResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post(`${API_URL}/scan/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.scan);
      setSelectedFile(null);
      setPreview(null);
      fetchScanHistory();
    } catch (error) {
      setError(error.response?.data?.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const getDiseaseColor = (disease) => {
    const colors = {
      Normal: 'bg-green-100 text-green-800 border-green-200',
      Cataract: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Retinopathy: 'bg-red-100 text-red-800 border-red-200',
      Glaucoma: 'bg-orange-100 text-orange-800 border-orange-200',
      Macular: 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors[disease] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo variant="black" className="w-32" />
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Eye Scan</h2>

            <div className="space-y-6">
              {/* File Upload Area */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all"
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                        setPreview(null);
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">Click to upload</p>
                      <p className="text-sm text-gray-500 mt-1">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {uploading ? 'Analyzing...' : 'Analyze Eye Scan'}
              </button>
            </div>

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analysis Result</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Detected Condition:</span>
                    <span
                      className={`px-4 py-2 rounded-lg font-semibold border ${getDiseaseColor(
                        result.detectedDisease
                      )}`}
                    >
                      {result.detectedDisease}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Confidence:</span>
                    <span className="text-gray-900 font-bold">{result.confidence}%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Scan History */}
          {scanHistory.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Scans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scanHistory.slice(0, 6).map((scan) => (
                  <div
                    key={scan.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDiseaseColor(
                          scan.detectedDisease
                        )}`}
                      >
                        {scan.detectedDisease}
                      </span>
                      <span className="text-sm text-gray-500">{scan.confidence}%</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(scan.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

