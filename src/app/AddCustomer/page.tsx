"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Command, CommandInput } from "@/components/ui/command";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import DemoAddCustomes from "../test/page";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Transactions() {
  return (
    <nav className="w-[100%] h-screen flex  bg-[#F7F9FB]">

      {/* Khoi tao mid */}
        <div className=" pt-[13px] h-screen ml-[1%] flex-grow mr-[1%]">
            <div className=" mt-[15px] flex">
                <div className="w-[370px] h-[45px] flex ">
                    {/* phan trai */}
                    <div className="w-[370px]  z-30 ">
                    <div className="relative">
                        <Command className="rounded-lg  relative">
                        <CommandInput placeholder="Search Customer..." />
                        <div className="ml-[84%] mt-[-43px] p-3">
                            <svg
                            className="text-black"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M6.79418 0.5H2.35307C1.9112 0.500515 1.48757 0.676274 1.17512 0.988724C0.862676 1.30117 0.686916 1.7248 0.686401 2.16667L0.686401 6.60778C0.686916 7.04965 0.862676 7.47327 1.17512 7.78572C1.48757 8.09817 1.9112 8.27393 2.35307 8.27445H6.79418C7.23605 8.27393 7.65967 8.09817 7.97212 7.78572C8.28457 7.47327 8.46033 7.04965 8.46085 6.60778V2.16667C8.46033 1.7248 8.28457 1.30117 7.97212 0.988724C7.65967 0.676274 7.23605 0.500515 6.79418 0.5L6.79418 0.5ZM7.34974 6.60778C7.34974 6.75513 7.29121 6.89643 7.18702 7.00062C7.08283 7.10481 6.94153 7.16334 6.79418 7.16334H2.35307C2.20573 7.16334 2.06442 7.10481 1.96023 7.00062C1.85604 6.89643 1.79751 6.75513 1.79751 6.60778V2.16667C1.79751 2.01932 1.85604 1.87802 1.96023 1.77383C2.06442 1.66964 2.20573 1.61111 2.35307 1.61111H6.79418C6.94152 1.61111 7.08283 1.66964 7.18702 1.77383C7.2912 1.87802 7.34974 2.01932 7.34974 2.16667L7.34974 6.60778ZM6.79418 10.7256H2.35307C1.9112 10.7261 1.48757 10.9018 1.17512 11.2143C0.862676 11.5267 0.686916 11.9504 0.686401 12.3922L0.686401 16.8333C0.686916 17.2752 0.862676 17.6988 1.17512 18.0113C1.48757 18.3237 1.9112 18.4995 2.35307 18.5H6.79418C7.23605 18.4995 7.65967 18.3237 7.97212 18.0113C8.28457 17.6988 8.46033 17.2752 8.46085 16.8333V12.3922C8.46033 11.9503 8.28457 11.5267 7.97212 11.2143C7.65967 10.9018 7.23605 10.7261 6.79418 10.7256L6.79418 10.7256ZM7.34974 16.8333C7.34974 16.9807 7.29121 17.122 7.18702 17.2262C7.08283 17.3304 6.94153 17.3889 6.79418 17.3889H2.35307C2.20573 17.3889 2.06442 17.3304 1.96023 17.2262C1.85604 17.122 1.79751 16.9807 1.79751 16.8333V12.3922C1.79751 12.2449 1.85604 12.1036 1.96023 11.9994C2.06442 11.8952 2.20573 11.8367 2.35307 11.8367H6.79418C6.94152 11.8367 7.08283 11.8952 7.18702 11.9994C7.2912 12.1036 7.34974 12.2449 7.34974 12.3922L7.34974 16.8333ZM18.3134 11.1389C18.2029 11.1389 18.0969 11.1828 18.0188 11.2609C17.9406 11.3391 17.8967 11.4451 17.8967 11.5556V17.9445C17.8967 18.055 17.9406 18.1609 18.0188 18.2391C18.0969 18.3172 18.2029 18.3611 18.3134 18.3611C18.4239 18.3611 18.5299 18.3172 18.608 18.2391C18.6862 18.1609 18.7301 18.055 18.7301 17.9445V11.5556C18.7301 11.445 18.6862 11.3391 18.608 11.2609C18.5299 11.1828 18.4239 11.1389 18.3134 11.1389V11.1389ZM15.1128 12.8461C15.0023 12.8461 14.8963 12.89 14.8182 12.9682C14.74 13.0463 14.6961 13.1523 14.6961 13.2628V17.9444C14.6961 18.055 14.74 18.1609 14.8182 18.2391C14.8963 18.3172 15.0023 18.3611 15.1128 18.3611C15.2233 18.3611 15.3293 18.3172 15.4074 18.2391C15.4856 18.1609 15.5295 18.055 15.5295 17.9444V13.2628C15.5295 13.1523 15.4856 13.0463 15.4074 12.9681C15.3293 12.89 15.2233 12.8461 15.1128 12.8461V12.8461ZM11.9122 11.5744C11.8017 11.5744 11.6957 11.6183 11.6176 11.6965C11.5395 11.7746 11.4956 11.8806 11.4956 11.9911V17.9444C11.4956 18.055 11.5395 18.1609 11.6176 18.2391C11.6957 18.3172 11.8017 18.3611 11.9122 18.3611C12.0227 18.3611 12.1287 18.3172 12.2069 18.2391C12.285 18.1609 12.3289 18.055 12.3289 17.9444V11.9911C12.3289 11.8806 12.285 11.7746 12.2069 11.6965C12.1287 11.6184 12.0227 11.5745 11.9122 11.5745V11.5744ZM17.3333 0.5H12.8922C12.4504 0.500515 12.0267 0.676274 11.7143 0.988724C11.4018 1.30117 11.2261 1.7248 11.2256 2.16667V6.60778C11.2261 7.04965 11.4018 7.47327 11.7143 7.78572C12.0267 8.09817 12.4504 8.27393 12.8922 8.27445H17.3333C17.7752 8.27393 18.1988 8.09817 18.5113 7.78572C18.8237 7.47327 18.9995 7.04965 19 6.60778V2.16667C18.9995 1.7248 18.8237 1.30117 18.5113 0.988724C18.1988 0.676274 17.7752 0.500515 17.3333 0.5ZM17.8889 6.60778C17.8889 6.75513 17.8304 6.89643 17.7262 7.00062C17.622 7.10481 17.4807 7.16334 17.3333 7.16334H12.8922C12.8193 7.16334 12.747 7.14897 12.6796 7.12105C12.6122 7.09313 12.551 7.05221 12.4994 7.00062C12.4478 6.94903 12.4069 6.88779 12.379 6.82038C12.351 6.75298 12.3367 6.68074 12.3367 6.60778V2.16667C12.3367 2.09371 12.351 2.02147 12.379 1.95406C12.4069 1.88666 12.4478 1.82542 12.4994 1.77383C12.551 1.72224 12.6122 1.68132 12.6796 1.6534C12.747 1.62548 12.8193 1.61111 12.8922 1.61111H17.3333C17.4807 1.61111 17.622 1.66964 17.7262 1.77383C17.8304 1.87802 17.8889 2.01932 17.8889 2.16667V6.60778Z"
                                fill="black"
                            />
                            </svg>
                        </div>
                        </Command>
                    </div>
                    </div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                      <div className="w-[130px] h-[45px] bg-white ml-6 px-[10px] py-[12px] rounded-sm cursor-pointer">
                          <div className="flex items-center space-x-2">
                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4167 17.3751H12.0834C11.9176 17.3751 11.7586 17.3092 11.6414 17.192C11.5242 17.0748 11.4584 16.9158 11.4584 16.7501C11.4584 16.5843 11.5242 16.4254 11.6414 16.3081C11.7586 16.1909 11.9176 16.1251 12.0834 16.1251H15.4167C15.5825 16.1251 15.7414 16.1909 15.8586 16.3081C15.9759 16.4254 16.0417 16.5843 16.0417 16.7501C16.0417 16.9158 15.9759 17.0748 15.8586 17.192C15.7414 17.3092 15.5825 17.3751 15.4167 17.3751ZM13.75 19.0417C13.5843 19.0417 13.4253 18.9759 13.3081 18.8587C13.1909 18.7415 13.125 18.5825 13.125 18.4167V15.0834C13.125 14.9177 13.1909 14.7587 13.3081 14.6415C13.4253 14.5243 13.5843 14.4584 13.75 14.4584C13.9158 14.4584 14.0748 14.5243 14.192 14.6415C14.3092 14.7587 14.375 14.9177 14.375 15.0834V18.4167C14.375 18.5825 14.3092 18.7415 14.192 18.8587C14.0748 18.9759 13.9158 19.0417 13.75 19.0417ZM9.85837 10.1834H9.83753C8.71891 10.1455 7.65894 9.67381 6.88202 8.86812C6.1051 8.06242 5.67223 6.98601 5.67503 5.86675C5.67372 5.29911 5.78441 4.7368 6.00078 4.21201C6.21714 3.68723 6.53492 3.21029 6.93591 2.80853C7.33691 2.40676 7.81323 2.08806 8.33759 1.87068C8.86196 1.65331 9.42406 1.54153 9.9917 1.54175C10.8414 1.54106 11.6726 1.7907 12.3813 2.2595C13.09 2.7283 13.6449 3.39548 13.9768 4.17775C14.3086 4.96001 14.4027 5.8227 14.2472 6.6581C14.0917 7.49349 13.6936 8.26458 13.1025 8.87508C12.3278 9.67879 11.2699 10.1482 10.1542 10.1834C10.1265 10.1853 10.0986 10.1853 10.0709 10.1834C10.019 10.179 9.96688 10.179 9.91503 10.1834H9.85837ZM9.9917 2.79175C9.58843 2.79153 9.18907 2.87089 8.81653 3.0253C8.44398 3.1797 8.10557 3.4061 7.82068 3.69153C7.5358 3.97696 7.31004 4.3158 7.15634 4.68864C7.00265 5.06147 6.92405 5.46098 6.92503 5.86425C6.91995 6.65362 7.22095 7.41425 7.76481 7.9864C8.30867 8.55854 9.05308 8.89768 9.8417 8.93258C9.94213 8.92561 10.0429 8.92561 10.1434 8.93258C10.9426 8.89097 11.6941 8.53913 12.2379 7.95192C12.7817 7.3647 13.0749 6.58847 13.0552 5.78838C13.0354 4.98828 12.7042 4.22747 12.1321 3.66782C11.56 3.10817 10.792 2.79386 9.9917 2.79175ZM9.9917 19.3001C8.39485 19.3297 6.82393 18.8936 5.47087 18.0451C4.94621 17.7402 4.50696 17.3079 4.19378 16.7882C3.88059 16.2684 3.70361 15.6781 3.6792 15.0717C3.70487 14.4677 3.88252 13.88 4.1957 13.3628C4.50888 12.8457 4.94747 12.416 5.47087 12.1134C6.82206 11.2641 8.39188 10.8279 9.98753 10.8584C11.5838 10.8279 13.1543 11.2644 14.5059 12.1142C14.5798 12.1572 14.6441 12.2148 14.6948 12.2836C14.7456 12.3524 14.7817 12.4309 14.8009 12.5142C14.8201 12.5974 14.822 12.6838 14.8066 12.7679C14.7911 12.8519 14.7585 12.9319 14.7109 13.0029C14.6633 13.0739 14.6016 13.1343 14.5297 13.1805C14.4578 13.2267 14.3771 13.2577 14.2928 13.2715C14.2084 13.2853 14.1221 13.2816 14.0392 13.2607C13.9563 13.2399 13.8786 13.2022 13.8109 13.1501C12.6518 12.4691 11.3319 12.11 9.98753 12.11C8.64321 12.11 7.32328 12.4691 6.1642 13.1501C5.81446 13.3425 5.51832 13.6192 5.30265 13.955C5.08697 14.2909 4.95861 14.6753 4.9292 15.0734C4.95809 15.4728 5.08615 15.8587 5.3018 16.1962C5.51745 16.5336 5.81386 16.8119 6.1642 17.0059C7.31183 17.7177 8.64162 18.0804 9.9917 18.0501C10.1575 18.0501 10.3164 18.1159 10.4336 18.2331C10.5509 18.3504 10.6167 18.5093 10.6167 18.6751C10.6167 18.8408 10.5509 18.9998 10.4336 19.117C10.3164 19.2342 10.1575 19.3001 9.9917 19.3001Z" fill="black"/>
                            </svg>

                                <p className="text-[12px] font-[400] leading-normal">Add Customer</p>
                          </div>
                      </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[770px]">
                    <DialogHeader>
                      <DialogTitle className="pb-4 items-center">Add new customer</DialogTitle>
                      <DialogDescription>
                      </DialogDescription>
                    </DialogHeader>
                            <div className='flex w-full justify-between -mt-2'>
                                <div className='w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>First Name</p>
                                    <Input className='mt-3 border-none bg-[#F7F9FB]' type='text' name='firtname'/>
                                </div>
                                <div className='w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>Last Name</p>
                                    <Input className='mt-3 border-none bg-[#F7F9FB]'  type='text' name='lastname' />
                                </div>
                            </div>
                            <div className='flex w-full justify-between mt-0'>
                                <div className='w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>Email</p>
                                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' />
                                </div>
                                <div className=' w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>Phone</p>
                                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='phone' />
                                </div>
                            </div>
                            <div className='flex w-full justify-between mt-0'>
                                <div className=' w-[100%]'>
                                    <p className='text-sm font-bold leading-normal'>Adress1</p> 
                                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='address' />
                                </div>
                            </div>
                            <div className='flex w-full justify-between mt-0'>
                                <div className=' w-[100%]'>
                                    <p className='text-sm font-bold leading-normal'>Adress2</p>
                                    <Input className='mt-2 border-none bg-[#F7F9FB]'/>
                                </div>
                            </div>
                            <div className='flex w-full justify-between mt-0 '>
                                <div className=' w-[353px] '>
                                    <p className='text-sm font-bold leading-normal'>Coutry</p>
                                    <Select>
                                        <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                                            <SelectValue placeholder="a" />
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
                                <div className=' w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>Sate</p>
                                    <Select>
                                        <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                                            <SelectValue />
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
                            <div className='flex w-full justify-between mt-0'>
                                <div className=' w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>City</p>
                                    <Select >
                                        <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                                            <SelectValue/>
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
                                <div className=' w-[353px]'>
                                    <p className='text-sm font-bold leading-normal'>Zip Code</p>
                                    <Select>
                                        <SelectTrigger className="w-[353px] h-[44px] outline-none border-none bg-[#F7F9FB] mt-2">
                                            <SelectValue  />
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
                            <div className='flex w-full justify-between mt-0'>
                                <div className=' w-[100%]'>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="add" className='rounded-full'/>
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
                    <div className='flex w-full justify-between mt-1'>
                                <div className=' w-[100%]'>
                                    <Button className='w-full rounded-lg'> SAVE</Button>
                                </div>
                            </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
            </div>
            <div className="mt-[15px]">
                <DemoAddCustomes />
            </div>
        </div>
    </nav>
  );
}
