import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("spinner", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return (
    // <Loader className={cn(spinnerVariants({ size }))} />
    <div className={cn(spinnerVariants({ size }))}></div>
  );
};
