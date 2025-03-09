import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(
  (
    { className, classNameTrack, classNameRange, handleChange, ...props },
    ref
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onValueChange={handleChange}
        {...props}
      >
        <SliderPrimitive.Track
          className={`${classNameTrack} relative h-1.5 w-full grow overflow-hidden rounded-full bg-white/10`}
        >
          <SliderPrimitive.Range
            className={`${classNameRange} absolute h-full bg-white`}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-white bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
