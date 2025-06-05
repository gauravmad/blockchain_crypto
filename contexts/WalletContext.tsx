"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAccount, useConnect, useDisconnect, usePublicClient, useBalance } from "wagmi";
import { injected } from "wagmi/connectors";
import { formatEther } from "viem";

type WalletContextType = {
  isConnected: boolean;
  isConnecting: boolean;
  address: string | null;
  balance: string;
  connect: (provider?: string) => Promise<void>;
  disconnect: () => void;
};

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  isConnecting: false,
  address: null,
  balance: "0.00",
  connect: async () => {},
  disconnect: () => {},
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { address, isConnected } = useAccount();
  const { data: wagmiBalance } = useBalance({ address });
  const { connect: wagmiConnect, isPending } = useConnect();
  const { disconnect: wagmiDisconnect } = useDisconnect();
  const publicClient = usePublicClient();
  const [balance, setBalance] = useState("0.00");
  const { toast } = useToast();

  const fetchBalance = async () => {
    if (!address || !publicClient) return;

    try {
      const balanceBigInt = await publicClient.getBalance({ address });
      setBalance(parseFloat(formatEther(balanceBigInt)).toFixed(4));
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      fetchBalance();
    } else {
      setBalance("0.00");
    }
  }, [isConnected, address, publicClient]);

  const connect = async (provider: string = "metamask") => {
    try {
      await wagmiConnect({ connector: injected() });

      toast({
        title: "Wallet Connected",
        description: "Your wallet has been successfully connected.",
      });
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast({
        variant: "destructive",
        title: "Connection Failed",
        description: "Failed to connect your wallet. Please try again.",
      });
    }
  };

  const disconnect = () => {
    wagmiDisconnect();
    setBalance("0.00");

    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        isConnecting: isPending,
        address: address || null,
        balance: wagmiBalance ? parseFloat(formatEther(wagmiBalance.value)).toFixed(4) : balance,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
