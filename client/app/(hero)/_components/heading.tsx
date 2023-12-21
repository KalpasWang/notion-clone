"use client";

import { ArrowRight } from "lucide-react";
// import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useAuth } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified. Welcome to
        <span className="underline">Notix</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Notix is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notix
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        // <SignInButton mode="modal">
        <Button>
          Get Notix free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        // </SignInButton>
      )}
    </div>
  );
};
