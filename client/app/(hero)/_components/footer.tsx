import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Footer = React.memo(function () {
  return (
    <div className="flex w-full items-center p-6">
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";
export { Footer };
