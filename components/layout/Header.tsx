"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { useWallet } from "@/contexts/WalletContext";
import { Ticket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const { isConnected, connect, address } = useWallet();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const NavItems = () => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors",
            pathname === item.href
              ? "text-primary bg-secondary"
              : "text-foreground/80 hover:text-primary hover:bg-secondary/50"
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Ticket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">BlockTix</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItems />
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            {isConnected ? (
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </Button>
              </Link>
            ) : (
              <Button variant="default" size="sm" onClick={() => connect()}>
                Connect Wallet
              </Button>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}