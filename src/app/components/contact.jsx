'use client'
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
      access_key: "78c300b1-3b35-420c-bcad-7d33998dfbba",
      from_name: "Website Contact Form",
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
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
    <section id="contact" className="w-full py-16 sm:pt-0 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="relative overflow-hidden border border-gray-700 bg-black/40 backdrop-blur-sm">
          <div className="absolute -left-32 -top-32 w-80 h-80 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-rose-500 opacity-50 rounded-full blur-[90px]" />
          <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-gradient-to-br from-blue-500 via-teal-400 to-cyan-300 opacity-50 rounded-full blur-[90px]" />

          <CardContent className="p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  I&apos;m currently looking for new opportunities, my inbox is always
                  open. Whether you have a question or just want to say hi, I&apos;ll
                  get back to you!
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                    { icon: <Github className="w-6 h-6" />, href: "#" },
                    { icon: <BsSubstack className="w-6 h-6" />, href: "#" },
                    { icon: <Youtube className="w-6 h-6" />, href: "#" },
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
              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  {emailSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="relative flex items-center justify-center h-full"
                    >
                      <div className="w-full bg-green-500/10 border border-green-500/20 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                        </div>
                        <p className="text-green-500 text-base sm:text-lg font-medium text-center">Message sent successfully!</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-5"
                      onSubmit={handleSubmit}
                    >
                      {error && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                          <p className="text-red-500 text-sm">{error}</p>
                        </div>
                      )}
                      <div>
                        <label htmlFor="subject" className="text-white text-sm font-medium block mb-2">
                          Name
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          required
                          className="bg-gray-900/50 border-gray-800 text-white w-full"
                          placeholder="Just saying hi"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-white text-sm font-medium block mb-2">
                          Your email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-gray-900/50 border-gray-800 text-white w-full"
                          placeholder="abc@gmail.com"
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
                          className="bg-gray-900/50 border-gray-800 text-white w-full resize-none"
                          placeholder="Let's talk about..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-gray-200 transition-colors py-3"
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