"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReportComponent from "./Report";
import React, { createContext } from 'react';
import Product from "./Products";
import Avatars from "./Avatar";
import HeaderNav from "./HeaderNav";
import NavItems from "./NavItems";
import Customer from "./Customer";
import AddToCard from "./AddToCard";
import CustomerSearch from "./CustomerSearch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SaveIcon } from "lucide-react";
import Quantity from "./Quantity";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";



// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

export default function Home() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
  setOpen(false);
  };
  return (
     <nav className="w-[100%] h-screen flex  bg-[#F7F9FB]"> 
          {/* khoi avata */}
          <div className="w-[5%] pt-[20px] pl-3 pr-4 h-screen flex flex-1 flex-col flex-shrink-0 flex-grow-0 justify-between bg-white">
            <div className=" pl-2 ">
              <div className="py-2 rounded-none cursor-pointer">
                <Avatar className="text-center items-center w-[45px] h-[45px] rounded-none">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="45" height="45" rx="5" fill="#222222" />
                    </svg>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="py-2 cursor-pointer">
                <Avatar className="text-center items-center w-[36px] h-[36px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="py-2 cursor-pointer">
                <Avatar className="text-center items-center w-[36px] h-[36px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="py-2 cursor-pointer">
                <a href="orderNopaid">
                  <Avatar className="text-center items-center w-[36px] h-[36px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </a>
              </div>
              <div className="py-2 cursor-pointer">
                <a href="order">
                <Avatar className="text-center items-center w-[36px] h-[36px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </a>
              </div>
            </div>
            <div className="pl-2 mt-auto pt-[100%]">
              <div className="py-3 cursor-pointer">
                <Avatar className="text-center items-center  w-[36px] h-[36px]">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gray-300"></AvatarFallback>
                </Avatar>
              </div>
              <div className="py-3 cursor-pointer">
                <Avatar className="text-center items-center  w-[36px] h-[36px]">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7401 3.77779C17.8105 3.83103 17.8693 3.8973 17.9131 3.97276C17.9569 4.04822 17.9849 4.13137 17.9954 4.21738C18.0058 4.3034 17.9986 4.39057 17.9741 4.47386C17.9495 4.55714 17.9082 4.63487 17.8525 4.70255C17.7968 4.77023 17.7279 4.82651 17.6496 4.86812C17.5713 4.90974 17.4853 4.93587 17.3965 4.94499C17.3078 4.95411 17.218 4.94605 17.1325 4.92127C17.047 4.89649 16.9674 4.85548 16.8983 4.80063C14.66 3.0663 11.9052 2.10914 9.00112 2.10914C6.09615 2.10914 3.34048 3.06696 1.10172 4.80238C1.03264 4.85723 0.953037 4.89823 0.86751 4.92301C0.781984 4.94779 0.69224 4.95586 0.603479 4.94673C0.514719 4.93761 0.428706 4.91148 0.350428 4.86987C0.272149 4.82825 0.20316 4.77197 0.147459 4.70429C0.091759 4.63662 0.0504546 4.55888 0.0259399 4.4756C0.00142523 4.39232 -0.00581213 4.30514 0.0046473 4.21913C0.0151067 4.13311 0.043055 4.04996 0.0868722 3.97451C0.130689 3.89905 0.189504 3.83278 0.259908 3.77954C2.73498 1.86085 5.78677 0.800049 9.00112 0.800049C12.2144 0.800049 15.2652 1.85998 17.7401 3.77779ZM12.7778 9.87598C12.9209 9.98025 13.0154 10.1354 13.0406 10.3073C13.0657 10.4792 13.0195 10.6537 12.912 10.7926C12.8046 10.9314 12.6447 11.0231 12.4676 11.0475C12.2904 11.0719 12.1105 11.0271 11.9675 10.9228C11.1123 10.2985 10.0706 9.96177 9.00045 9.96369C7.91401 9.96369 6.88243 10.3038 6.03252 10.9232C5.96186 10.9766 5.88096 11.0157 5.79456 11.0383C5.70815 11.061 5.61796 11.0667 5.52924 11.0552C5.44053 11.0437 5.35505 11.0152 5.27781 10.9713C5.20056 10.9275 5.13309 10.8691 5.07932 10.7997C5.02555 10.7302 4.98656 10.6511 4.96462 10.5669C4.94268 10.4827 4.93823 10.3951 4.95152 10.3092C4.96482 10.2233 4.9956 10.1409 5.04207 10.0666C5.08854 9.9924 5.14977 9.92789 5.22219 9.87685C6.31122 9.08174 7.6376 8.65266 9.00045 8.65459C10.3812 8.65459 11.6963 9.08769 12.7778 9.87598ZM15.4759 6.82121C15.619 6.92549 15.7134 7.08062 15.7386 7.2525C15.7637 7.42437 15.7175 7.5989 15.61 7.73769C15.5026 7.87648 15.3427 7.96816 15.1656 7.99257C14.9885 8.01697 14.8086 7.9721 14.6656 7.86783C13.0436 6.6855 11.0737 6.03641 9.00067 6.03641C6.92717 6.03641 4.95665 6.68594 3.33463 7.8687C3.26389 7.92118 3.18315 7.95954 3.09706 7.98158C3.01096 8.00362 2.92122 8.0089 2.83301 7.99712C2.74481 7.98534 2.65987 7.95673 2.58312 7.91293C2.50636 7.86914 2.4393 7.81104 2.3858 7.74197C2.3323 7.67291 2.29342 7.59424 2.2714 7.51053C2.24939 7.42681 2.24467 7.33969 2.25753 7.25419C2.27038 7.16869 2.30055 7.08651 2.3463 7.01239C2.39205 6.93826 2.45247 6.87366 2.52408 6.8223C4.37813 5.47045 6.63218 4.72732 9.00067 4.72732C11.3683 4.72732 13.6221 5.47001 15.4759 6.82121ZM9 15.2C8.64221 15.2 8.29907 15.0621 8.04607 14.8166C7.79308 14.5711 7.65094 14.2381 7.65094 13.891C7.65094 13.5438 7.79308 13.2108 8.04607 12.9653C8.29907 12.7198 8.64221 12.5819 9 12.5819C9.35779 12.5819 9.70093 12.7198 9.95393 12.9653C10.2069 13.2108 10.3491 13.5438 10.3491 13.891C10.3491 14.2381 10.2069 14.5711 9.95393 14.8166C9.70093 15.0621 9.35779 15.2 9 15.2Z"
                        fill="#71B02F"
                      />
                    </svg>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="py-3 cursor-pointer">
                <Avatar className="text-center items-center w-[36px] h-[36px] hover:text-[green]">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="cursor-pointer ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="text-center items-center w-[36px] h-[36px] border-[2px] rounded-full">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="w-[207px] h-[256px]">
                        <div  className="w-[180px]">
                            <div className="flex items-center pt-[146px]">
                              <div className="w-[40px] h-[40px] bg-slate-500 rounded-full">
                                    <img className="w-[40px] h-[40px] object-cover rounded-full border-[2px]"
                                    src="https://anhdephd.vn/wp-content/uploads/2022/04/hinh-anh-sieu-nhan-ultraman-sieu-dep-424x600.jpg"/>
                              </div>
                              <div>
                                <p className="ml-3 text-xs font-semibold">Hi, Nguyen Le</p>
                                <div className="flex items-center w-[70px] h-[16px] px-[5px] py-[2px] rounded-[99px] ml-3 bg-[#F1F7EA] mt-[5px]">
                                    <div className="w-[8px] h-[8px] rounded-full bg-green-700"></div>
                                    <p className="text-[10px] font-medium ml-3 whitespace-nowrap gap-[5px]"> HCM 01</p>
                                </div>
                              </div>
                            </div>
                            <div className="w-[210px] bg-[#F7F9FB] py-2 px-[10px] rounded items-center text-center mt-4 mx-auto">
                                <p className="text-xs font-normal ">Log out</p>
                            </div>
                        </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>  
              </div>
            </div>
          </div>
          {/* khoi itemproduct */}
          <div className="w-[60%] pt-[30px] h-screen ml-[1%] flex-grow ">
            <div className="">
              <HeaderNav />
            </div>
            <div className=" mt-[2%]">
              <NavItems />
            </div>
            <div className="mt-[2%] h-[437px] overflow-y-auto scrollbar-none flex justify-between flex-wrap gap-y-3">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>

          {/* khoi customer */}
          <div className="w-[400px] pt-[30px]  ml-[1%] h-screen flex  flex-col">
            <div className=" flex-grow ">
              <div className="pt-4 bg-white rounded-xl">
                <p className="ml-3 text-sm font-medium">Customer</p>
                <div className="mb-2 rounded-full w-[97%] h-[100%] bg-[#F7F9FB] flex  justify-between pt-3 pl-2 mx-auto ">
                  {/* search customer */}
                  <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-between items-center pb-3">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback> 
                        </Avatar>
                        <p className="pl-2 text-black font-medium text-nowrap whitespace-nowrap">
                          Nguyen Le (500 Points)
                        </p>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[100%] h-[470px]">
                      <DropdownMenuLabel>
                        <div className="w-[85%] flex justify-between border-b-[1px] scrollbar-thin pb-2 ml-6 mr-0">
                          <p className="pt-2 text-black font-bold text-base">
                            Customer
                          </p>
                          <svg
                            className="mt-3 mr-0 cursor-pointer"
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

                        <div className="w-[100%] h-[409px] bg-white mx-4 mt-[0px]   flex justify-between">
                          <Command className="rounded-lg">
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                              <CommandEmpty>No results found.</CommandEmpty>
                              <CommandGroup heading="">
                                <CommandItem className="mt-3 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Nguyen Le (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Hoàng Dũng(500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Nguyen Van Nam (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Hà Linh (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Nguyễn Văn Khôi (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Trần Văn Hùng (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Hoàng Hồng Anh (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Nguyễn Lan Hồng (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                                <CommandItem className="mt-0 w-[92%]">
                                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div className="items-center mt-1">
                                    <p className="pl-4 text-black font-medium">
                                      Kim Dung (500 Points)
                                    </p>
                                    <p className="pl-4 text-[9px]">034999902</p>
                                  </div>
                                </CommandItem>
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem></DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* add customer */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="inline-flex items-center justify-center ml-32 mr-[10px] mb-1  whitespace-nowrap mt-[-5px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-green-500 hover:text-white h-8 w-8 shrink-0 rounded-full">
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
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="border-none ml-[15px]">
                          <div className=" flex justify-between">
                            <p className="pt-0 text-black font-bold text-base">
                              Marion Smith
                            </p>
                            <AlertDialogCancel className="border-none p-1">
                              <svg
                                className="mt-0 mr-3 mb-3 cursor-pointer"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                  fill="black"
                                />
                              </svg>
                            </AlertDialogCancel>
                          </div>
                        </AlertDialogTitle>
                        {/* them customer */}
                        <AlertDialogDescription className="w-[650px] h-[540px] relative">
                          <div className="w-[670px] h-[405px] bg-white mt-[-10px]  ml-[0px] rounded-lg absolute">
                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[-25px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Firsr name
                                </p>
                              </div>

                              <div className="w-[325px] h-[39px]  ml-[330px] mt-[-25px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Last name
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between ">
                              <div className="w-[305px] h-[39px]  mx-4 mt-[10px]  absolute ">
                                <Input type="enter" placeholder="Marion" />
                              </div>
                              <div className="w-[305px] h-[39px]  ml-[330px] mt-[10px]  absolute ">
                                <Input type="enter" placeholder="Smith" />
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[50px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Email
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  mt-[50px]  ml-[330px]   absolute "></div>
                            </div>
                            <div className="flex justify-between ">
                              <div className="w-[620px] h-[39px]  mx-4 mt-[85px]  absolute ">
                                <Input
                                  type="enter"
                                  placeholder="MarionSmith@gmail.com"
                                />
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[125px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Phone
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  ml-[330px]   absolute "></div>
                            </div>
                            <div className="flex justify-between ">
                              <div className="w-[620px] h-[39px]  mx-4 mt-[160px]  absolute ">
                                <Input type="enter" placeholder="0123456789" />
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[200px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Address line 1
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  ml-[330px]   absolute "></div>
                            </div>
                            <div className="flex justify-between ">
                              <div className="w-[620px] h-[39px]  mx-4 mt-[235px]  absolute ">
                                <Input
                                  type="enter"
                                  placeholder="4778 Wave land"
                                />
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[275px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Address line 2
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  ml-[330px]   absolute "></div>
                            </div>
                            <div className="flex justify-between ">
                              <div className="w-[620px] h-[39px]  mx-4 mt-[310px]  absolute ">
                                <Input type="enter" placeholder="" />
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[350px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Country
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  ml-[330px] mt-[350px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  State
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[305px] h-[39px]  mx-4 mt-[385px]  absolute ">
                                <Select>
                                  <SelectTrigger className="w-[305px]">
                                    <SelectValue placeholder="United States (US)" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>
                                        United States (US)
                                      </SelectLabel>
                                      <SelectItem
                                        value="apple"
                                        className="overflow-x-hidden"
                                      >
                                        Apple
                                      </SelectItem>
                                      <SelectItem value="banana">
                                        Banana
                                      </SelectItem>
                                      <SelectItem value="blueberry">
                                        Blueberry
                                      </SelectItem>
                                      <SelectItem value="grapes">
                                        Grapes
                                      </SelectItem>
                                      <SelectItem value="pineapple">
                                        Pineapple
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="w-[305px] h-[39px]  ml-[330px] mt-[385px]  absolute ">
                                <Select>
                                  <SelectTrigger className="w-[305px]">
                                    <SelectValue placeholder="California" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>California</SelectLabel>
                                      <SelectItem
                                        value="apple"
                                        className="overflow-x-hidden"
                                      >
                                        Apple
                                      </SelectItem>
                                      <SelectItem value="banana">
                                        Banana
                                      </SelectItem>
                                      <SelectItem value="blueberry">
                                        Blueberry
                                      </SelectItem>
                                      <SelectItem value="grapes">
                                        Grapes
                                      </SelectItem>
                                      <SelectItem value="pineapple">
                                        Pineapple
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[325px] h-[39px]  mx-4 mt-[425px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  City
                                </p>
                              </div>
                              <div className="w-[325px] h-[39px]  ml-[330px] mt-[425px]  absolute ">
                                <p className="pt-2 text-black font-bold text-sm">
                                  Postcode / Zip code
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-between ">
                              <div className="w-[305px] h-[39px]  mx-4 mt-[455px]  absolute ">
                                <Input type="enter" placeholder="EI Sobrante" />
                              </div>
                              <div className="w-[305px] h-[39px]  ml-[330px] mt-[455px]  absolute ">
                                <Input type="enter" placeholder="94803" />
                              </div>
                            </div>

                            <Button className=" w-[620px] h-[50px] mt-[510px] rounded-lg ml-[15px]">
                              <SaveIcon className="mr-2 mb-2 w-5 h-5 text-center items-center" />{" "}
                              SAVE
                            </Button>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* table products */}
                <Table>
                  <div className="h-[430px] overflow-y-auto scrollbar-none">

                  <TableCaption></TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] text-xs">NAME</TableHead>
                      <TableHead className="text-center text-xs">
                        QUANTITY
                      </TableHead>
                      <TableHead className="text-xs text-left">PRICE</TableHead>
                      <TableHead className=" text-xs"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody >
                    <TableRow>
                      <TableCell className="w-[129px]">
                        <div>
                          <h5 className="text-sm font-semibold">Coffee</h5>
                          <p className="text-xs">Size A, Black</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Quantity />
                      </TableCell>
                      <TableCell className="text-left">1000đ</TableCell>
                      <TableCell className="text-right">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-[129px]">
                        <div>
                          <h5 className="text-sm font-semibold">Coffee</h5>
                          <p className="text-xs">Size A, Black</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Quantity />
                      </TableCell>
                      <TableCell className="text-left">1000đ</TableCell>
                      <TableCell className="text-right">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-[129px]">
                        <div>
                          <h5 className="text-sm font-semibold">Coffee</h5>
                          <p className="text-xs">Size A, Black</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Quantity />
                      </TableCell>
                      <TableCell className="text-left">1000đ</TableCell>
                      <TableCell className="text-right">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-[129px]">
                        <div>
                          <h5 className="text-sm font-semibold">Coffee</h5>
                          <p className="text-xs">Size A, Black</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Quantity />
                      </TableCell>
                      <TableCell className="text-left">1000đ</TableCell>
                      <TableCell className="text-right">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-[129px]">
                        <div>
                          <h5 className="text-sm font-semibold">Coffee</h5>
                          <p className="text-xs">Size A, Black</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Quantity />
                      </TableCell>
                      <TableCell className="text-left">1000đ</TableCell>
                      <TableCell className="text-right">
                        <Avatar className="text-center items-center w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                    </TableRow>                  
                  </TableBody>
                  </div>
                </Table>
              </div>
            </div>

            <div className="mt-auto ">
              <div className=" w-[100%] ">
                {/* table subtotal */}
                <Table>
                  <TableHeader>
                    <TableRow className="border-none">
                      <TableHead className=" text-left text-base text-black font-medium">
                        Sub total
                      </TableHead>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                      <TableHead className="text-right pr-3 text-base text-black font-medium">
                        116.000 đ
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-none pt-0">
                      <TableCell className="font-normal text-gray-500 text-sm ">
                        Promotions
                      </TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                        23,200 đ
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none pt-0">
                      <TableCell className="font-normal text-gray-500 text-sm pt-0">
                        Shipping
                      </TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                        0 đ
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none pt-0">
                      <TableCell className="font-normal text-gray-500 text-sm pt-0">
                        Fees
                      </TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="pt-0"></TableCell>
                      <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                        - 200 đ
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* save oder */}
                <div className="mb-2 rounded-sm w-[99%] h-[36px] bg-[#E9EEF3] flex pt-0 pl-3 pr-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="save"
                      className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-300"
                    />
                    <label
                      htmlFor="save"
                      className="text-xs cursor-pointer whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save Order
                    </label>
                  </div>
                </div>

                <div className="mb-2 rounded-sm w-[100%] h-[66px] pt-3 flex justify-between cursor-pointer">
                  {/* add shipping */}
                  <div className=" flex">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                          <svg
                            className="ml-2 mt-2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                              fill="black"
                            />
                          </svg>
                          <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                            Shipping
                          </p>
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="ml-5 mr-10">
                            <div className=" flex justify-between">
                              <p className="pt-2  text-black font-bold text-base">
                                Shipping
                              </p>
                              <AlertDialogCancel className="border-none p-0 outline-none hover:bg-transparent ">
                                <svg
                                  className="mt-3 mr-1 cursor-pointer"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                    fill="black"
                                  />
                                </svg>
                              </AlertDialogCancel>
                            </div>
                          </AlertDialogTitle>
                          <AlertDialogDescription className="w-[700px] h-[440px] relative">
                            <div className="w-[670px] h-[405px] bg-white  ml-[7px] rounded-lg absolute">
                              <div className="flex justify-between ">
                                <div className="w-[355px] h-[39px]  mx-4 mt-[5px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Shiping method
                                  </p>
                                </div>

                                <div className="w-[235px] h-[39px]  ml-[420px] mt-[5px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Amount*
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[355px] h-[39px]  mx-4 mt-[50px]  absolute ">
                                  <Select>
                                    <SelectTrigger className="w-[355px]">
                                      <SelectValue placeholder="Flat rate" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>Flat rate</SelectLabel>
                                        <SelectItem
                                          value="apple"
                                          className="overflow-x-hidden"
                                        >
                                          Apple
                                        </SelectItem>
                                        <SelectItem value="banana">
                                          Banana
                                        </SelectItem>
                                        <SelectItem value="blueberry">
                                          Blueberry
                                        </SelectItem>
                                        <SelectItem value="grapes">
                                          Grapes
                                        </SelectItem>
                                        <SelectItem value="pineapple">
                                          Pineapple
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="w-[230px] h-[39px]  ml-[420px] mt-[50px]  absolute ">
                                  <Input type="enter" placeholder="Enter" />
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[355px] h-[39px]  mx-4 mt-[80px]  absolute "></div>

                                <div className="w-[230px] h-[39px]  ml-[420px] mt-[95px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Amount to pay
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[355px] h-[39px]  mx-4 mt-[125px]  absolute "></div>
                                <div className="w-[230px] h-[39px]  ml-[420px] mt-[135px]  absolute ">
                                  <Input
                                    type="enter"
                                    placeholder="500.000.000đ"
                                    className="placeholder:font-bold placeholder:text-right placeholder:text-[#71B02F] bg-[#E7F3DA] "
                                  />
                                </div>
                              </div>

                              <div className="w-[635px] h-[245px]  mx-4 mt-[195px]   absolute rounded-lg">
                                <div className=" rounded-lg">
                                  <Button className="w-[124px] h-[60px] rounded-tl-lg border bg-white text-black hover:text-white">
                                    1
                                  </Button>
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    2
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    3
                                  </Button>
                                  <Button className="w-[260px] h-[60px] text-sm font-[300] rounded-tr-lg border bg-white text-black hover:text-white">
                                    Clear
                                  </Button>
                                </div>
                                <div className=" rounded-lg flex">
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    4
                                  </Button>
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    5
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    6
                                  </Button>
                                  <Button className="w-[260px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    <svg
                                      width="25"
                                      height="25"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </Button>
                                </div>
                                <div className=" rounded-lg">
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    7
                                  </Button>
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    8
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    9
                                  </Button>
                                  <Button className="w-[260px] h-[60px] text-sm rounded-none border bg-white text-black hover:text-white">
                                    SAVE SHIPING
                                  </Button>
                                </div>
                                <div className=" rounded-lg">
                                  <Button className="w-[124px] h-[60px] rounded-bl-lg border bg-white text-black hover:text-white">
                                    0
                                  </Button>
                                  <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    .
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    00
                                  </Button>
                                  <Button className="w-[260px] h-[60px] rounded-br-lg border text-black bg-[#F5F5F5] hover:text-white">
                                    BACK
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>

                  {/* add Coupont */}
                  <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                    <div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                            <svg
                              className="ml-2 mt-2"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                                fill="black"
                              />
                            </svg>
                            <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                              Coupont
                            </p>
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              <div className="flex justify-between">
                                Apply coupon
                                <AlertDialogCancel className="border-none p-0 hover:bg-transparent">
                                  <svg
                                    className="mt-3 mr-0 cursor-pointer outline-none border-none hover:bg-transparent"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                      fill="black"
                                    />
                                  </svg>
                                </AlertDialogCancel>
                              </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              <div className="w-[470px] h-[180px] bg-white rounded-lg mx-auto">
                                <div className="w-[440px] h-[41px]   mt-[10px]  absolute flex justify-between">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Enter coupon code
                                  </p>
                                </div>

                                <div className="w-[470px] h-[41px]  mt-[60px]  absolute flex justify-between">
                                  <Input type="enter" placeholder="Enter" />
                                </div>

                                <div className="w-[470px] h-[41px]  mt-[120px]  absolute flex justify-between">
                                  <Button className="w-[470px] rounded-md">
                                    Add
                                  </Button>
                                </div>
                              </div>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  {/* order note */}
                  <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                    <div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                            <svg
                              className="ml-2 mt-2"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4642 15.5506H10.7149C10.423 15.5506 10.1862 15.3137 10.1862 15.0219C10.1862 14.7301 10.423 14.4933 10.7149 14.4933H11.4642C12.0191 14.3812 14.2677 12.1254 14.4427 11.4879V4.35975C14.4427 3.22155 13.5167 2.29535 12.3783 2.29535H3.85239C2.71393 2.29535 1.78799 3.22129 1.78799 4.35975V12.4281C1.78799 13.5668 2.71393 14.4933 3.85239 14.4933H7.48637C7.77819 14.4933 8.01502 14.7301 8.01502 15.0219C8.01502 15.3137 7.77819 15.5506 7.48637 15.5506H3.85239C2.13109 15.5506 0.730682 14.1499 0.730682 12.4281V4.35975C0.730682 2.63844 2.13109 1.23804 3.85239 1.23804H12.3783C14.0996 1.23804 15.5 2.63844 15.5 4.35975V11.5138C15.4997 12.5325 12.4824 15.5506 11.4642 15.5506Z"
                                fill="black"
                              />
                              <path
                                d="M1.78375 5.28296H14.6145V6.34027H1.78375V5.28296Z"
                                fill="black"
                              />
                              <path
                                d="M3.62164 3.71251C3.32982 3.71251 3.09299 3.47567 3.09299 3.18385V0.847991C3.09299 0.556174 3.32982 0.319336 3.62164 0.319336C3.91346 0.319336 4.1503 0.556174 4.1503 0.847991V3.18385C4.1503 3.47594 3.91372 3.71251 3.62164 3.71251Z"
                                fill="black"
                              />
                              <path
                                d="M12.5345 3.71251C12.2427 3.71251 12.0058 3.47567 12.0058 3.18385V0.847991C12.0058 0.556174 12.2427 0.319336 12.5345 0.319336C12.8263 0.319336 13.0631 0.556174 13.0631 0.847991V3.18385C13.0631 3.47594 12.8263 3.71251 12.5345 3.71251Z"
                                fill="black"
                              />
                              <path
                                d="M10.6599 15.4733C10.3681 15.4733 10.1312 15.2364 10.1312 14.9446V13.0623C10.1312 11.5107 11.3934 10.2483 12.9453 10.2483H14.5986C14.8904 10.2483 15.1273 10.4851 15.1273 10.7769C15.1273 11.0688 14.8904 11.3056 14.5986 11.3056H12.9453C11.9768 11.3056 11.1885 12.0936 11.1885 13.0623V14.9446C11.1885 15.2367 10.9517 15.4733 10.6599 15.4733Z"
                                fill="black"
                              />
                            </svg>
                            <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                              Order Notes
                            </p>
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              <div className="flex justify-between">
                                Note
                                <AlertDialogCancel className="border-none p-0">
                                  <svg
                                    className="mt-3 mr-0 cursor-pointer outline-none border-none"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                      fill="black"
                                    />
                                  </svg>
                                </AlertDialogCancel>
                              </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              <div className="w-[470px] h-[160px] bg-white rounded-lg mx-auto">
                                <div className="w-[470px] h-[41px]  mt-[10px]  absolute flex justify-between">
                                  <Textarea placeholder="Enter" />
                                </div>

                                <div className="w-[470px] h-[41px]  mt-[105px]  absolute flex justify-between">
                                  <Button className="w-[470px] rounded-md">
                                    Add
                                  </Button>
                                </div>
                              </div>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  {/* Clear all items */}
                  <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                    <svg
                      className="ml-2 mt-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                      Clear all items
                    </p>
                  </div>
                </div>

                {/* checkout */}
                <Button className="w-[99%] rounded-md mt-4 px-0 h-[63px]">
                  <div className="flex ">
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex">
                          <div className="font-bold text-lg ml-[-210px] w-[485px] ">
                            Checkout
                            <p className=" font-light text-xs">05 Items</p>
                          </div>
                          <div className="font-bold text-lg ">
                            189.000 đ
                            <p className=" font-light text-xs">
                              (VAT Included)
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Payment</DialogTitle>
                          <DialogDescription>
                            <div className="w-[580px] h-[600px] rounded-lg">
                              <div className="flex justify-between ">
                                <div className="w-[635px] h-[39px]  mt-[0px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Payment Method
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[650px] h-[56px]   mt-[40px]  absolute  flex ">
                                  <div className="h-full bg-white border  rounded-sm w-[160px] ml-0 pl-0 hover:bg-[#71B02F] hover:text-white">
                                    <svg
                                      className="ml-2 mt-2 hover:text-white"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
                                      Clear all items
                                    </p>
                                  </div>

                                  <div className="h-full bg-white border  rounded-sm w-[155px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
                                    <svg
                                      className="ml-2 mt-2"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
                                      ATM / Credit Card
                                    </p>
                                  </div>

                                  <div className="h-full bg-white border  rounded-sm w-[155px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
                                    <svg
                                      className="ml-2 mt-2"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
                                      Paypal
                                    </p>
                                  </div>

                                  <div className="h-full bg-white border  rounded-sm w-[155px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
                                    <svg
                                      className="ml-2 mt-2"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
                                      ATM
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[635px] h-[39px]   mt-[100px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Paid
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[650px] h-[39px]   mt-[140px]  absolute ">
                                  <Input
                                    type="email"
                                    placeholder="700.000"
                                    className="bg-[#F7F9FB]"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[650px] h-[39px]  mt-[190px]  absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Popular tendered
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between ">
                                <div className="w-[650px] h-[39px]   mt-[230px]  absolute  flex justify-between">
                                  <Input
                                    type="email"
                                    placeholder="700.000đ"
                                    className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center"
                                  />
                                  <Input
                                    type="email"
                                    placeholder="800.000đ"
                                    className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center"
                                  />
                                  <Input
                                    type="email"
                                    placeholder="1.000.000đ"
                                    className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center"
                                  />
                                  <Input
                                    type="email"
                                    placeholder="2.000.000đ"
                                    className="bg-[#F7F9FB] w-[150px] placeholder:text-center"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-between w-[650px]">
                                <div className="w-[210px] h-[39px]   mt-[275px]   absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Amount to pay
                                  </p>
                                </div>
                                <div className="w-[210px] h-[39px]  ml-[220px] mt-[275px]   absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Paid
                                  </p>
                                </div>
                                <div className="w-[210px] h-[39px]  ml-[440px] mt-[275px]   absolute ">
                                  <p className="pt-2 text-black font-bold text-sm">
                                    Change
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-between w-[650px] ">
                                <div className="w-[210px] h-[39px]   mt-[310px]   absolute ">
                                  <Input
                                    disabled
                                    type="email"
                                    placeholder="500.000đ"
                                    className="text-base font-bold text-right placeholder:text-[#71B02F] bg-[#E7F3DA]"
                                  />
                                </div>
                                <div className="w-[210px] h-[39px]  ml-[220px] mt-[310px]   absolute ">
                                  <Input
                                    disabled
                                    type="email"
                                    placeholder="700.000đ"
                                    className="text-base font-bold text-right placeholder:text-black bg-[#E9EEF3]"
                                  />
                                </div>
                                <div className="w-[210px] h-[39px]  ml-[440px] mt-[310px]   absolute ">
                                  <Input
                                    disabled
                                    type="email"
                                    placeholder="200.000đ"
                                    className="text-base font-bold text-right placeholder:text-[#ee9d67] bg-[#f3ebd9]"
                                  />
                                </div>
                              </div>

                              <div className="w-[650px] h-[243px]   mt-[370px]   absolute rounded-lg">
                                <div className=" rounded-lg">
                                  <Button className="w-[126px] h-[60px] rounded-tl-lg border bg-white text-black hover:text-white">
                                    1
                                  </Button>
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    2
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    3
                                  </Button>
                                  <Button className="w-[273px] h-[60px] text-sm font-[300] rounded-tr-lg border bg-white text-black hover:text-white">
                                    Clear
                                  </Button>
                                </div>
                                <div className=" rounded-lg flex">
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    4
                                  </Button>
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    5
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    6
                                  </Button>
                                  <Button className="w-[273px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    <svg
                                      width="25"
                                      height="25"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </Button>
                                </div>
                                <div className=" rounded-lg">
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    7
                                  </Button>
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    8
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    9
                                  </Button>
                                  <Button className="w-[273px] h-[60px] text-sm rounded-none border bg-white text-black hover:text-white">
                                    PAY & PRINT
                                  </Button>
                                </div>
                                <div className=" rounded-lg">
                                  <Button className="w-[126px] h-[60px] rounded-bl-lg border bg-white text-black hover:text-white">
                                    0
                                  </Button>
                                  <Button className="w-[126px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    .
                                  </Button>
                                  <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
                                    00
                                  </Button>
                                  <Button className="w-[273px] h-[60px] rounded-br-lg border text-black bg-[#F5F5F5] hover:text-white">
                                    BACK
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Button>
              </div>
            </div>
          </div>
    </nav> 
  );
}
