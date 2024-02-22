"use client";

import { Command, CommandInput } from "@/components/ui/command";
import DemoOrderNotPaid from "./testno/page";
import React from "react";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function TransactionsV2() {
    const [date, setDate] = React.useState<Date>()
  return (
    <nav className="w-full h-screen  bg-[#F7F9FB]">
      <div className="flex  w-full h-screen ">
        <div className="w-383px h-[100%] ml-[20px] bg-white border border-[#F5F5F5]">
            <div className="h-[calc(100%-70px)] border-b border-[#F5F5F5]">
                <div className="flex w-full h-[76px] p-4 border-b border-[#F5F5F5] items-center">
                    <p className="w-[276px] text-base font-semibold">Transactions</p>
                    <Button className="rounded-sm w-[59px] h-[36px] bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]">
                    clear
                    </Button>
                </div>

                <div className="w-full">
                    <div className="border-b border-[#F5F5F5] py-3 mr-4 ml-4">
                    <div className="">
                        <p className="text-sm font-bold leading-normal">Order ID</p>
                        <Input
                        className="w-[373px] mt-1"
                        placeholder="type here"
                        ></Input>
                        <p className="text-[12px] text-[#555] font-normal mt-2">
                        Sub text here
                        </p>
                    </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="py-3 mr-4 ml-4">
                    <div className="">
                        <p className="text-sm font-bold leading-normal">Customer info</p>
                        <Input
                        className="w-[373px] mt-1"
                        placeholder="type here"
                        ></Input>
                    </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="py-3 mr-4 ml-4">
                    <div className="">
                        <p className="text-sm font-bold leading-normal">Order status</p>
                        <Select>
                            <SelectTrigger className="w-[373px] mt-2">
                                <SelectValue placeholder="Select a timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="py-3 mr-4 ml-4 flex justify-between">
                        <div className="">
                            <p className="text-sm font-bold leading-normal">Date from</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[163px] rounded-sm mt-2 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>DD/MM/YYY</span>}
                                    </Button>
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
                        </div>
                        <div className="">
                            <p className="text-sm font-bold leading-normal">Date to</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[163px] mt-2 rounded-sm justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>DD/MM/YYY</span>}
                                    </Button>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <Button className="w-full rounded-sm">Search</Button>
            </div>
        </div>
        <div className="w-[99%]">
          <DemoOrderNotPaid />
        </div>
      </div>
    </nav>
  );
}

export default TransactionsV2;
