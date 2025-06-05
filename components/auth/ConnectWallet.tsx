"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@/contexts/WalletContext";
import { Wallet, AlertCircle } from "lucide-react";

export default function ConnectWallet() {
  const { connect, isConnecting } = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async (type: string) => {
    try {
      await connect(type);
      setIsOpen(false);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to access the platform features
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center justify-between py-6"
            onClick={() => handleConnect("metamask")}
            disabled={isConnecting}
          >
            <div className="flex items-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJMm8u0JnvXGeLnUCYrOR9IPm7YHlDkw7wcGO7Bv5SimoLyv2RhP_GF_Py73lw-sOnRM&usqp=CAU"
                alt="MetaMask"
                width={80}
                height={80}
                className="h-8 w-8 mr-3 object-contain"
              />
              <span className="font-medium">MetaMask</span>
            </div>
            <span className="text-xs text-muted-foreground">Popular</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-between py-6"
            onClick={() => handleConnect("walletconnect")}
            disabled={isConnecting}
          >
            <div className="flex items-center">
              <Image
                src="https://images.mirror-media.xyz/publication-images/Lx_fohJ8ttprQ3DmDKU9N.png?height=2048&width=2048"
                alt="WalletConnect"
                width={80}
                height={80}
                className="h-8 w-8 mr-3 object-contain"
              />
              <span className="font-medium">WalletConnect</span>
            </div>
            <span className="text-xs text-muted-foreground">Mobile</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-between py-6"
            onClick={() => handleConnect("coinbase")}
            disabled={isConnecting}
          >
            <div className="flex items-center">
              <Image
                src="https://developers.moralis.com/wp-content/uploads/web3wiki/1709-coinbase-wallet-sdk/637b7ec8dc356a3166f67b63_1yGr3uu2b_2imoskOxM6CPinMVuLihRvpsxrxf7ay6c-300x300.png"
                alt="Coinbase Wallet"
                className="h-8 w-8 mr-3 object-contain"
                width={80}
                height={80}
              />
              <span className="font-medium">Coinbase Wallet</span>
            </div>
          </Button>
        </div>

        <div className="flex items-center space-x-2 rounded-md border p-3 text-sm">
          <AlertCircle className="h-4 w-4 text-blue-500" />
          <p className="text-muted-foreground">
            We never have access to your private keys. We only receive your
            public address.
          </p>
        </div>

        <DialogFooter className="sm:justify-center">
          <p className="text-xs text-center text-muted-foreground">
            By connecting, you agree to our Terms of Service and Privacy Policy
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
