"use client";

import React, { forwardRef, useState, useEffect, useRef } from "react";
import cx from "classnames";
import { FaCheck } from "react-icons/fa";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Input } from "@shared/ui";
import { CountryInterface } from "country-codes-flags-phone-codes";

type ICountry = Omit<CountryInterface, "dialCode">;

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, error, ...props }, ref) => {
    const [options, setOptions] = useState<ICountry[]>([]);
    const [selectedValue, setSelectedValue] = useState<ICountry | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [isOnceOpen, setIsOnceOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      const detectUserCountry = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();

          const { countries } = await import("country-codes-flags-phone-codes");

          const userCountry = countries.find(
            (country) => country.code === data.country_code
          );

          if (userCountry) {
            setSelectedValue({
              code: userCountry.dialCode,
              name: userCountry.name,
              flag: userCountry.flag,
            });
          } else {
            setSelectedValue({
              code: "+380",
              name: "Ukraine",
              flag: "🇺🇦",
            });
          }
        } catch (error) {
          setSelectedValue({
            code: "+380",
            name: "Ukraine",
            flag: "🇺🇦",
          });
        }
      };

      detectUserCountry();
    }, []);

    const selectedCode = selectedValue?.code || "+380";

    useEffect(() => {
      setInputValue(`${selectedCode} `);
    }, [selectedCode]);

    useEffect(() => {
      if (!isOnceOpen) return;

      (async () => {
        const { countries } = await import("country-codes-flags-phone-codes");

        const uniqueCodes = new Set();
        const uniqueOptions = countries.filter((country) => {
          if (!uniqueCodes.has(country.dialCode)) {
            uniqueCodes.add(country.dialCode);
            return true;
          }
          return false;
        });

        setOptions(
          uniqueOptions.map((country) => ({
            name: country.name,
            code: country.dialCode,
            flag: country.flag,
          }))
        );
      })();
    }, [isOnceOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!value.startsWith(selectedCode)) {
        setInputValue(`${selectedCode} `);
      } else {
        setInputValue(value);
      }

      props.onChange?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const input = e.target;
      setTimeout(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
      }, 0);
    };

    if (!selectedValue) {
      return null; // или показать loading state
    }

    return (
      <div className="relative grid grid-cols-[80px_1fr]">
        <SelectPrimitive.Root
          value={selectedCode}
          defaultValue={selectedCode}
          onValueChange={(value) => {
            setSelectedValue(
              options.find((country) => value === country.code) as any
            );
          }}
        >
          <SelectPrimitive.Trigger
            className={cx(
              `h-full flex items-center justify-center rounded-l-lg border-4 border-r-0 border-primary bg-white
            text-3xl transition-all`,
              {
                "border-gray-300": !error,
                "border-red-500": error,
              }
            )}
            onClick={() => {
              if (!isOnceOpen) setIsOnceOpen(true);
            }}
            onPointerDownCapture={(e) => e.preventDefault()}
            asChild
            aria-label="Country"
          >
            <button className="relative">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {selectedValue.flag}
              </span>
              <span className="invisible text-[0px]">
                <SelectPrimitive.Value />
              </span>
            </button>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Content className="z-50">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
              =
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
              <SelectPrimitive.Group>
                {(options?.length ? options : [selectedValue]).map((option) => (
                  <SelectPrimitive.Item
                    key={option.code}
                    value={option.code}
                    className={cx(
                      "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                      "radix-disabled:opacity-50",
                      "focus:outline-none select-none"
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      {option.flag} {option.name}({option.code})
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <FaCheck className="text-green-400" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
              =
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Root>

        <Input
          {...props}
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
            props?.onChange?.(e);
          }}
          onFocus={handleFocus}
          error={error}
          className={cx("rounded-l-none", className)}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
