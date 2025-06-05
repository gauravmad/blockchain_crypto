"use client";

import { motion } from "framer-motion";
import { 
  Wallet, 
  Ticket, 
  QrCode, 
  ArrowRight,
  ShoppingCart
} from "lucide-react";

const steps = [
  {
    icon: <Wallet className="h-10 w-10" />,
    title: "Connect Your Wallet",
    description: "Link your crypto wallet to access the platform and manage your tickets securely."
  },
  {
    icon: <ShoppingCart className="h-10 w-10" />,
    title: "Purchase NFT Tickets",
    description: "Browse events and purchase tickets which are minted as NFTs directly to your wallet."
  },
  {
    icon: <Ticket className="h-10 w-10" />,
    title: "Store & Transfer",
    description: "Your tickets are stored in your wallet and can be transferred or resold if allowed by the event creator."
  },
  {
    icon: <QrCode className="h-10 w-10" />,
    title: "Verify & Attend",
    description: "Present your NFT ticket for verification at the event entrance using a simple QR code."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our blockchain-based ticketing system ensures security, transparency, and ease of use
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card border rounded-lg p-6 h-full flex flex-col items-center text-center relative z-10">
                <div className="bg-primary/10 rounded-full p-4 mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connecting steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}