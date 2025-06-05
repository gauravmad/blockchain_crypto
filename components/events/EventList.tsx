"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { mockEvents } from "@/lib/mock-data";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, we would fetch events from the blockchain/API
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 bg-secondary animate-pulse" />
            <CardContent className="pt-6">
              <div className="h-6 w-1/3 bg-secondary animate-pulse mb-2" />
              <div className="h-6 w-2/3 bg-secondary animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-secondary animate-pulse mb-3" />
              <div className="h-4 w-full bg-secondary animate-pulse" />
              <div className="h-4 w-3/4 bg-secondary animate-pulse mt-2" />
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="h-4 w-1/3 bg-secondary animate-pulse" />
              <div className="h-4 w-1/4 bg-secondary animate-pulse ml-auto" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No events found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or check back later</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
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
              
              <p className="text-muted-foreground line-clamp-3">
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
      ))}
    </div>
  );
}