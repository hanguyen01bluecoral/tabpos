"use client";

import { Check, ChevronsUpDown, Divide } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const frameworks = [
  {
    value: "next.js",
    label: "Nguyen Van Nam",
    poin: "500 point",
  },
  {
    value: "sveltekit",
    label: "Hong Anh",
  },
  {
    value: "nuxt.js",
    label: "Nguyen Le",
  },
  {
    value: "remix",
    label: "Tran Van A",
  },
  {
    value: "astro",
    label: "Tran Van C",
  },
];

export default function TestSearh() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [open1, setOpen1] = React.useState(false);
  const handleClose = () => {
    setOpen1(false);
  };
  return (
    <div className="flex flex-col">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[370px] h-[44px] -mt-4 rounded-full justify-between bg-[#F7F9FB]"
          >
            {value ? (
              <div className="flex">
                <Avatar className="text-center items-center w-5 h-5 mr-1">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                }{" "}
                (500 point)
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center ">
                  <Avatar className="text-center items-center w-5 h-5">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="pl-2 text-black font-medium text-nowrap whitespace-nowrap">
                    Nguyen Le (500 Points)
                  </p>
                </div>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center justify-center ml-[320px] mt-[-39px]   whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-green-500 hover:text-white h-8 w-8 shrink-0 rounded-full">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only"></span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[770px]">
            <DialogHeader>
              <DialogTitle className="pb-4 items-center">
                Add new customer
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="flex w-full justify-between -mt-2">
              <div className="w-[353px]">
                <p className="text-sm font-bold leading-normal">First Name</p>
                <Input
                  className="mt-3 border-none bg-[#F7F9FB]"
                  type="text"
                  name="firtname"
                  placeholder="Enter"
                />
              </div>
              <div className="w-[353px]">
                <p className="text-sm font-bold leading-normal">Last Name</p>
                <Input
                  className="mt-3 border-none bg-[#F7F9FB]"
                  type="text"
                  name="lastname"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="flex w-full justify-between mt-0">
              <div className="w-[353px]">
                <p className="text-sm font-bold leading-normal">Email</p>
                <Input
                  className="mt-2 border-none bg-[#F7F9FB]"
                  type="text"
                  placeholder="Enter"
                />
              </div>
              <div className=" w-[353px]">
                <p className="text-sm font-bold leading-normal">Phone</p>
                <Input
                  className="mt-2 border-none bg-[#F7F9FB]"
                  type="text"
                  name="phone"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="flex w-full justify-between mt-0">
              <div className=" w-[100%]">
                <p className="text-sm font-bold leading-normal">Adress1</p>
                <Input
                  className="mt-2 border-none bg-[#F7F9FB]"
                  type="text"
                  name="address"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="flex w-full justify-between mt-0">
              <div className=" w-[100%]">
                <p className="text-sm font-bold leading-normal">Adress2</p>
                <Input
                  className="mt-2 border-none bg-[#F7F9FB]"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="flex w-full justify-between mt-0 ">
              <div className=" w-[353px] ">
                <p className="text-sm font-bold leading-normal">Country</p>
                <Select>
                  <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                    <SelectValue placeholder="choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className=" w-[353px]">
                <p className="text-sm font-bold leading-normal">Sate</p>
                <Select>
                  <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                    <SelectValue placeholder="choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="apple">Tiểu bang 1</SelectItem>
                      <SelectItem value="banana">Tiển bang 2</SelectItem>
                      <SelectItem value="blueberry">Tiểu bang 3</SelectItem>
                      <SelectItem value="grapes">Tiểu bang 4</SelectItem>
                      <SelectItem value="pineapple">Tiểu bang 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex w-full justify-between mt-0">
              <div className=" w-[353px]">
                <p className="text-sm font-bold leading-normal">City</p>
                <Select>
                  <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                    <SelectValue placeholder="choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="apple">Hà Nội</SelectItem>
                      <SelectItem value="banana">Đà Nẵng</SelectItem>
                      <SelectItem value="blueberry">Hồ Chí Minh</SelectItem>
                      <SelectItem value="grapes">Cần Thơ</SelectItem>
                      <SelectItem value="pineapple">Hải Phòng</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className=" w-[353px]">
                <p className="text-sm font-bold leading-normal">Zip Code</p>
                <Select>
                  <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                    <SelectValue placeholder="choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex w-full justify-between mt-0">
              <div className=" w-[100%]">
                <div className="flex items-center space-x-2">
                  <Checkbox id="add" className="rounded-full" />
                  <Label
                    htmlFor="add"
                    className="text-black font-normal leading-5 text-[14px]"
                  >
                    Use same info for shipping
                  </Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <div className="flex w-full justify-between mt-1">
                <div className=" w-[100%]">
                  <Button className="w-full rounded-lg"> SAVE</Button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <PopoverContent className="w-[370px] p-0 mt-[12px] -ml-[5px] rounded-md">
          <div className="w-[92%] flex justify-between border-b-[1px] scrollbar-thin pb-2 ml-4 mr-0 pt-3">
            <p className="pt-1 text-black font-bold text-base">Customer</p>
            <svg
              className="mt-[11px] mr-0 cursor-pointer"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClose}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                fill="black"
              />
            </svg>
          </div>
          <Command>
            <CommandInput
              placeholder="Search framework..."
              className="mb-2 mt-2"
            />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex">
                    <Avatar className="text-center items-center w-[30px] h-[30px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="items-center mt-1">
                      <p className="pl-4 text-black font-medium">
                        {framework.label} (500 Points)
                      </p>
                      <p className="pl-4 text-[9px]">034999902</p>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
