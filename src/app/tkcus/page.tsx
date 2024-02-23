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
  {
    value: "no",
    label: "Tran Van D",
  },
  {
    value: "yes",
    label: "Tran Van F",
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
            className="w-[370px] h-[44px] -mt-4 rounded-full justify-between border-none bg-[#F7F9FB]"
          >
            {value ?
             (
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
              <div className="flex">
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
            <button className="inline-flex items-center justify-center ml-[328px] mt-[-38px]   whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-green-500 hover:text-white h-8 w-8 shrink-0 rounded-full">
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
        <PopoverContent className="w-[470px] h-[360px] p-0 mt-[12px] -ml-[5px] rounded-md  scrollbar-none">
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
              placeholder="Search customer..."
              className="mb-2 mt-2"
            />
            <CommandEmpty>No customer found.</CommandEmpty>
            <CommandGroup className="h-[300px] overflow-y-auto scrollbar-thin">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center">
                      <div className="flex w-[280px]">
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
                      <div className="flex">
                        <Button className="rounded-sm bg-[#F5F5F5] w-[70px] h-[36px] border p-3 text-black hover:text-white">
                         <div>
                            <svg className="ml-1 mt-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5927 6.1523C11.5927 6.1523 11.488 6.38791 11.2744 6.72715C11.2744 6.72715 10.8535 7.39557 10.2964 7.95266C10.2964 7.95266 8.49908 9.75 6 9.75C6 9.75 3.50092 9.75 1.70359 7.95266C1.70359 7.95266 1.14649 7.39557 0.725631 6.72715C0.725631 6.72715 0.512032 6.3879 0.407321 6.1523C0.364226 6.05534 0.364226 5.94466 0.407321 5.8477C0.407321 5.8477 0.512032 5.6121 0.725631 5.27285C0.725631 5.27285 1.14649 4.60443 1.70359 4.04734C1.70359 4.04734 3.50092 2.25 6 2.25C6 2.25 8.49907 2.25 10.2964 4.04734C10.2964 4.04734 10.8535 4.60443 11.2744 5.27285C11.2744 5.27285 11.488 5.61209 11.5927 5.8477C11.6358 5.94466 11.6358 6.05534 11.5927 6.1523ZM10.6397 6.32754C10.6397 6.32754 10.7562 6.14244 10.8322 6C10.8322 6 10.7562 5.85756 10.6397 5.67246C10.6397 5.67246 10.2637 5.07525 9.76608 4.57766C9.76608 4.57766 8.18842 3 6 3C6 3 3.81158 3 2.23392 4.57766C2.23392 4.57766 1.73633 5.07525 1.36031 5.67246C1.36031 5.67246 1.24376 5.85756 1.16779 6C1.16779 6 1.24376 6.14244 1.36031 6.32754C1.36031 6.32754 1.73633 6.92475 2.23392 7.42234C2.23392 7.42234 3.81158 9 6 9C6 9 8.18842 9 9.76608 7.42234C9.76608 7.42234 10.2637 6.92475 10.6397 6.32754Z" fill="black"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C6 3.75 6.93198 3.75 7.59099 4.40901C7.59099 4.40901 8.25 5.06802 8.25 6C8.25 6 8.25 6.93198 7.59099 7.59099C7.59099 7.59099 6.93198 8.25 6 8.25C6 8.25 5.06802 8.25 4.40901 7.59099C4.40901 7.59099 3.75 6.93198 3.75 6C3.75 6 3.75 5.06802 4.40901 4.40901C4.40901 4.40901 5.06802 3.75 6 3.75ZM6 4.5C6 4.5 5.37868 4.5 4.93934 4.93934C4.93934 4.93934 4.5 5.37868 4.5 6C4.5 6 4.5 6.62132 4.93934 7.06066C4.93934 7.06066 5.37868 7.5 6 7.5C6 7.5 6.62132 7.5 7.06066 7.06066C7.06066 7.06066 7.5 6.62132 7.5 6C7.5 6 7.5 5.37868 7.06066 4.93934C7.06066 4.93934 6.62132 4.5 6 4.5Z" fill="black"/>
                            </svg>
                            <p className="text-[9px] font-normal">View</p>
                         </div>
                        </Button>
                        <Button className="ml-1 rounded-sm bg-[#F5F5F5] h-[36px] border p-3 text-black hover:text-white">
                         <div className="hover:text-white">
                            <svg className="ml-5 mt-1 hover:text-white" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.5 4.875H7.5C7.70711 4.875 7.875 4.70711 7.875 4.5C7.875 4.29289 7.70711 4.125 7.5 4.125H4.5C4.29289 4.125 4.125 4.29289 4.125 4.5C4.125 4.70711 4.29289 4.875 4.5 4.875Z" fill="black"/>
                              <path d="M4.5 6.375H7.5C7.70711 6.375 7.875 6.20711 7.875 6C7.875 5.79289 7.70711 5.625 7.5 5.625H4.5C4.29289 5.625 4.125 5.79289 4.125 6C4.125 6.20711 4.29289 6.375 4.5 6.375Z" fill="black"/>
                              <path d="M4.5 7.875H6C6.20711 7.875 6.375 7.70711 6.375 7.5C6.375 7.29289 6.20711 7.125 6 7.125H4.5C4.29289 7.125 4.125 7.29289 4.125 7.5C4.125 7.70711 4.29289 7.875 4.5 7.875Z" fill="black"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10.5H7.3447L7.34531 10.5C7.34531 10.5 7.49306 10.5003 7.62977 10.4441C7.62977 10.4441 7.76709 10.3877 7.87232 10.283L10.2824 7.87298C10.2824 7.87298 10.3877 7.76709 10.4441 7.62977C10.4441 7.62977 10.5005 7.49245 10.5 7.344L10.5 2.25C10.5 2.25 10.5 1.93934 10.2803 1.71967C10.2803 1.71967 10.0607 1.5 9.75 1.5H2.25C2.25 1.5 1.93934 1.5 1.71967 1.71967C1.71967 1.71967 1.5 1.93934 1.5 2.25V9.75C1.5 9.75 1.5 10.0607 1.71967 10.2803C1.71967 10.2803 1.93934 10.5 2.25 10.5ZM9.75 7.34467L7.34467 9.75H2.25V2.25H9.75L9.75 7.34467Z" fill="black"/>
                              <path d="M7.125 7.5V10.0922C7.125 10.2993 7.29289 10.4672 7.5 10.4672C7.70711 10.4672 7.875 10.2993 7.875 10.0922V7.875H10.0922C10.2993 7.875 10.4672 7.70711 10.4672 7.5C10.4672 7.29289 10.2993 7.125 10.0922 7.125H7.5C7.29289 7.125 7.125 7.29289 7.125 7.5Z" fill="black"/>
                            </svg>

                            <p className="text-[9px] font-normal">Transactions</p>
                         </div>
                        </Button>
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


