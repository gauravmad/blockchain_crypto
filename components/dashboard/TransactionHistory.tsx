"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  ShoppingCart, 
  Ticket, 
  Send,
  ExternalLink 
} from "lucide-react";
import { mockTransactions } from "@/lib/mock-data";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, we would fetch transactions from the blockchain/API
    setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Type</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="h-6 w-16 bg-secondary animate-pulse rounded-md" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-32 bg-secondary animate-pulse rounded-md" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-24 bg-secondary animate-pulse rounded-md" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-16 bg-secondary animate-pulse rounded-md" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-16 bg-secondary animate-pulse rounded-md" />
                </TableCell>
                <TableCell className="text-right">
                  <div className="h-6 w-16 bg-secondary animate-pulse rounded-md ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  if (transactions.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-medium mb-2">No Transaction History</h3>
        <p className="text-muted-foreground">
          You don't have any transaction history yet.
        </p>
      </div>
    );
  }
  
  // Helper function to render transaction type icon
  const renderIcon = (type) => {
    switch (type) {
      case "purchase":
        return <ShoppingCart className="h-4 w-4" />;
      case "sale":
        return <ArrowUpRight className="h-4 w-4" />;
      case "transfer_in":
        return <ArrowDownLeft className="h-4 w-4" />;
      case "transfer_out":
        return <Send className="h-4 w-4" />;
      case "mint":
        return <Ticket className="h-4 w-4" />;
      default:
        return <ShoppingCart className="h-4 w-4" />;
    }
  };
  
  // Helper function to render transaction type badge
  const renderTypeBadge = (type) => {
    switch (type) {
      case "purchase":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
            {renderIcon(type)} <span className="ml-1">Purchase</span>
          </Badge>
        );
      case "sale":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            {renderIcon(type)} <span className="ml-1">Sale</span>
          </Badge>
        );
      case "transfer_in":
        return (
          <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
            {renderIcon(type)} <span className="ml-1">Received</span>
          </Badge>
        );
      case "transfer_out":
        return (
          <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
            {renderIcon(type)} <span className="ml-1">Sent</span>
          </Badge>
        );
      case "mint":
        return (
          <Badge variant="outline" className="bg-pink-500/10 text-pink-500 border-pink-500/20">
            {renderIcon(type)} <span className="ml-1">Mint</span>
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            {renderIcon(type)} <span className="ml-1">{type}</span>
          </Badge>
        );
    }
  };
  
  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Completed</Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Pending</Badge>;
      case "failed":
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Type</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>
                {renderTypeBadge(tx.type)}
              </TableCell>
              <TableCell className="font-medium">
                {tx.eventName}
              </TableCell>
              <TableCell>
                {tx.date}
              </TableCell>
              <TableCell>
                {tx.amount} ETH
              </TableCell>
              <TableCell>
                {renderStatusBadge(tx.status)}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={`https://etherscan.io/tx/${tx.hash}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View on Etherscan</span>
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}