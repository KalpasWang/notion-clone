"use client";

// import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScroll } from "@/hooks";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useAuth } from "@/hooks";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const isScrolled = useScroll();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6",
        isScrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            {/* <SignInButton mode="modal"> */}
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            {/* </SignInButton> */}
            {/* <SignInButton mode="modal"> */}
            <Button size="sm">Get Notix free</Button>
            {/* </SignInButton> */}
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Notix</Link>
            </Button>
            {/* <UserButton afterSignOutUrl="/" /> */}
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
