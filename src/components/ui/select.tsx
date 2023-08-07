import React, { ReactEventHandler } from "react";
import {
  SelectBase,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base-select";

export interface Selected {
    name: string;
    value: string;
}

interface Data {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  onSelect: (event: Selected) => void;
  data: Data[];
}

export default function Select({ label, placeholder, value, name, onSelect, data }: SelectProps) {
  return (
    <SelectBase defaultValue={value} onValueChange={(value) => onSelect({ name, value })}>
      <SelectTrigger
        title={label}
        className="h-12 w-full border-[0.5px] border-gray-300 rounded-lg text-gray-900 bg-white"
      >
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectBase>
  );
}
