"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useWallet } from "@/contexts/WalletContext";
import UserTickets from "@/components/dashboard/UserTickets";
import CreatedEvents from "@/components/dashboard/CreatedEvents";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import ConnectWallet from "@/components/auth/ConnectWallet";
import ProfileHeader from "@/components/dashboard/ProfileHeader";

export default function DashboardPage() {
  const { isConnected } = useWallet();

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <p className="mb-6">Connect your wallet to view your dashboard</p>
            <ConnectWallet />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader />
      
      <Tabs defaultValue="tickets" className="mt-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="events">My Events</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="tickets" className="mt-6">
          <UserTickets />
        </TabsContent>
        <TabsContent value="events" className="mt-6">
          <CreatedEvents />
        </TabsContent>
        <TabsContent value="transactions" className="mt-6">
          <TransactionHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
}