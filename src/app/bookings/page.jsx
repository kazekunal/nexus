'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Clock, Shield, MapPin, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import ServiceCards from '../components/booking'
import logo from "../../../public/navbar.png"
import Navbar from '../components/navbar';


function page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <Navbar/>
        <ServiceCards/>
    </div>
  )
}

export default page