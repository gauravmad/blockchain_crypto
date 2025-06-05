"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an NFT ticket?",
    answer: "An NFT ticket is a digital ticket stored on the blockchain as a non-fungible token. It provides proof of ownership and authenticity, eliminating counterfeiting. Each ticket has unique properties and can be transferred securely between wallets."
  },
  {
    question: "How do I purchase tickets on BlockTix?",
    answer: "First, connect your crypto wallet (like MetaMask). Browse events, select tickets, and complete the purchase with cryptocurrency. The NFT tickets will be minted directly to your wallet address, and you'll see them in your dashboard."
  },
  {
    question: "Can I resell my tickets?",
    answer: "Yes, if the event organizer allows it. Some events may restrict resales or set price caps to prevent scalping. When resale is permitted, you can list your ticket on our marketplace or transfer it directly to another wallet address."
  },
  {
    question: "How do I check in at an event?",
    answer: "At the event, you'll present your NFT ticket through our mobile interface. The ticket displays a QR code that event staff can scan to verify authenticity and mark as redeemed on the blockchain. You must have your wallet connected to access your tickets."
  },
  {
    question: "What happens if I lose access to my wallet?",
    answer: "Your tickets exist on the blockchain and are tied to your wallet address. Always keep your recovery phrase safe. If you lose access to your wallet, you'll need to recover it using your backup methods. BlockTix cannot recover lost wallet access."
  },
  {
    question: "What cryptocurrencies can I use to purchase tickets?",
    answer: "Currently, we support ETH (Ethereum) for all transactions on our platform. We plan to expand to other cryptocurrencies and networks in the future to provide more options for our users."
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Get answers to common questions about our blockchain ticketing platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Still have questions? Contact our support team at{" "}
              <a href="mailto:support@blocktix.com" className="text-primary hover:underline">
                support@blocktix.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}