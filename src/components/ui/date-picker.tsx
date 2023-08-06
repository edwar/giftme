"use client"
 
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { format } from "date-fns"
import esLocale from 'date-fns/locale/es';
import { Calendar as CalendarIcon } from "lucide-react"
 
import Input from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    value: Date;
    label: string;
    setterDate: (date: Date) => void
}
 
export function DatePicker({
    value,
    label,
    setterDate
}: DatePickerProps) {
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    setterDate(date ?? new Date())
  }, [date])
 
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Input blocked disabled label={label} action={<CalendarIcon className="mr-2 h-4 w-4" />} value={format(value, "dd 'de' MMMM 'de' yyyy", { locale: esLocale })} />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}