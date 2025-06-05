"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Settings,
  PackageOpen
} from "lucide-react";
import { useWallet } from "@/contexts/WalletContext";

export default function ProfileHeader() {
  const { address, balance, disconnect } = useWallet();
  const [copied, setCopied] = useState(false);
  
  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg border bg-card">
      <div className="flex items-center mb-4 md:mb-0">
        <Avatar className="h-16 w-16 mr-4">
          <AvatarImage src={`https://effigy.im/a/${address}.svg`} />
          <AvatarFallback>
            {address?.slice(2, 4).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <div className="flex items-center">
            <p className="font-mono text-xl md:text-2xl font-bold mr-2">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={copyAddress}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy address</span>
            </Button>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <PackageOpen className="h-4 w-4 mr-1" />
            <span>{balance} ETH</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" asChild>
          <a 
            href={`https://etherscan.io/address/${address}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-2" /> View on Etherscan
          </a>
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        
        <Button variant="ghost" size="sm" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    </div>
  );
}