"use client"

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Linkedin, Github, Youtube } from 'lucide-react';
import { BsSubstack } from "react-icons/bs";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const data = {
      access_key: "77857d85-8d56-4e25-9c13-7247134d2421",
      from_name: "Website Contact Form",
      subject: formData.get('subject'),
      email: formData.get('email'),
      message: formData.get('message'),
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
        setEmailSubmitted(true);
        e.target.reset();
        // Reset form after 5 seconds
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-8 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="relative overflow-hidden border border-gray-700 bg-black/40 backdrop-blur-sm">
          {/* Enhanced Gradient Effects */}
          <div className="absolute -left-32 -top-32 w-80 h-80 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-rose-500 opacity-50 rounded-full blur-[90px]" />
          <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-gradient-to-br from-blue-500 via-teal-400 to-cyan-300 opacity-50 rounded-full blur-[90px]" />
          
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  I&apos;m currently looking for new opportunities, my inbox is always
                  open. Whether you have a question or just want to say hi, I&apos;ll
                  get back to you!
                </p>
                <div className="flex gap-6">
                  {[
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/saranbluri/" },
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/SaranBodduluri" },
                    { icon: <BsSubstack className="w-6 h-6" />, href: "https://saranbluri.substack.com/" },
                    { icon: <Youtube className="w-6 h-6" />, href: "https://www.youtube.com/@SaranBluri" },
                  ].map((social, index) => (
                    <Link 
                      key={index}
                      href={social.href}
                      className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {emailSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                          <Check className="w-6 h-6 text-green-500" />
                        </div>
                        <p className="text-green-500 text-lg font-medium">Message sent successfully!</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      {error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                          <p className="text-red-500 text-sm">{error}</p>
                        </div>
                      )}
                      <div>
                        <label htmlFor="email" className="text-white text-sm font-medium block mb-2">
                          Your email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-gray-900/50 border-gray-800 text-white"
                          placeholder="abc@gmail.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="text-white text-sm font-medium block mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          required
                          className="bg-gray-900/50 border-gray-800 text-white"
                          placeholder="Just saying hi"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="text-white text-sm font-medium block mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="bg-gray-900/50 border-gray-800 text-white resize-none"
                          placeholder="Let's talk about..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailSection;