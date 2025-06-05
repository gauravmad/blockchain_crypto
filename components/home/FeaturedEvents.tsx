"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { mockEvents } from "@/lib/mock-data";

export default function FeaturedEvents() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    // In a real app, we would fetch events from the blockchain/API
    setEvents(mockEvents.slice(0, 3));
  }, []);
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <p className="text-muted-foreground mt-2">Discover popular events with exclusive NFT tickets</p>
          </div>
          <Link href="/events">
            <Button variant="ghost" className="mt-4 md:mt-0">
              View all events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/events/${event.id}`}>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {event.featured && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span className="text-sm text-muted-foreground">
                        {event.attendees} attendees
                      </span>
                    </div>
                    <div className="font-semibold">
                      {event.price} ETH
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}