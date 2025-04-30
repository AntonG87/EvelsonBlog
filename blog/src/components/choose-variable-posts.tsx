"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
  className: string;
}

const sortSelection = [
  {
    value: "user",
    label: "Users",
  },
  {
    value: "all",
    label: "All Posts",
  },
  {
    value: "author",
    label: "Author",
  },
];

export function SortSelection({ className }: Props) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Стартовое значение берем из URL
  const initialValue = searchParams.get('role') || "all";
  const [value, setValue] = React.useState(initialValue);

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);

    const params = new URLSearchParams(searchParams.toString());

    if (currentValue === "all") {
      params.delete('role'); // Убираем параметр если "All Posts"
    } else {
      params.set('role', currentValue); // Иначе задаём роль
    }

    params.set('page', '1'); // При смене фильтра всегда сбрасываем страницу на первую

    router.push(`/?${params.toString()}`,{scroll:false});
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] max-sm:w-[110px] ${className} cursor-pointer justify-between`}
        >
          {sortSelection.find((item) => item.value === value)?.label || "Select"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] max-sm:w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {sortSelection.map((item) => (
                <CommandItem
                  className="cursor-pointer"
                  key={item.value}
                  value={item.value}
                  onSelect={() => handleSelect(item.value)}
                  tabIndex={-1}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
