"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2,
  GlobeIcon,
  TicketIcon
} from "lucide-react";
import { mockEvents } from "@/lib/mock-data";

export default function EventDetails({ id }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, we would fetch event from the blockchain/API
    setTimeout(() => {
      const foundEvent = mockEvents.find((e) => e.id === id) || mockEvents[0];
      setEvent(foundEvent);
      setLoading(false);
    }, 1000);
  }, [id]);
  
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-2/3 bg-secondary rounded mb-2"></div>
        <div className="h-6 w-1/3 bg-secondary rounded mb-6"></div>
        <div className="aspect-video bg-secondary rounded-lg mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="h-20 bg-secondary rounded"></div>
          <div className="h-20 bg-secondary rounded"></div>
          <div className="h-20 bg-secondary rounded"></div>
        </div>
        <div className="h-60 bg-secondary rounded"></div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
        <p className="text-muted-foreground mb-4">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <a href="/events">Browse All Events</a>
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{event.category}</Badge>
            {event.featured && (
              <Badge variant="default">Featured</Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{event.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{event.time}</span>
          </div>
        </div>
        
        <Button size="sm" variant="outline">
          <Share2 className="h-4 w-4 mr-2" /> Share
        </Button>
      </div>
      
      <div className="rounded-xl overflow-hidden mb-8 border">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full aspect-video object-cover"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-secondary/30 rounded-lg p-4 flex items-center">
          <div className="bg-primary/10 rounded-full p-3 mr-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-muted-foreground">{event.location}</p>
          </div>
        </div>
        
        <div className="bg-secondary/30 rounded-lg p-4 flex items-center">
          <div className="bg-primary/10 rounded-full p-3 mr-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Attendees</h3>
            <p className="text-muted-foreground">{event.attendees} registered</p>
          </div>
        </div>
        
        <div className="bg-secondary/30 rounded-lg p-4 flex items-center">
          <div className="bg-primary/10 rounded-full p-3 mr-4">
            <TicketIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Price</h3>
            <p className="text-muted-foreground">{event.price} ETH per ticket</p>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="about" className="mb-8">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="organizer">Organizer</TabsTrigger>
          <TabsTrigger value="contract">Contract</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about" className="pt-4">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">{event.description}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Event Details</h3>
            <p>{event.details}</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Ticket Information</h3>
            <ul>
              <li>NFT Tickets are transferable {event.transferable ? "" : "not"} transferable</li>
              <li>Resale is {event.resellable ? "allowed" : "not allowed"}</li>
              <li>Each wallet can purchase up to {event.maxTicketsPerWallet} tickets</li>
              <li>Tickets will be minted on the {event.blockchain} blockchain</li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="organizer" className="pt-4">
          <div className="flex items-center mb-6">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src={event.organizer.avatar} />
              <AvatarFallback>{event.organizer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{event.organizer.name}</h3>
              <p className="text-muted-foreground mb-2">Event Organizer</p>
              <div className="flex items-center">
                <GlobeIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                <a href={event.organizer.website} className="text-sm text-primary hover:underline">
                  {event.organizer.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </div>
          <p>{event.organizer.description}</p>
        </TabsContent>
        
        <TabsContent value="contract" className="pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Contract Address</h3>
              <code className="bg-secondary/50 p-2 rounded block overflow-x-auto">
                {event.contract.address}
              </code>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Token Standard</h3>
              <p>{event.contract.standard}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-1">Blockchain</h3>
              <p>{event.blockchain}</p>
            </div>
            
            <div>
              <Button variant="outline" size="sm" asChild>
                <a href={`https://etherscan.io/address/${event.contract.address}`} target="_blank" rel="noopener noreferrer">
                  View on Etherscan
                </a>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}