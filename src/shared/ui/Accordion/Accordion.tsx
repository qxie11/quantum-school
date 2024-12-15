"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import cx from "classnames";
import useTheme from "@shared/hooks/useTheme";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cx("border-b border-gray-300", className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { isDarkTheme } = useTheme();
  return (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cx(
        "group flex w-full items-center justify-between px-4 py-7 text-left text-3xl font-medium font-jost",
        "rounded-md transition-all duration-200 data-[state=open]:text-primary",
        className,
        {
          "text-white": isDarkTheme,
        }
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { isDarkTheme } = useTheme();
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cx(
        "py-2 overflow-hidden text-lg text-gray-700 transition-all duration-200",
        "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
        className,
        {
          "text-white": isDarkTheme,
        }
      )}
      {...props}
    >
      <div className="px-4 py-2">{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
