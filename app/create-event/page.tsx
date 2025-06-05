"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@/contexts/WalletContext";
import { CreateEventForm } from "@/components/events/CreateEventForm";
import ConnectWallet from "@/components/auth/ConnectWallet";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function CreateEventPage() {
  const { isConnected } = useWallet();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Create Event</h1>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <p className="mb-6">Connect your wallet to create an event</p>
            <ConnectWallet />
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (eventData: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
  
      const result = await res.json();
  
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to create event");
      }
  
      router.push("/events");
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Create Event</h1>
      <p className="text-muted-foreground mb-8">
        List your event on the blockchain and sell tickets as NFTs
      </p>

      <div className="max-w-3xl mx-auto">
        <CreateEventForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
