"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilePieChart as CirclePieChart, Users, Timer, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { mockCreatedEvents } from "@/lib/mock-data";

interface Event {
  id: string;
  name: string;
  date: string;
  status: string;
  createdAt: string;
  soldTickets: number;
  totalTickets: number;
  revenue: number;
  attendees: number;
}

export default function CreatedEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setEvents(mockCreatedEvents);
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="h-6 w-1/3 bg-secondary animate-pulse mb-2" />
              <div className="h-8 w-3/4 bg-secondary animate-pulse mb-4" />
              <div className="space-y-2 mb-4">
                <div className="h-4 w-1/2 bg-secondary animate-pulse" />
                <div className="h-4 w-1/2 bg-secondary animate-pulse" />
              </div>
              <div className="h-4 w-full bg-secondary animate-pulse mb-2" />
              <div className="h-16 w-full bg-secondary animate-pulse" />
            </CardContent>
            <CardFooter className="border-t">
              <div className="h-8 w-full bg-secondary animate-pulse" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  if (events.length === 0) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-xl font-medium mb-2">No Events Created</h3>
        <p className="text-muted-foreground mb-4">
          You haven't created any events yet.
        </p>
        <Button asChild>
          <Link href="/create-event">
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Link>
        </Button>
      </Card>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Events</h2>
        <Button asChild size="sm">
          <Link href="/create-event">
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <Badge variant={event.status === "active" ? "default" : "secondary"}>
                  {event.status === "active" ? "Active" : "Ended"}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  Created {event.createdAt}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
              
              <div className="space-y-1 mb-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Timer className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Ticket Sales</span>
                    <span>{event?.soldTickets}/{event?.totalTickets} ({Math.round(event?.soldTickets / event.totalTickets * 100)}%)</span>
                  </div>
                  <Progress value={event.soldTickets / event.totalTickets * 100} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-3 rounded-lg">
                    <div className="flex items-center">
                      <CirclePieChart className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">Revenue</span>
                    </div>
                    <p className="text-xl font-bold mt-1">{event.revenue} ETH</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">Attendees</span>
                    </div>
                    <p className="text-xl font-bold mt-1">{event.attendees}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="border-t flex justify-between">
              <Button asChild variant="ghost" size="sm">
                <Link href={`/events/${event.id}`}>
                  View Event
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/events/${event.id}`}>
                  Manage Event
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}