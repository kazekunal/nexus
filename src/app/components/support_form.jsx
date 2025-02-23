'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { QrCode, Upload, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import qr from '../../../public/qr.jpeg'

const CrowdfundingForm = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUpload(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 py-12 pt-24">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-[#0A0C10] border-gray-800 text-white">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold">Join Us in Making a Difference</CardTitle>
            <p className="text-gray-400">
            Help us reach our goal and be a part of something impactful. Every contribution brings us closer to success!
            </p>
            <div className="flex justify-center items-center gap-8 py-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">₹50,000</p>
                <p className="text-sm text-gray-400">Target</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">₹32,450</p>
                <p className="text-sm text-gray-400">Raised</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">142</p>
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
              Scan the QR code to donate or use UPI ID: 8510002052@pthdfc
              </p>
            </div>

            {/* Contribution Form */}
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="amount" className="text-gray-300">Amount Contributed</Label>
                <Input 
                  id="amount" 
                  type="number" 
                  placeholder="Enter amount" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message" className="text-gray-300">Message (Optional)</Label>
                <Textarea 
                  id="message" 
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

              <Button className="w-full bg-white hover:bg-gray-200 text-black mt-6">
                Submit Contribution
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrowdfundingForm;