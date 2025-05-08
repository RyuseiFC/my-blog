"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownOption {
  value: string;
  label: string;
}

interface StylishDropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function StylishDropdown({
  options,
  placeholder = "Select an option",
  onChange,
  className,
}: StylishDropdownProps) {
  const [selectedOption, setSelectedOption] =
    React.useState<DropdownOption | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center justify-between rounded-md border border-input bg-white/40 px-4 py-3 text-sm ring-offset-background placeholder:text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200 ease-in-out hover:border-gray-400 group",
          className
        )}
      >
        <span className={cn("truncate", !selectedOption && "text-white")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
            "group-hover:text-foreground"
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-y-auto p-1"
        style={
          {
            "--stagger": "50ms",
            "--slide": "10px",
          } as React.CSSProperties
        }
      >
        {options.map((option, index) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => handleSelect(option)}
            className={cn(
              "flex items-center justify-between py-2.5 px-3 cursor-pointer rounded-md transition-all duration-200",
              "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
              "animate-in fade-in-50 slide-in-from-top-3",
              "hover:bg-accent/50"
            )}
            style={{
              animationDelay: `calc(var(--stagger) * ${index})`,
              animationFillMode: "both",
            }}
          >
            <span>{option.label}</span>
            {selectedOption?.value === option.value && (
              <Check className="h-4 w-4 text-primary animate-in zoom-in-50" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
