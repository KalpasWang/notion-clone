import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Logo = React.memo(function () {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("text-foreground", poppins.className)}>Notix</p>
    </div>
  );
});

Logo.displayName = "Logo";
export { Logo };
