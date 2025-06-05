import { useCallback } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from '@/lib/config';
import TicketNFTAbi from '@/contracts/TicketNFT.json';
import { useWallet } from '@/contexts/WalletContext';

export function useContract() {
  const { provider, signer } = useWallet();

  const getContract = useCallback(() => {
    if (!provider || !signer) return null;

    return new ethers.Contract(
      CONTRACT_ADDRESS,
      TicketNFTAbi,
      signer
    );
  }, [provider, signer]);

  const createEvent = useCallback(async (
    name: string,
    price: string,
    totalSupply: number,
    maxPerWallet: number,
    transferable: boolean,
    resellable: boolean
  ) => {
    const contract = getContract();
    if (!contract) throw new Error('Contract not initialized');

    const priceInWei = ethers.parseEther(price);
    const tx = await contract.createEvent(
      name,
      priceInWei,
      totalSupply,
      maxPerWallet,
      transferable,
      resellable
    );

    return tx.wait();
  }, [getContract]);

  const mintTicket = useCallback(async (
    eventId: number,
    price: string
  ) => {
    const contract = getContract();
    if (!contract) throw new Error('Contract not initialized');

    const priceInWei = ethers.parseEther(price);
    const tx = await contract.mintTicket(eventId, {
      value: priceInWei
    });

    return tx.wait();
  }, [getContract]);

  const transferTicket = useCallback(async (
    to: string,
    tokenId: number
  ) => {
    const contract = getContract();
    if (!contract) throw new Error('Contract not initialized');

    const tx = await contract.transferTicket(to, tokenId);
    return tx.wait();
  }, [getContract]);

  const getEvent = useCallback(async (eventId: number) => {
    const contract = getContract();
    if (!contract) throw new Error('Contract not initialized');

    return contract.getEvent(eventId);
  }, [getContract]);

  const getTicketEvent = useCallback(async (tokenId: number) => {
    const contract = getContract();
    if (!contract) throw new Error('Contract not initialized');

    return contract.getTicketEvent(tokenId);
  }, [getContract]);

  return {
    createEvent,
    mintTicket,
    transferTicket,
    getEvent,
    getTicketEvent,
  };
}