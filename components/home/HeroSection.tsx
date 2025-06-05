"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useWallet } from "@/contexts/WalletContext";
import { Calendar, Ticket, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { isConnected, connect } = useWallet();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Event Tickets as <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">NFTs</span> on the Blockchain
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Buy, sell, and verify event tickets with blockchain security. 
              No more counterfeits, just seamless experiences.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/events">
                <Button size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" /> Explore Events
                </Button>
              </Link>
              
              {!isConnected ? (
                <Button variant="outline" size="lg" onClick={connect} className="w-full sm:w-auto">
                  Connect Wallet
                </Button>
              ) : (
                <Link href="/create-event">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Ticket className="mr-2 h-4 w-4" /> Create Event
                  </Button>
                </Link>
              )}
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-secondary rounded-full h-8 w-8 flex items-center justify-center text-foreground mr-2">
                <Ticket className="h-4 w-4" />
              </span>
              <span>Over 10,000 tickets minted on our platform</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 flex items-center justify-center">
              <div className="bg-background/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-white">Web3 Conference 2025</h3>
                    <p className="text-white/80 mt-1">June 15-18, 2025</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-white">VIP PASS</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 my-4 pt-4">
                  <div className="flex justify-between text-white mb-2">
                    <span>Ticket #</span>
                    <span className="font-mono">0x42...f791</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Owner</span>
                    <span className="font-mono">0x71...9e23</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="w-full h-24 bg-white/10 rounded-md border border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">QR CODE AREA</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-md text-white font-medium flex items-center justify-center">
                  View on Blockchain <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}