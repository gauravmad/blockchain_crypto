"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "BlockTix has revolutionized how I attend events. The NFT tickets are secure, and I love having a digital collectible from my favorite concerts.",
    author: "Sarah Johnson",
    role: "Music Enthusiast",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "As an event organizer, BlockTix has eliminated ticket fraud and provided transparent analytics on ticket sales and transfers.",
    author: "Michael Chen",
    role: "Event Producer",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The secondary market for tickets is finally fair for artists and fans. BlockTix has solved a major problem in the industry.",
    author: "David Williams",
    role: "Venue Manager",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What People Are Saying</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their event experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <Card className="border bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <Quote className="h-10 w-10 text-primary/30 mb-4" />
                    <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}