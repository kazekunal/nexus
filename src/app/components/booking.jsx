// kunal - 77857d85-8d56-4e25-9c13-7247134d2421
// varun -  78c300b1-3b35-420c-bcad-7d33998dfbba
'use client'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Check } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import Navbar from './navbar';
import Footer2 from './footer2';
import { useUser } from '@clerk/nextjs';

const BookingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const { isSignedIn, user } = useUser();

  
  const { register, handleSubmit, reset, formState: { errors }, watch, setValue, control } = useForm({
    defaultValues: {
      carSegment: 'hatchback',
      transmission: 'automatic',
      tripInsurance: 'none',
      priceVariant: 'fixed',
      termsandconditions: false
    }
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    if (isSuccess) {
      setIsSuccess(false);
    }
    setSubmissionError("");
    reset();
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionError("");
  
    try {
      // 1. Submit to Web3Forms
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '78c300b1-3b35-420c-bcad-7d33998dfbba', // varun's key
          FormType: 'Booking Details',
          ...data,
        }),
      });
  
      const web3Data = await web3Response.json();
      
      // 2. Submit to Google Sheets using a more reliable approach
      let sheetsSuccess = false;
      
      try {
        // Your Google Apps Script is expecting JSON, so we'll send JSON
        const jsonData = JSON.stringify({
          ...data,
          termsandconditions: data.termsandconditions ? "true" : "false",
          timestamp: new Date().toISOString()
        });
        
        console.log("Sending to Google Sheets:", jsonData);
        
        // Method 1: Direct fetch with JSON
        try {
          const directResponse = await fetch(
            'https://script.google.com/macros/s/AKfycbyPniWj1N3QR8WS5BGySDaJ0cpPLJvKxUJyiE5PNFtcOA1SN3xP3fVSB7TIvcNBwMW0/exec', 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: jsonData,
            }
          );
          console.log("Direct fetch response:", directResponse);
        } catch (directError) {
          console.log("Direct fetch failed:", directError);
          // Continue to backup methods
        }
        
        // Method 2: Use XHR for better cross-domain support
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyPniWj1N3QR8WS5BGySDaJ0cpPLJvKxUJyiE5PNFtcOA1SN3xP3fVSB7TIvcNBwMW0/exec', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            console.log("XHR Response:", xhr.status, xhr.responseText);
          }
        };
        xhr.send(jsonData);
        
        // Method 3: Fallback - GET request with parameters
        const queryParams = new URLSearchParams();
        Object.entries(data).forEach(([key, value]) => {
          queryParams.append(key, typeof value === 'boolean' ? value.toString() : value);
        });
        
        const img = document.createElement('img');
        img.style.display = 'none';
        img.src = `https://script.google.com/macros/s/AKfycbyPniWj1N3QR8WS5BGySDaJ0cpPLJvKxUJyiE5PNFtcOA1SN3xP3fVSB7TIvcNBwMW0/exec?${queryParams.toString()}`;
        document.body.appendChild(img);
        
        // Remove the image after a while
        setTimeout(() => {
          if (document.body.contains(img)) {
            document.body.removeChild(img);
          }
        }, 5000);
        
        // Consider this a success if we've tried all methods
        sheetsSuccess = true;
        
      } catch (sheetsError) {
        console.error('Google Sheets submission error:', sheetsError);
        // Continue even if Google Sheets fails - we'll still consider the form submitted
        // if the Web3Forms submission was successful
      }
  
      // Consider the submission successful if at least Web3Forms succeeded
      if (web3Response.status === 200) {
        setIsSuccess(true);
        reset();
        
        // If Google Sheets failed but Web3Forms succeeded, we can still log the submission locally
        if (!sheetsSuccess) {
          console.log('Form data submitted to Web3Forms but not to Google Sheets:', data);
        }
      } else {
        setSubmissionError("There was a problem submitting your form. Please try again.");
        console.error('Web3Forms submission error:', web3Data);
      }
    } catch (error) {
      setSubmissionError("Network error. Please check your connection and try again.");
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSignedIn && user) {
      setValue('email', user.primaryEmailAddress?.emailAddress || '');
    }
  }, [isSignedIn, user, setValue]);
  

  return (
    <div className="min-h-screen bg-black bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <Navbar/>

      <main className="max-w-6xl mx-auto px-4 py-36 pb-24">
        <div className="text-center space-y-4 py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white [text-wrap:balance] mx-auto">
            Your Personal <span className="text-[#bd8c5e]">Chauffeur</span><br/> Just a Tap Away!
          </h1>
          <p className="text-lg sm:text-xl text-[#d9d1c6] max-w-2xl mx-auto">
            Professional, safe, and reliable chauffeurs for your personal car – now available in Gurgaon for Friday & Saturday nights!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="bg-black/80 border border-gray-800 overflow-hidden">
              <CardContent className="p-8 text-center">
                {!isFormOpen ? (
                  <>
                    <h3 className="text-3xl font-bold text-white mb-6">
                      Premium Chauffeur Service
                    </h3>
                    <p className="text-gray-300 mb-8">
                      Enjoy a luxurious and safe ride with our professional chauffeurs. 
                      Book now for the ultimate travel experience.
                    </p>
                    <Button 
                      onClick={toggleForm}
                      className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg"
                    >
                      Book a Chauffeur
                    </Button>
                  </>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isSuccess ? (
                        <div className="py-8 text-center">
                          <div className="rounded-full bg-green-600 w-16 h-16 mx-auto flex items-center justify-center mb-6">
                            <Check className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">Booking processed!</h3>
                          <p className="text-gray-300 mb-6">
                            Thank you for booking with Chauffit. We've received your request and will contact you shortly.
                          </p>
                          <Button 
                            onClick={toggleForm}
                            className="bg-[#720c17] hover:bg-[#5a0912] text-white"
                          >
                            Close
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                          <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            Book Your Chauffeur
                          </h3>
                          
                          {submissionError && (
                            <div className="bg-red-900/50 border border-red-700 text-white p-3 rounded">
                              {submissionError}
                            </div>
                          )}
                          
                          <div>
                            <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                            <Input 
                              id="name" 
                              {...register('name', { required: "Name is required" })}
                              className="bg-gray-800 border-gray-700 text-white mt-1" 
                              placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                          </div>
                          
                          <div>
                            <Label htmlFor="number" className="text-gray-300">Phone Number</Label>
                            <Input 
                              id="number" 
                              type="tel"
                              {...register('number', { required: "Phone number is required" })}
                              className="bg-gray-800 border-gray-700 text-white mt-1" 
                              placeholder="Enter your phone number"
                            />
                            {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>}
                          </div>
                          
                          {isSignedIn ? (
                          <>
                            <div>
                              <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                              <Input
                                id="email"
                                type="email"
                                value={user?.primaryEmailAddress?.emailAddress || ''}
                                disabled
                                className="bg-gray-700 border-gray-600 text-white mt-1"
                              />
                            </div>
                            {/* Hidden input to ensure email is submitted */}
                            <input
                              type="hidden"
                              {...register('email', { required: true })}
                              value={user?.primaryEmailAddress?.emailAddress || ''}
                            />
                          </>
                        ) : (
                          <div>
                            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              {...register('email', {
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              })}
                              className="bg-gray-800 border-gray-700 text-white mt-1"
                              placeholder="Enter your email address"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                          </div>
                        )}

                          <div>
                            <Label htmlFor="emergencyContact" className="text-gray-300">Emergency Contact</Label>
                            <Input 
                              id="emergencyContact" 
                              type="tel"
                              {...register('emergencyContact', { required: "Emergency contact is required" })}
                              className="bg-gray-800 border-gray-700 text-white mt-1" 
                              placeholder="Enter emergency contact number"
                            />
                            {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>}
                          </div>
                          
                          <div>
                            <Label className="text-gray-300 block mb-2">Car Segment</Label>
                            <Controller
                              name="carSegment"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup 
                                  value={field.value} 
                                  onValueChange={field.onChange}
                                >
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="hatchback" 
                                        id="hatchback" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="hatchback" className="text-gray-300">Hatchback</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="microsuv" 
                                        id="microsuv" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="microsuv" className="text-gray-300">Micro SUV</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="midsuv" 
                                        id="midsuv" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="midsuv" className="text-gray-300">Mid-size SUV</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="sedan" 
                                        id="sedan" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="sedan" className="text-gray-300">Sedan</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="fullsuv" 
                                        id="fullsuv" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="fullsuv" className="text-gray-300">Full-size SUV</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="luxury" 
                                        id="luxury" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="luxury" className="text-gray-300">Luxury</Label>
                                    </div>
                                  </div>
                                </RadioGroup>
                              )}
                            />
                          </div>
                          
                          <div>
                            <Label className="text-gray-300 block mb-2">Transmission</Label>
                            <Controller
                              name="transmission"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup 
                                  value={field.value} 
                                  onValueChange={field.onChange}
                                >
                                  <div className="flex space-x-4">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="automatic" 
                                        id="automatic" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="automatic" className="text-gray-300">Automatic</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="manual" 
                                        id="manual" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="manual" className="text-gray-300">Manual</Label>
                                    </div>
                                  </div>
                                </RadioGroup>
                              )}
                            />
                          </div>
                          
                          <div>
                            <Label className="text-gray-300 block mb-2">Trip Insurance (Optional)</Label>
                            <Controller
                              name="tripInsurance"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup 
                                  value={field.value} 
                                  onValueChange={field.onChange}
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="scratch" 
                                        id="scratch" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="scratch" className="text-gray-300">Scratch Coverage</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="scratchdent" 
                                        id="scratchdent" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="scratchdent" className="text-gray-300">Scratch & Dent Coverage</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="full" 
                                        id="full" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="full" className="text-gray-300">Full Coverage</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="none" 
                                        id="none" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="none" className="text-gray-300">No Insurance</Label>
                                    </div>
                                  </div>
                                </RadioGroup>
                              )}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="pickup" className="text-gray-300">Pick up Location</Label>
                            <Input 
                              id="pickup" 
                              value="Sector 29, main parking, near downtown, Gurgaon"
                              disabled
                              className="bg-gray-700 border-gray-600 text-gray-400 mt-1" 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="dropoff" className="text-gray-300">Drop off Location</Label>
                            <Input 
                              id="dropoff" 
                              {...register('dropoff', { required: "Drop off location is required" })}
                              className="bg-gray-800 border-gray-700 text-white mt-1" 
                              placeholder="Enter your destination"
                            />
                            {errors.dropoff && <p className="text-red-500 text-sm mt-1">{errors.dropoff.message}</p>}
                          </div>
                          
                          <div>
                            <Label className="text-gray-300 block mb-2">Price Variant</Label>
                            <Controller
                              name="priceVariant"
                              control={control}
                              render={({ field }) => (
                                <RadioGroup 
                                  value={field.value} 
                                  onValueChange={field.onChange}
                                >
                                  <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="fixed" 
                                        id="fixed" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="fixed" className="text-gray-300">Fixed</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="perkm" 
                                        id="perkm" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="perkm" className="text-gray-300">Per KM</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem 
                                        value="permin" 
                                        id="permin" 
                                        className="text-amber-500"
                                      />
                                      <Label htmlFor="permin" className="text-gray-300">Per Min</Label>
                                    </div>
                                  </div>
                                </RadioGroup>
                              )}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="referralCode" className="text-gray-300">Referral Code (Optional)</Label>
                            <Input 
                              id="referralCode" 
                              {...register('referralCode')}
                              className="bg-gray-800 border-gray-700 text-white mt-1" 
                              placeholder="Enter referral code if you have one"
                            />
                          </div>
                          
                          <div className="flex items-center space-x-2 pt-2">
                            <Checkbox 
                              id="termsandconditions"
                              onCheckedChange={(checked) => {
                                setValue('termsandconditions', checked === true);
                              }}
                              {...register('termsandconditions', { 
                                required: "Terms and conditions are required" 
                              })}
                              className="border-amber-500 text-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:text-white" 
                            />
                            <Label htmlFor="termsandconditions" className="text-gray-300 text-sm">
                              I agree to the <a href='/tnc' className="text-amber-500 hover:underline">terms and conditions</a> and understand that my booking is subject to availability
                            </Label>
                          </div>
                          {errors.termsandconditions && (
                            <p className="text-red-500 text-sm mt-1">{errors.termsandconditions.message}</p>
                          )}
                          
                          <div className="flex gap-4 pt-4">
                            <Button 
                              type="button"
                              onClick={toggleForm}
                              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white"
                            >
                              Cancel
                            </Button>
                            <Button 
                              type="submit"
                              className="flex-1 bg-red-800 hover:bg-red-900 text-white"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Processing
                                </>
                              ) : (
                                "Confirm Booking"
                              )}
                            </Button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer2/>
    </div>
  );
};

export default BookingPage;