"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle, Check } from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";
import ConnectWallet from "@/components/auth/ConnectWallet";
import { mockEvents } from "@/lib/mock-data";
import { usePublicClient, useWalletClient } from "wagmi";
import { parseEther } from "viem";

export default function TicketPurchase({ eventId }) {
  const { isConnected, address } = useWallet();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const [status, setStatus] = useState(null); // null, 'processing', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [txHash, setTxHash] = useState(null);
  
  useEffect(() => {
    // In a real app, we would fetch event from the blockchain/API
    const foundEvent = mockEvents.find((e) => e.id === eventId) || mockEvents[0];
    setEvent(foundEvent);
  }, [eventId]);
  
  const handlePurchase = async () => {
    if (!isConnected || !event || !walletClient) return;
    
    setStatus("processing");
    setErrorMessage("");
    
    try {
      // You would replace this with your actual contract address
      const CONTRACT_ADDRESS = "0x74Ec92248432DbA4Cb72B01AB6f4De23FaEC3a36"; // Replace with your contract address
      
      // Calculate the total price in wei
      const totalPrice = parseEther((parseFloat(event.price) * parseInt(quantity || "1")).toString());
      
      // Send transaction
      const hash = await walletClient.sendTransaction({
        to: CONTRACT_ADDRESS,
        value: totalPrice,
        // You can add data field here for contract interaction
        // data: "0x...", // Contract method call data
      });
      
      setTxHash(hash);
      
      // Wait for transaction confirmation
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      
      if (receipt.status === 'success') {
        setStatus("success");
      } else {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      console.error("Purchase error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Transaction failed. Please try again.");
    }
  };
  
  if (!event) return null;
  
  const totalPrice = parseFloat(event.price) * parseInt(quantity || "1");
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Purchase Tickets</h2>
      
      <Card>
        <CardContent className="pt-6">
          {!isConnected ? (
            <div className="text-center py-6">
              <p className="mb-4">Connect your wallet to purchase tickets</p>
              <ConnectWallet />
            </div>
          ) : status === "success" ? (
            <div className="text-center py-6">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Purchase Successful!</h3>
              <p className="text-muted-foreground mb-4">
                Your NFT tickets have been minted to your wallet
              </p>
              <div className="bg-secondary/50 rounded-md p-3 mb-4 overflow-x-auto">
                <p className="text-sm font-mono">Transaction: {txHash}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <Button asChild variant="outline">
                  <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                    View Transaction
                  </a>
                </Button>
                <Button asChild>
                  <a href="/dashboard">View My Tickets</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              {status === "error" && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {errorMessage || "There was an error processing your transaction. Please try again."}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Ticket Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span>Event</span>
                      <span className="font-medium">{event.title}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Date</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Time</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Price per ticket</span>
                      <span>{event.price} ETH</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Available tickets</span>
                      <span>{event.remainingTickets} / {event.totalTickets}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Complete Purchase</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ticket Quantity
                      </label>
                      <Select
                        value={quantity}
                        onValueChange={setQuantity}
                        disabled={status === "processing"}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "ticket" : "tickets"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{totalPrice.toFixed(4)} ETH</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Gas Fee (est.)</span>
                        <span>~0.005 ETH</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Total</span>
                        <span>{(totalPrice + 0.005).toFixed(4)} ETH</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handlePurchase} 
                      className="w-full" 
                      disabled={status === "processing" || !walletClient}
                    >
                      {status === "processing" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Purchase Tickets"
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      By purchasing, you agree to the terms and conditions of this event.
                      NFT tickets will be minted directly to your connected wallet.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}