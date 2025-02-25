'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import qr from '../../../public/qr_2.png';
import { motion, AnimatePresence } from "framer-motion";

const CrowdfundingForm = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUpload(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const data = {
        // 77857d85-8d56-4e25-9c13-7247134d2421
      access_key: "78c300b1-3b35-420c-bcad-7d33998dfbba",
      from_name: "Crowdfunding Contribution Form",
      name: formData.get("name"),
      email: formData.get("email"),
      amount: formData.get("amount"),
      message: formData.get("message"),
      payment_screenshot: previewUrl ? "Payment screenshot uploaded" : "No screenshot provided"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionSuccess(true);
        e.target.reset();
        setFileUpload(null);
        setPreviewUrl(null);
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 5000);
      } else {
        setError("Failed to submit contribution. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contribution:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 py-12 pt-24">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-[#0A0C10] border-gray-800 text-white">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold">Join Us in Making a Difference</CardTitle>
            <p className="text-gray-400">
              Help us reach our goal and be a part of something impactful. Every contribution brings us closer to success!
            </p>
            <div className="flex justify-center items-center gap-8 py-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">₹8,00,000</p>
                <p className="text-sm text-gray-400">Target</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">₹32,450</p>
                <p className="text-sm text-gray-400">Raised</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-sm text-gray-400">Backers</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* QR Code Section */}
            <div className="flex flex-col items-center space-y-4 p-6 border border-gray-800 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  src={qr}
                  alt="qr code"
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Scan the QR code to donate or use UPI ID: razorpay.me/@chauff-it
              </p>
            </div>

            {/* Contribution Form */}
            <AnimatePresence mode="wait">
              {submissionSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative flex items-center justify-center py-8"
                >
                  <div className="w-full bg-green-500/10 border border-green-500/20 rounded-lg p-6 flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-green-500 text-lg font-medium text-center">Contribution submitted successfully!</p>
                    <p className="text-green-500/80 text-sm text-center mt-2">Thank you for your support!</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name" 
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email" 
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="amount" className="text-gray-300">Amount Contributed</Label>
                    <Input 
                      id="amount"
                      name="amount"
                      type="number"
                      required
                      placeholder="Enter amount" 
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-gray-300">Message (Optional)</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Leave a message with your contribution" 
                      className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <Label className="text-gray-300">Payment Screenshot</Label>
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-6">
                      <div className="flex flex-col items-center space-y-4">
                        {previewUrl ? (
                          <div className="relative">
                            <img 
                              src={previewUrl} 
                              alt="Preview" 
                              className="max-h-40 rounded-lg"
                            />
                            <CheckCircle2 className="absolute -top-2 -right-2 text-green-500 bg-[#0A0C10] rounded-full" />
                          </div>
                        ) : (
                          <Upload className="w-12 h-12 text-gray-500" />
                        )}
                        <div className="text-center">
                          <Button 
                            type="button"
                            className="bg-gray-800 hover:bg-gray-700 text-white"
                            onClick={() => document.getElementById('file-upload').click()}
                          >
                            Choose Screenshot
                          </Button>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                          <p className="text-sm text-gray-400 mt-2">
                            Upload screenshot of your payment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-white hover:bg-gray-200 text-black mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Contribution"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrowdfundingForm;