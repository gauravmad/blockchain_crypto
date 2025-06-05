"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Calendar, Clock, ArrowUpRight, SendHorizonal } from "lucide-react";
import { mockUserTickets } from "@/lib/mock-data";

export default function UserTickets() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // In a real app, we would fetch user's tickets from the blockchain/API
    setTimeout(() => {
      setTickets(mockUserTickets);
      setFilteredTickets(mockUserTickets);
      setLoading(false);
    }, 1000);
  }, []);
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTickets(tickets);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredTickets(
        tickets.filter(
          (ticket) =>
            ticket.eventName.toLowerCase().includes(query) ||
            ticket.tokenId.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, tickets]);
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-40 bg-secondary animate-pulse" />
            <CardContent className="pt-6">
              <div className="h-6 w-2/3 bg-secondary animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-secondary animate-pulse mb-4" />
              <div className="h-20 w-full bg-secondary animate-pulse mb-4" />
              <div className="h-8 w-full bg-secondary animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (tickets.length === 0) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-xl font-medium mb-2">No Tickets Found</h3>
        <p className="text-muted-foreground mb-4">
          You don't have any NFT tickets yet.
        </p>
        <Button asChild>
          <a href="/events">Browse Events</a>
        </Button>
      </Card>
    );
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">My Tickets</h2>
        <div className="relative w-full md:w-64">
          <Input
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTickets
              .filter((ticket) => new Date(ticket.eventDate) > new Date())
              .map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTickets
              .filter((ticket) => new Date(ticket.eventDate) <= new Date())
              .map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TicketCard({ ticket }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={ticket.imageUrl} 
          alt={ticket.eventName}
          className="w-full h-40 object-cover"
        />
        {ticket.used && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="outline" className="text-white border-white">Used</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="pt-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant={ticket.used ? "secondary" : "default"}>
            {ticket.ticketType}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            #{ticket.tokenId.slice(0, 6)}
          </span>
        </div>
        
        <h3 className="text-lg font-bold mb-1">{ticket.eventName}</h3>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{ticket.eventDate}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>{ticket.eventTime}</span>
          </div>
        </div>
        
        <div className="mt-auto space-y-3">
          {!ticket.used && (
            <Button className="w-full" variant="default" size="sm">
              <QrCode className="h-4 w-4 mr-2" /> View Ticket
            </Button>
          )}
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              <ArrowUpRight className="h-4 w-4 mr-2" /> View NFT
            </Button>
            
            {!ticket.used && ticket.transferable && (
              <Button variant="outline" size="sm" className="flex-1">
                <SendHorizonal className="h-4 w-4 mr-2" /> Transfer
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}