'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Navbar from './navbar';
import Footer2 from './footer2';
import { useUser } from '@clerk/nextjs';

const BookingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const { isSignedIn, user } = useUser();

  // Replace this with your actual Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvAR07Y1toQO3S3-L2bfLO1v45UToj3iMhzSWmixH425t5n8AcQcYAASL7e8G3-iDQ/exec';

  const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      termsandconditions: false,
      ownsCar: '',
      chauffeurFrequency: '',
      priorityFactor: ''
    }
  });

  const resetForm = () => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    setSubmissionError("");
    reset();
  };

  // Submit to Google Sheets with better error handling
  const submitToGoogleSheets = async (formData) => {
    try {
      console.log('Submitting to Google Sheets:', formData);
      
      // Create form data for the request
      const payload = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        ownsCar: formData.ownsCar,
        chauffeurFrequency: formData.chauffeurFrequency,
        priorityFactor: formData.priorityFactor,
        termsandconditions: formData.termsandconditions
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Changed to text/plain to avoid preflight
        },
        body: JSON.stringify(payload),
        mode: 'no-cors', // This helps avoid CORS issues but limits response access
      });

      // Note: With no-cors mode, we can't read the response
      // but the request will go through
      console.log('Google Sheets request sent');
      return true;

    } catch (error) {
      console.error('Google Sheets submission error:', error);
      return false;
    }
  };

  // Alternative method using form submission technique
  const submitToGoogleSheetsViaForm = async (formData) => {
    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SCRIPT_URL;
      form.style.display = 'none';

      // Add form fields
      Object.keys(formData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionError("");

    const formData = {
      name: data.name,
      email: isSignedIn ? user?.primaryEmailAddress?.emailAddress : data.email,
      number: data.number,
      ownsCar: data.ownsCar,
      chauffeurFrequency: data.chauffeurFrequency,
      priorityFactor: data.priorityFactor,
      termsandconditions: data.termsandconditions
    };

    try {
      let web3Success = false;
      let sheetsSuccess = false;

      // Submit to Web3Forms
      try {
        console.log('Submitting to Web3Forms...');
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '78c300b1-3b35-420c-bcad-7d33998dfbba',
            FormType: 'Booking Details',
            ...formData,
          }),
        });

        web3Success = web3Response.status === 200;
        console.log('Web3Forms success:', web3Success);
      } catch (web3Error) {
        console.error('Web3Forms error:', web3Error);
      }

      // Submit to Google Sheets
      try {
        console.log('Submitting to Google Sheets...');
        sheetsSuccess = await submitToGoogleSheets(formData);
        
        // Fallback: try the form submission method if the first fails
        if (!sheetsSuccess) {
          console.log('Trying alternative Google Sheets submission...');
          sheetsSuccess = await submitToGoogleSheetsViaForm(formData);
        }
        
        console.log('Google Sheets success:', sheetsSuccess);
      } catch (sheetsError) {
        console.error('Google Sheets error:', sheetsError);
      }

      // Consider it a success if at least one method worked
      if (web3Success || sheetsSuccess) {
        setIsSuccess(true);
        reset();
        
        if (web3Success && sheetsSuccess) {
          console.log('Form submitted successfully to both Web3Forms and Google Sheets');
        } else if (web3Success) {
          console.log('Form submitted successfully to Web3Forms only');
        } else {
          console.log('Form submitted successfully to Google Sheets only');
        }
      } else {
        setSubmissionError("There was a problem submitting your form. Please try again or contact support.");
      }

    } catch (error) {
      setSubmissionError("Network error. Please check your connection and try again.");
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <Navbar/>

      <main className="max-w-6xl mx-auto px-4 py-36 pb-24">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="bg-black/80 border border-gray-800 overflow-hidden">
              <CardContent className="p-8 text-center">
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
                        <h3 className="text-2xl font-bold text-white mb-4">Waitlist Joined!</h3>
                        <p className="text-gray-300 mb-6">
                          Thank you for joining the Chauffit waitlist. We've received your request and will contact you shortly.
                        </p>
                        <Button 
                          onClick={resetForm}
                          className="bg-[#720c17] hover:bg-[#5a0912] text-white"
                        >
                          Submit Another Response
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                          Unlock Exclusive Early Bird Offers
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

                        {/* Question 1: Do you own a car in Gurgaon/Delhi NCR? */}
                        <div className="space-y-3">
                          <Label className="text-gray-300 font-medium">Do you own a car in Gurgaon/Delhi NCR?</Label>
                          <RadioGroup 
                            onValueChange={(value) => setValue('ownsCar', value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="yes" 
                                id="owns-car-yes" 
                                {...register('ownsCar', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="owns-car-yes" className="text-gray-300">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="no" 
                                id="owns-car-no" 
                                {...register('ownsCar', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="owns-car-no" className="text-gray-300">No</Label>
                            </div>
                          </RadioGroup>
                          {errors.ownsCar && <p className="text-red-500 text-sm mt-1">{errors.ownsCar.message}</p>}
                        </div>

                        {/* Question 2: How often would you need a chauffeur? */}
                        <div className="space-y-3">
                          <Label className="text-gray-300 font-medium">How often would you need a chauffeur?</Label>
                          <RadioGroup 
                            onValueChange={(value) => setValue('chauffeurFrequency', value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="daily-weekly" 
                                id="freq-daily-weekly" 
                                {...register('chauffeurFrequency', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="freq-daily-weekly" className="text-gray-300">Daily / Weekly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="occasionally" 
                                id="freq-occasionally" 
                                {...register('chauffeurFrequency', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="freq-occasionally" className="text-gray-300">Occasionally</Label>
                            </div>
                          </RadioGroup>
                          {errors.chauffeurFrequency && <p className="text-red-500 text-sm mt-1">{errors.chauffeurFrequency.message}</p>}
                        </div>

                        {/* Question 3: What matters most to you when booking a chauffeur? */}
                        <div className="space-y-3">
                          <Label className="text-gray-300 font-medium">What matters most to you when booking a chauffeur?</Label>
                          <RadioGroup 
                            onValueChange={(value) => setValue('priorityFactor', value)}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="safety" 
                                id="priority-safety" 
                                {...register('priorityFactor', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="priority-safety" className="text-gray-300">Safety</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="convenience" 
                                id="priority-convenience" 
                                {...register('priorityFactor', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="priority-convenience" className="text-gray-300">Convenience</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="price" 
                                id="priority-price" 
                                {...register('priorityFactor', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="priority-price" className="text-gray-300">Price</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem 
                                value="reliability" 
                                id="priority-reliability" 
                                {...register('priorityFactor', { required: "Please select an option" })}
                                className="border-amber-500 text-amber-500"
                              />
                              <Label htmlFor="priority-reliability" className="text-gray-300">Reliability</Label>
                            </div>
                          </RadioGroup>
                          {errors.priorityFactor && <p className="text-red-500 text-sm mt-1">{errors.priorityFactor.message}</p>}
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
                              "Join Now"
                            )}
                          </Button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                </AnimatePresence>
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