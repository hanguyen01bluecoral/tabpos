"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeaderNav from "../HeaderNav";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";


export default function OderPaid() {
  
  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (itemId: any | React.SetStateAction<null>) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  // any la chap nhan moi kieu du lieu
  
  

  return (
    <nav className="w-[100%] h-screen flex  bg-[#F7F9FB]">
      {/* khoi avata */}
      <div  className="w-[5%] pt-[20px] pl-3 pr-4 h-screen flex flex-1 flex-col flex-shrink-0 flex-grow-0 justify-between bg-white">
        <div className="  mx-auto">
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
            <a href="oderPaid">
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
                    <div className="w-[180px]">
                      <div className="flex items-center pt-[146px]">
                        <div className="w-[40px] h-[40px] bg-slate-500 rounded-full">
                          <img
                            className="w-[40px] h-[40px] object-cover rounded-full border-[2px]"
                            src="https://anhdephd.vn/wp-content/uploads/2022/04/hinh-anh-sieu-nhan-ultraman-sieu-dep-424x600.jpg"
                          />
                        </div>
                        <div>
                          <p className="ml-3 text-xs font-semibold">
                            Hi, Nguyen Le
                          </p>
                          <div className="flex items-center w-[70px] h-[16px] px-[5px] py-[2px] rounded-[99px] ml-3 bg-[#F1F7EA] mt-[5px]">
                            <div className="w-[8px] h-[8px] rounded-full bg-green-700"></div>
                            <p className="text-[10px] font-medium ml-3 whitespace-nowrap gap-[5px]">
                              {" "}
                              HCM 01
                            </p>
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

      {/* Khoi tao mid */}
      <div className=" pt-[30px] h-screen ml-[1%] flex-grow ">
        <div className="">
          <p className="text-xl font-medium ">Orders</p>
        </div>
        <div className=" mt-[15px]">
          <div className="w-[100%] h-[45px] flex ">
            {/* phan trai */}
            <div className="w-[370px]  z-30 ">
              <div className="relative">
                <Command className="rounded-lg  relative">
                  <CommandInput placeholder="Search Products..." />
                </Command>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[15px]">
          <p className="text-sm font-bold ">Date: start - end</p>
        </div>

        <div className="w-[370px] h-[389px] mt-[15px] bg-zinc-100 rounded border border-zinc-100 flex-col justify-start items-start gap-px inline-flex">
          
          <div className={`w-[370px] p-2.5 bg-white justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${ activeItem === 2 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(2)}>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532798</b>
              <div className="text-[#555] text-xs font-normal ">
                21/11/2017, 15:30
              </div>
              <div className="text-[#555] text-xs font-normal ">Completed</div>
            </div>
            <div className="flex-col justify-start items-end gap-[5px] inline-flex">
              <div className="text-black text-sm font-semibold font-['Inter']">
                350.000.000đ
              </div>
              <div className="text-[#555] text-xs font-normal ">Uyen Tran</div>
            </div>
          </div>
          <div  className={`w-[370px] p-2.5 bg-white justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${ activeItem === 1 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(1)}>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532798</b>
              <div className="text-[#555] text-xs font-normal">
                21/11/2017, 15:30
              </div>
              <div className="text-[#555] text-xs font-normal">Cancel</div>
            </div>
            <div className="flex-col justify-start items-end gap-[5px] inline-flex">
              <div className="text-black text-sm font-semibold font-['Inter']">
                350.000.000đ
              </div>
              <div className="text-[#555] text-xs font-normal ">Uyen Tran</div>
            </div>
          </div>
          <div className={`w-[370px] p-2.5 bg-white justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${ activeItem === 3 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(3)}>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532798</b>
              <div className="text-[#555] text-xs font-normal ">
                21/11/2017, 15:30
              </div>
              <div className="text-[#555] text-xs font-normal ">Refunded</div>
            </div>
            <div className="flex-col justify-start items-end gap-[5px] inline-flex">
              <div className="text-black text-sm font-semibold font-['Inter']">
                350.000.000đ
              </div>
              <div className="text-[#555] text-xs font-normal ">Uyen Tran</div>
            </div>
          </div>
          <div className="w-[370px] p-2.5 bg-white justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F]">
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532798</b>
              <div className="text-neutral-600 text-xs font-normal ">
                21/11/2017, 15:30
              </div>
              <div className="text-neutral-600 text-xs font-normal ">
                Completed
              </div>
            </div>
            <div className="flex-col justify-start items-end gap-[5px] inline-flex">
              <div className="text-black text-sm font-semibold font-['Inter']">
                350.000.000đ
              </div>
              <div className="text-neutral-600 text-xs font-normal ">
                Uyen Tran
              </div>
            </div>
          </div>
          <div className="w-[370px] p-2.5 bg-white justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F]" >
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532798</b>
              <div className="text-neutral-600 text-xs font-normal ">
                21/11/2017, 15:30
              </div>
              <div className="text-neutral-600 text-xs font-normal ">
                Completed
              </div>
            </div>
            <div className="flex-col justify-start items-end gap-[5px] inline-flex">
              <div className="text-black text-sm font-semibold font-['Inter']">
                350.000.000đ
              </div>
              <div className="text-neutral-600 text-xs font-normal ">
                Uyen Tran
              </div>
            </div>
          </div>
        </div>
      </div>
       {activeItem === 1 &&(
        <div  className="w-[100%] pt-[70px] h-screen ml-[1%] flex-grow">
              <div className="w-[100%] h-[920px] bg-white flex-grow border rounded-sm flex-1">
                {/* top */}
                <div className="w-[100%] h-[209px] p-5 bg-slate-200 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[100%] justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        #32098532798
                      </div>
                      <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          21/11/2017, 15:30
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Completed
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Sale Rep: Samwell
                        </div>
                        <div className="justify-center items-start gap-2.5 inline-flex">
                          <div className="text-neutral-600 text-sm font-normal ">
                            Note: John is my friend, He is not a bastard.
                          </div>
                          <div className="w-5 h-5 relative">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9429 3.22367C16.4117 3.6925 16.6751 4.32836 16.6751 4.99137C16.6751 5.65439 16.4117 6.29025 15.9429 6.75908L6.04794 16.6541C5.96975 16.7321 5.8638 16.7758 5.75336 16.7758H3.22378C3.00276 16.7758 2.7908 16.688 2.63452 16.5317C2.47824 16.3754 2.39044 16.1634 2.39044 15.9424V13.4132C2.39034 13.3585 2.40104 13.3043 2.42192 13.2536C2.44279 13.203 2.47344 13.157 2.51211 13.1182L12.4084 3.22367C12.8772 2.75499 13.5129 2.4917 14.1759 2.4917C14.8388 2.4917 15.4745 2.75499 15.9434 3.22367H15.9429ZM15.0596 4.107C14.8341 3.88155 14.531 3.75079 14.2122 3.7415C13.8935 3.7322 13.5833 3.84507 13.345 4.057L13.2913 4.107L3.68919 13.7095C3.67372 13.725 3.66145 13.7434 3.65309 13.7636C3.64472 13.7838 3.64043 13.8055 3.64044 13.8274V15.3599C3.64044 15.452 3.71503 15.5266 3.80711 15.5266H5.33878C5.3607 15.5265 5.3824 15.5222 5.40263 15.5137C5.42287 15.5053 5.44124 15.493 5.45669 15.4774L15.0592 5.87575C15.2847 5.65031 15.4155 5.3472 15.4249 5.02847C15.4343 4.70974 15.3215 4.39947 15.1096 4.16117L15.0596 4.10783V4.107Z" fill="black"/>
                            <path d="M11.5238 4.10742L15.0592 7.64284L14.1754 8.52659L10.64 4.99117L11.5238 4.10742Z" fill="black"/>
                            <path d="M9.74998 15.5415H16.5C16.6111 15.5415 16.6666 15.5971 16.6666 15.7082V16.6248C16.6666 16.7359 16.6111 16.7915 16.5 16.7915H9.74998C9.63887 16.7915 9.58331 16.7359 9.58331 16.6248V15.7082C9.58331 15.5971 9.63887 15.5415 9.74998 15.5415Z" fill="black"/>
                            <path d="M13.0834 13.0415H16.5C16.6111 13.0415 16.6667 13.0971 16.6667 13.2082V14.1248C16.6667 14.2359 16.6111 14.2915 16.5 14.2915H13.0834C12.9722 14.2915 12.9167 14.2359 12.9167 14.1248V13.2082C12.9167 13.0971 12.9722 13.0415 13.0834 13.0415Z" fill="black"/>
                            </svg>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-end gap-2.5 inline-flex  cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        John Doe
                      </div>
                      <div className="flex-col justify-start items-end gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          Johndoe@mail.com
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          +840228374912
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] justify-between items-start inline-flex cursor-pointer">
                    <div className="justify-start items-start gap-5 flex">
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_916_3405)">
                              <path
                                d="M16.65 3.6H15.3V1.35C15.3 0.6057 14.6943 0 13.95 0H4.05C3.3057 0 2.7 0.6057 2.7 1.35V3.6H1.35C0.6057 3.6 0 4.2057 0 4.95V13.05C0 13.7943 0.6057 14.4 1.35 14.4H2.7V16.65C2.7 17.3943 3.3057 18 4.05 18H13.95C14.6943 18 15.3 17.3943 15.3 16.65V14.4H16.65C17.3943 14.4 18 13.7943 18 13.05V4.95C18 4.2057 17.3943 3.6 16.65 3.6ZM3.6 1.35C3.6 1.23065 3.64741 1.11619 3.7318 1.0318C3.81619 0.947411 3.93065 0.9 4.05 0.9H13.95C14.0693 0.9 14.1838 0.947411 14.2682 1.0318C14.3526 1.11619 14.4 1.23065 14.4 1.35V3.6H3.6V1.35ZM13.95 17.1H4.05C3.93065 17.1 3.81619 17.0526 3.7318 16.9682C3.64741 16.8838 3.6 16.7693 3.6 16.65V10.8H14.4V16.65C14.4 16.7693 14.3526 16.8838 14.2682 16.9682C14.1838 17.0526 14.0693 17.1 13.95 17.1ZM17.1 13.05C17.1 13.1693 17.0526 13.2838 16.9682 13.3682C16.8838 13.4526 16.7693 13.5 16.65 13.5H15.3V10.8H15.75C15.8693 10.8 15.9838 10.7526 16.0682 10.6682C16.1526 10.5838 16.2 10.4693 16.2 10.35C16.2 10.2307 16.1526 10.1162 16.0682 10.0318C15.9838 9.94741 15.8693 9.9 15.75 9.9H2.25C2.13065 9.9 2.01619 9.94741 1.9318 10.0318C1.84741 10.1162 1.8 10.2307 1.8 10.35C1.8 10.4693 1.84741 10.5838 1.9318 10.6682C2.01619 10.7526 2.13065 10.8 2.25 10.8H2.7V13.5H1.35C1.23065 13.5 1.11619 13.4526 1.0318 13.3682C0.947411 13.2838 0.9 13.1693 0.9 13.05V4.95C0.9 4.83065 0.947411 4.71619 1.0318 4.6318C1.11619 4.54741 1.23065 4.5 1.35 4.5H16.65C16.7693 4.5 16.8838 4.54741 16.9682 4.6318C17.0526 4.71619 17.1 4.83065 17.1 4.95V13.05Z"
                                fill="black"
                              />
                              <path
                                d="M13.05 12.5999H4.95C4.83065 12.5999 4.71619 12.5525 4.6318 12.4681C4.54741 12.3837 4.5 12.2692 4.5 12.1499C4.5 12.0306 4.54741 11.9161 4.6318 11.8317C4.71619 11.7473 4.83065 11.6999 4.95 11.6999H13.05C13.1693 11.6999 13.2838 11.7473 13.3682 11.8317C13.4526 11.9161 13.5 12.0306 13.5 12.1499C13.5 12.2692 13.4526 12.3837 13.3682 12.4681C13.2838 12.5525 13.1693 12.5999 13.05 12.5999ZM13.05 14.3999H4.95C4.83065 14.3999 4.71619 14.3525 4.6318 14.2681C4.54741 14.1837 4.5 14.0692 4.5 13.9499C4.5 13.8306 4.54741 13.7161 4.6318 13.6317C4.71619 13.5473 4.83065 13.4999 4.95 13.4999H13.05C13.1693 13.4999 13.2838 13.5473 13.3682 13.6317C13.4526 13.7161 13.5 13.8306 13.5 13.9499C13.5 14.0692 13.4526 14.1837 13.3682 14.2681C13.2838 14.3525 13.1693 14.3999 13.05 14.3999ZM13.05 16.1999H4.95C4.83065 16.1999 4.71619 16.1525 4.6318 16.0681C4.54741 15.9837 4.5 15.8692 4.5 15.7499C4.5 15.6306 4.54741 15.5161 4.6318 15.4317C4.71619 15.3473 4.83065 15.2999 4.95 15.2999H13.05C13.1693 15.2999 13.2838 15.3473 13.3682 15.4317C13.4526 15.5161 13.5 15.6306 13.5 15.7499C13.5 15.8692 13.4526 15.9837 13.3682 16.0681C13.2838 16.1525 13.1693 16.1999 13.05 16.1999ZM14.85 8.0999C14.1057 8.0999 13.5 7.4942 13.5 6.7499C13.5 6.0056 14.1057 5.3999 14.85 5.3999C15.5943 5.3999 16.2 6.0056 16.2 6.7499C16.2 7.4942 15.5943 8.0999 14.85 8.0999ZM14.85 6.2999C14.7909 6.2999 14.7324 6.31154 14.6778 6.33416C14.6232 6.35677 14.5736 6.38992 14.5318 6.4317C14.49 6.47349 14.4569 6.5231 14.4343 6.57769C14.4116 6.63229 14.4 6.69081 14.4 6.7499C14.4 6.809 14.4116 6.86751 14.4343 6.92211C14.4569 6.97671 14.49 7.02631 14.5318 7.0681C14.5736 7.10989 14.6232 7.14303 14.6778 7.16565C14.7324 7.18826 14.7909 7.1999 14.85 7.1999C14.9693 7.1999 15.0838 7.15249 15.1682 7.0681C15.2526 6.98371 15.3 6.86925 15.3 6.7499C15.3 6.63055 15.2526 6.5161 15.1682 6.4317C15.0838 6.34731 14.9693 6.2999 14.85 6.2999Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_916_3405">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Print
                        </div>
                      </div>
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.48 3.6001H2.52C2.23727 3.60004 1.96579 3.71086 1.76386 3.90875C1.56193 4.10664 1.44566 4.37582 1.44 4.6585V13.3417C1.44025 13.628 1.55421 13.9026 1.7568 14.1049C1.95379 14.2952 2.21729 14.4011 2.4912 14.4001H15.4512C15.7376 14.4001 16.0123 14.2863 16.2149 14.0838C16.4174 13.8812 16.5312 13.6065 16.5312 13.3201V4.6801C16.5313 4.39858 16.4215 4.12816 16.2251 3.92643C16.0288 3.7247 15.7614 3.6076 15.48 3.6001ZM15.48 13.6801H2.52C2.4251 13.6783 2.3346 13.6397 2.26748 13.5726C2.20037 13.5055 2.16185 13.415 2.16 13.3201V5.9977L8.4672 9.6337C8.62984 9.73293 8.81668 9.78543 9.0072 9.78543C9.19773 9.78543 9.38456 9.73293 9.5472 9.6337L15.84 5.9977V13.3417C15.8345 13.4334 15.7941 13.5195 15.7272 13.5824C15.6603 13.6453 15.5719 13.6803 15.48 13.6801ZM15.84 5.1697L9.18 9.0145C9.12528 9.0461 9.0632 9.06273 9 9.06273C8.93681 9.06273 8.87473 9.0461 8.82 9.0145L2.16 5.1697V4.6585C2.16551 4.56681 2.20586 4.4807 2.27279 4.41779C2.33971 4.35488 2.42815 4.31993 2.52 4.3201H15.48C15.5755 4.3201 15.667 4.35803 15.7346 4.42554C15.8021 4.49305 15.84 4.58462 15.84 4.6801V5.1481V5.1697Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Email voice
                        </div>
                      </div>
                    </div>
                    <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                      <div className="w-[18px] h-[18px] relative">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9688 5.0625H4.16251L6.01876 3.20625C6.24376 2.98125 6.24376 2.64375 6.01876 2.41875C5.79376 2.19375 5.45626 2.19375 5.23126 2.41875L2.41876 5.23125C2.36251 5.2875 2.30626 5.34375 2.30626 5.4C2.25001 5.56875 2.25001 5.68125 2.30626 5.85C2.36251 5.90625 2.36251 5.9625 2.41876 6.01875L5.23126 8.83125C5.34376 8.94375 5.45626 9 5.62501 9C5.79376 9 5.90626 8.94375 6.01876 8.83125C6.24376 8.60625 6.24376 8.26875 6.01876 8.04375L4.16251 6.1875H10.9688C12.9938 6.1875 14.625 7.81875 14.625 9.84375C14.625 11.8687 12.9938 13.5 10.9688 13.5H4.44376C4.10626 13.5 3.88126 13.725 3.88126 14.0625C3.88126 14.4 4.10626 14.625 4.44376 14.625H10.9688C13.6125 14.625 15.75 12.4875 15.75 9.84375C15.75 7.2 13.6125 5.0625 10.9688 5.0625Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                        Refund
                      </div>
                    </div>
                  </div>
                </div>
                {/* mid */}
                <div className="w-[100%] h-[530px] overflow-y-auto scrollbar-thin">
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal font-['Inter']">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                </div>
                {/* bottom */}
                <div className="w-[420px] h-[141px] flex-col gap-2.5 mt-[10px]  float-right mr-4 inline-flex">
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        Subtotal
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        125.000.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        tax
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        5.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                      Discount
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        -10.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />
                  
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-black text-sm font-normal font-['Inter']">
                      Total
                      </div>
                      <div className="text-black text-sm font-bold font-['Inter']">
                      124.985.000đ
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
       </div>)
        }
        {activeItem === 2 &&(
        <div  className="w-[100%] pt-[70px] h-screen ml-[1%] flex-grow">
              <div className="w-[100%] h-[920px] bg-white flex-grow border rounded-sm flex-1">
                {/* top */}
                <div className="w-[100%] h-[209px] p-5 bg-slate-200 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[100%] justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        #32098532792
                      </div>
                      <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          21/11/2017, 15:30
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Completed
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Sale Rep: Samwell
                        </div>
                        <div className="justify-center items-start gap-2.5 inline-flex">
                          <div className="text-neutral-600 text-sm font-normal ">
                            Note: John is my friend, He is not a bastard.
                          </div>
                          <div className="w-5 h-5 relative">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9429 3.22367C16.4117 3.6925 16.6751 4.32836 16.6751 4.99137C16.6751 5.65439 16.4117 6.29025 15.9429 6.75908L6.04794 16.6541C5.96975 16.7321 5.8638 16.7758 5.75336 16.7758H3.22378C3.00276 16.7758 2.7908 16.688 2.63452 16.5317C2.47824 16.3754 2.39044 16.1634 2.39044 15.9424V13.4132C2.39034 13.3585 2.40104 13.3043 2.42192 13.2536C2.44279 13.203 2.47344 13.157 2.51211 13.1182L12.4084 3.22367C12.8772 2.75499 13.5129 2.4917 14.1759 2.4917C14.8388 2.4917 15.4745 2.75499 15.9434 3.22367H15.9429ZM15.0596 4.107C14.8341 3.88155 14.531 3.75079 14.2122 3.7415C13.8935 3.7322 13.5833 3.84507 13.345 4.057L13.2913 4.107L3.68919 13.7095C3.67372 13.725 3.66145 13.7434 3.65309 13.7636C3.64472 13.7838 3.64043 13.8055 3.64044 13.8274V15.3599C3.64044 15.452 3.71503 15.5266 3.80711 15.5266H5.33878C5.3607 15.5265 5.3824 15.5222 5.40263 15.5137C5.42287 15.5053 5.44124 15.493 5.45669 15.4774L15.0592 5.87575C15.2847 5.65031 15.4155 5.3472 15.4249 5.02847C15.4343 4.70974 15.3215 4.39947 15.1096 4.16117L15.0596 4.10783V4.107Z" fill="black"/>
                            <path d="M11.5238 4.10742L15.0592 7.64284L14.1754 8.52659L10.64 4.99117L11.5238 4.10742Z" fill="black"/>
                            <path d="M9.74998 15.5415H16.5C16.6111 15.5415 16.6666 15.5971 16.6666 15.7082V16.6248C16.6666 16.7359 16.6111 16.7915 16.5 16.7915H9.74998C9.63887 16.7915 9.58331 16.7359 9.58331 16.6248V15.7082C9.58331 15.5971 9.63887 15.5415 9.74998 15.5415Z" fill="black"/>
                            <path d="M13.0834 13.0415H16.5C16.6111 13.0415 16.6667 13.0971 16.6667 13.2082V14.1248C16.6667 14.2359 16.6111 14.2915 16.5 14.2915H13.0834C12.9722 14.2915 12.9167 14.2359 12.9167 14.1248V13.2082C12.9167 13.0971 12.9722 13.0415 13.0834 13.0415Z" fill="black"/>
                            </svg>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-end gap-2.5 inline-flex  cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        John Doe
                      </div>
                      <div className="flex-col justify-start items-end gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          Johndoe@mail.com
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          +840228374912
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] justify-between items-start inline-flex cursor-pointer">
                    <div className="justify-start items-start gap-5 flex">
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_916_3405)">
                              <path
                                d="M16.65 3.6H15.3V1.35C15.3 0.6057 14.6943 0 13.95 0H4.05C3.3057 0 2.7 0.6057 2.7 1.35V3.6H1.35C0.6057 3.6 0 4.2057 0 4.95V13.05C0 13.7943 0.6057 14.4 1.35 14.4H2.7V16.65C2.7 17.3943 3.3057 18 4.05 18H13.95C14.6943 18 15.3 17.3943 15.3 16.65V14.4H16.65C17.3943 14.4 18 13.7943 18 13.05V4.95C18 4.2057 17.3943 3.6 16.65 3.6ZM3.6 1.35C3.6 1.23065 3.64741 1.11619 3.7318 1.0318C3.81619 0.947411 3.93065 0.9 4.05 0.9H13.95C14.0693 0.9 14.1838 0.947411 14.2682 1.0318C14.3526 1.11619 14.4 1.23065 14.4 1.35V3.6H3.6V1.35ZM13.95 17.1H4.05C3.93065 17.1 3.81619 17.0526 3.7318 16.9682C3.64741 16.8838 3.6 16.7693 3.6 16.65V10.8H14.4V16.65C14.4 16.7693 14.3526 16.8838 14.2682 16.9682C14.1838 17.0526 14.0693 17.1 13.95 17.1ZM17.1 13.05C17.1 13.1693 17.0526 13.2838 16.9682 13.3682C16.8838 13.4526 16.7693 13.5 16.65 13.5H15.3V10.8H15.75C15.8693 10.8 15.9838 10.7526 16.0682 10.6682C16.1526 10.5838 16.2 10.4693 16.2 10.35C16.2 10.2307 16.1526 10.1162 16.0682 10.0318C15.9838 9.94741 15.8693 9.9 15.75 9.9H2.25C2.13065 9.9 2.01619 9.94741 1.9318 10.0318C1.84741 10.1162 1.8 10.2307 1.8 10.35C1.8 10.4693 1.84741 10.5838 1.9318 10.6682C2.01619 10.7526 2.13065 10.8 2.25 10.8H2.7V13.5H1.35C1.23065 13.5 1.11619 13.4526 1.0318 13.3682C0.947411 13.2838 0.9 13.1693 0.9 13.05V4.95C0.9 4.83065 0.947411 4.71619 1.0318 4.6318C1.11619 4.54741 1.23065 4.5 1.35 4.5H16.65C16.7693 4.5 16.8838 4.54741 16.9682 4.6318C17.0526 4.71619 17.1 4.83065 17.1 4.95V13.05Z"
                                fill="black"
                              />
                              <path
                                d="M13.05 12.5999H4.95C4.83065 12.5999 4.71619 12.5525 4.6318 12.4681C4.54741 12.3837 4.5 12.2692 4.5 12.1499C4.5 12.0306 4.54741 11.9161 4.6318 11.8317C4.71619 11.7473 4.83065 11.6999 4.95 11.6999H13.05C13.1693 11.6999 13.2838 11.7473 13.3682 11.8317C13.4526 11.9161 13.5 12.0306 13.5 12.1499C13.5 12.2692 13.4526 12.3837 13.3682 12.4681C13.2838 12.5525 13.1693 12.5999 13.05 12.5999ZM13.05 14.3999H4.95C4.83065 14.3999 4.71619 14.3525 4.6318 14.2681C4.54741 14.1837 4.5 14.0692 4.5 13.9499C4.5 13.8306 4.54741 13.7161 4.6318 13.6317C4.71619 13.5473 4.83065 13.4999 4.95 13.4999H13.05C13.1693 13.4999 13.2838 13.5473 13.3682 13.6317C13.4526 13.7161 13.5 13.8306 13.5 13.9499C13.5 14.0692 13.4526 14.1837 13.3682 14.2681C13.2838 14.3525 13.1693 14.3999 13.05 14.3999ZM13.05 16.1999H4.95C4.83065 16.1999 4.71619 16.1525 4.6318 16.0681C4.54741 15.9837 4.5 15.8692 4.5 15.7499C4.5 15.6306 4.54741 15.5161 4.6318 15.4317C4.71619 15.3473 4.83065 15.2999 4.95 15.2999H13.05C13.1693 15.2999 13.2838 15.3473 13.3682 15.4317C13.4526 15.5161 13.5 15.6306 13.5 15.7499C13.5 15.8692 13.4526 15.9837 13.3682 16.0681C13.2838 16.1525 13.1693 16.1999 13.05 16.1999ZM14.85 8.0999C14.1057 8.0999 13.5 7.4942 13.5 6.7499C13.5 6.0056 14.1057 5.3999 14.85 5.3999C15.5943 5.3999 16.2 6.0056 16.2 6.7499C16.2 7.4942 15.5943 8.0999 14.85 8.0999ZM14.85 6.2999C14.7909 6.2999 14.7324 6.31154 14.6778 6.33416C14.6232 6.35677 14.5736 6.38992 14.5318 6.4317C14.49 6.47349 14.4569 6.5231 14.4343 6.57769C14.4116 6.63229 14.4 6.69081 14.4 6.7499C14.4 6.809 14.4116 6.86751 14.4343 6.92211C14.4569 6.97671 14.49 7.02631 14.5318 7.0681C14.5736 7.10989 14.6232 7.14303 14.6778 7.16565C14.7324 7.18826 14.7909 7.1999 14.85 7.1999C14.9693 7.1999 15.0838 7.15249 15.1682 7.0681C15.2526 6.98371 15.3 6.86925 15.3 6.7499C15.3 6.63055 15.2526 6.5161 15.1682 6.4317C15.0838 6.34731 14.9693 6.2999 14.85 6.2999Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_916_3405">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Print
                        </div>
                      </div>
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.48 3.6001H2.52C2.23727 3.60004 1.96579 3.71086 1.76386 3.90875C1.56193 4.10664 1.44566 4.37582 1.44 4.6585V13.3417C1.44025 13.628 1.55421 13.9026 1.7568 14.1049C1.95379 14.2952 2.21729 14.4011 2.4912 14.4001H15.4512C15.7376 14.4001 16.0123 14.2863 16.2149 14.0838C16.4174 13.8812 16.5312 13.6065 16.5312 13.3201V4.6801C16.5313 4.39858 16.4215 4.12816 16.2251 3.92643C16.0288 3.7247 15.7614 3.6076 15.48 3.6001ZM15.48 13.6801H2.52C2.4251 13.6783 2.3346 13.6397 2.26748 13.5726C2.20037 13.5055 2.16185 13.415 2.16 13.3201V5.9977L8.4672 9.6337C8.62984 9.73293 8.81668 9.78543 9.0072 9.78543C9.19773 9.78543 9.38456 9.73293 9.5472 9.6337L15.84 5.9977V13.3417C15.8345 13.4334 15.7941 13.5195 15.7272 13.5824C15.6603 13.6453 15.5719 13.6803 15.48 13.6801ZM15.84 5.1697L9.18 9.0145C9.12528 9.0461 9.0632 9.06273 9 9.06273C8.93681 9.06273 8.87473 9.0461 8.82 9.0145L2.16 5.1697V4.6585C2.16551 4.56681 2.20586 4.4807 2.27279 4.41779C2.33971 4.35488 2.42815 4.31993 2.52 4.3201H15.48C15.5755 4.3201 15.667 4.35803 15.7346 4.42554C15.8021 4.49305 15.84 4.58462 15.84 4.6801V5.1481V5.1697Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Email voice
                        </div>
                      </div>
                    </div>
                    <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                      <div className="w-[18px] h-[18px] relative">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9688 5.0625H4.16251L6.01876 3.20625C6.24376 2.98125 6.24376 2.64375 6.01876 2.41875C5.79376 2.19375 5.45626 2.19375 5.23126 2.41875L2.41876 5.23125C2.36251 5.2875 2.30626 5.34375 2.30626 5.4C2.25001 5.56875 2.25001 5.68125 2.30626 5.85C2.36251 5.90625 2.36251 5.9625 2.41876 6.01875L5.23126 8.83125C5.34376 8.94375 5.45626 9 5.62501 9C5.79376 9 5.90626 8.94375 6.01876 8.83125C6.24376 8.60625 6.24376 8.26875 6.01876 8.04375L4.16251 6.1875H10.9688C12.9938 6.1875 14.625 7.81875 14.625 9.84375C14.625 11.8687 12.9938 13.5 10.9688 13.5H4.44376C4.10626 13.5 3.88126 13.725 3.88126 14.0625C3.88126 14.4 4.10626 14.625 4.44376 14.625H10.9688C13.6125 14.625 15.75 12.4875 15.75 9.84375C15.75 7.2 13.6125 5.0625 10.9688 5.0625Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                        Refund
                      </div>
                    </div>
                  </div>
                </div>
                {/* mid */}
                <div className="w-[100%] h-[530px] overflow-y-auto scrollbar-thin">
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal font-['Inter']">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                </div>
                {/* bottom */}
                <div className="w-[420px] h-[141px] flex-col gap-2.5 mt-[10px]  float-right mr-4 inline-flex">
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        Subtotal
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        125.000.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        tax
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        5.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                      Discount
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        -10.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />
                  
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-black text-sm font-normal font-['Inter']">
                      Total
                      </div>
                      <div className="text-black text-sm font-bold font-['Inter']">
                      124.985.000đ
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
       </div>)
        }
        {activeItem === 3 &&(
        <div  className="w-[100%] pt-[70px] h-screen ml-[1%] flex-grow">
              <div className="w-[100%] h-[920px] bg-white flex-grow border rounded-sm flex-1">
                {/* top */}
                <div className="w-[100%] h-[209px] p-5 bg-slate-200 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[100%] justify-between items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        #32098532792
                      </div>
                      <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          21/11/2017, 15:30
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Completed
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          Sale Rep: Samwell
                        </div>
                        <div className="justify-center items-start gap-2.5 inline-flex">
                          <div className="text-neutral-600 text-sm font-normal ">
                            Note: John is my friend, He is not a bastard.
                          </div>
                          <div className="w-5 h-5 relative">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9429 3.22367C16.4117 3.6925 16.6751 4.32836 16.6751 4.99137C16.6751 5.65439 16.4117 6.29025 15.9429 6.75908L6.04794 16.6541C5.96975 16.7321 5.8638 16.7758 5.75336 16.7758H3.22378C3.00276 16.7758 2.7908 16.688 2.63452 16.5317C2.47824 16.3754 2.39044 16.1634 2.39044 15.9424V13.4132C2.39034 13.3585 2.40104 13.3043 2.42192 13.2536C2.44279 13.203 2.47344 13.157 2.51211 13.1182L12.4084 3.22367C12.8772 2.75499 13.5129 2.4917 14.1759 2.4917C14.8388 2.4917 15.4745 2.75499 15.9434 3.22367H15.9429ZM15.0596 4.107C14.8341 3.88155 14.531 3.75079 14.2122 3.7415C13.8935 3.7322 13.5833 3.84507 13.345 4.057L13.2913 4.107L3.68919 13.7095C3.67372 13.725 3.66145 13.7434 3.65309 13.7636C3.64472 13.7838 3.64043 13.8055 3.64044 13.8274V15.3599C3.64044 15.452 3.71503 15.5266 3.80711 15.5266H5.33878C5.3607 15.5265 5.3824 15.5222 5.40263 15.5137C5.42287 15.5053 5.44124 15.493 5.45669 15.4774L15.0592 5.87575C15.2847 5.65031 15.4155 5.3472 15.4249 5.02847C15.4343 4.70974 15.3215 4.39947 15.1096 4.16117L15.0596 4.10783V4.107Z" fill="black"/>
                            <path d="M11.5238 4.10742L15.0592 7.64284L14.1754 8.52659L10.64 4.99117L11.5238 4.10742Z" fill="black"/>
                            <path d="M9.74998 15.5415H16.5C16.6111 15.5415 16.6666 15.5971 16.6666 15.7082V16.6248C16.6666 16.7359 16.6111 16.7915 16.5 16.7915H9.74998C9.63887 16.7915 9.58331 16.7359 9.58331 16.6248V15.7082C9.58331 15.5971 9.63887 15.5415 9.74998 15.5415Z" fill="black"/>
                            <path d="M13.0834 13.0415H16.5C16.6111 13.0415 16.6667 13.0971 16.6667 13.2082V14.1248C16.6667 14.2359 16.6111 14.2915 16.5 14.2915H13.0834C12.9722 14.2915 12.9167 14.2359 12.9167 14.1248V13.2082C12.9167 13.0971 12.9722 13.0415 13.0834 13.0415Z" fill="black"/>
                            </svg>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-end gap-2.5 inline-flex  cursor-pointer">
                      <div className="text-black text-xl font-medium font-['Inter']">
                        John Doe
                      </div>
                      <div className="flex-col justify-start items-end gap-[5px] flex">
                        <div className="text-neutral-600 text-sm font-normal ">
                          Johndoe@mail.com
                        </div>
                        <div className="text-neutral-600 text-sm font-normal ">
                          +840228374912
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] justify-between items-start inline-flex cursor-pointer">
                    <div className="justify-start items-start gap-5 flex">
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_916_3405)">
                              <path
                                d="M16.65 3.6H15.3V1.35C15.3 0.6057 14.6943 0 13.95 0H4.05C3.3057 0 2.7 0.6057 2.7 1.35V3.6H1.35C0.6057 3.6 0 4.2057 0 4.95V13.05C0 13.7943 0.6057 14.4 1.35 14.4H2.7V16.65C2.7 17.3943 3.3057 18 4.05 18H13.95C14.6943 18 15.3 17.3943 15.3 16.65V14.4H16.65C17.3943 14.4 18 13.7943 18 13.05V4.95C18 4.2057 17.3943 3.6 16.65 3.6ZM3.6 1.35C3.6 1.23065 3.64741 1.11619 3.7318 1.0318C3.81619 0.947411 3.93065 0.9 4.05 0.9H13.95C14.0693 0.9 14.1838 0.947411 14.2682 1.0318C14.3526 1.11619 14.4 1.23065 14.4 1.35V3.6H3.6V1.35ZM13.95 17.1H4.05C3.93065 17.1 3.81619 17.0526 3.7318 16.9682C3.64741 16.8838 3.6 16.7693 3.6 16.65V10.8H14.4V16.65C14.4 16.7693 14.3526 16.8838 14.2682 16.9682C14.1838 17.0526 14.0693 17.1 13.95 17.1ZM17.1 13.05C17.1 13.1693 17.0526 13.2838 16.9682 13.3682C16.8838 13.4526 16.7693 13.5 16.65 13.5H15.3V10.8H15.75C15.8693 10.8 15.9838 10.7526 16.0682 10.6682C16.1526 10.5838 16.2 10.4693 16.2 10.35C16.2 10.2307 16.1526 10.1162 16.0682 10.0318C15.9838 9.94741 15.8693 9.9 15.75 9.9H2.25C2.13065 9.9 2.01619 9.94741 1.9318 10.0318C1.84741 10.1162 1.8 10.2307 1.8 10.35C1.8 10.4693 1.84741 10.5838 1.9318 10.6682C2.01619 10.7526 2.13065 10.8 2.25 10.8H2.7V13.5H1.35C1.23065 13.5 1.11619 13.4526 1.0318 13.3682C0.947411 13.2838 0.9 13.1693 0.9 13.05V4.95C0.9 4.83065 0.947411 4.71619 1.0318 4.6318C1.11619 4.54741 1.23065 4.5 1.35 4.5H16.65C16.7693 4.5 16.8838 4.54741 16.9682 4.6318C17.0526 4.71619 17.1 4.83065 17.1 4.95V13.05Z"
                                fill="black"
                              />
                              <path
                                d="M13.05 12.5999H4.95C4.83065 12.5999 4.71619 12.5525 4.6318 12.4681C4.54741 12.3837 4.5 12.2692 4.5 12.1499C4.5 12.0306 4.54741 11.9161 4.6318 11.8317C4.71619 11.7473 4.83065 11.6999 4.95 11.6999H13.05C13.1693 11.6999 13.2838 11.7473 13.3682 11.8317C13.4526 11.9161 13.5 12.0306 13.5 12.1499C13.5 12.2692 13.4526 12.3837 13.3682 12.4681C13.2838 12.5525 13.1693 12.5999 13.05 12.5999ZM13.05 14.3999H4.95C4.83065 14.3999 4.71619 14.3525 4.6318 14.2681C4.54741 14.1837 4.5 14.0692 4.5 13.9499C4.5 13.8306 4.54741 13.7161 4.6318 13.6317C4.71619 13.5473 4.83065 13.4999 4.95 13.4999H13.05C13.1693 13.4999 13.2838 13.5473 13.3682 13.6317C13.4526 13.7161 13.5 13.8306 13.5 13.9499C13.5 14.0692 13.4526 14.1837 13.3682 14.2681C13.2838 14.3525 13.1693 14.3999 13.05 14.3999ZM13.05 16.1999H4.95C4.83065 16.1999 4.71619 16.1525 4.6318 16.0681C4.54741 15.9837 4.5 15.8692 4.5 15.7499C4.5 15.6306 4.54741 15.5161 4.6318 15.4317C4.71619 15.3473 4.83065 15.2999 4.95 15.2999H13.05C13.1693 15.2999 13.2838 15.3473 13.3682 15.4317C13.4526 15.5161 13.5 15.6306 13.5 15.7499C13.5 15.8692 13.4526 15.9837 13.3682 16.0681C13.2838 16.1525 13.1693 16.1999 13.05 16.1999ZM14.85 8.0999C14.1057 8.0999 13.5 7.4942 13.5 6.7499C13.5 6.0056 14.1057 5.3999 14.85 5.3999C15.5943 5.3999 16.2 6.0056 16.2 6.7499C16.2 7.4942 15.5943 8.0999 14.85 8.0999ZM14.85 6.2999C14.7909 6.2999 14.7324 6.31154 14.6778 6.33416C14.6232 6.35677 14.5736 6.38992 14.5318 6.4317C14.49 6.47349 14.4569 6.5231 14.4343 6.57769C14.4116 6.63229 14.4 6.69081 14.4 6.7499C14.4 6.809 14.4116 6.86751 14.4343 6.92211C14.4569 6.97671 14.49 7.02631 14.5318 7.0681C14.5736 7.10989 14.6232 7.14303 14.6778 7.16565C14.7324 7.18826 14.7909 7.1999 14.85 7.1999C14.9693 7.1999 15.0838 7.15249 15.1682 7.0681C15.2526 6.98371 15.3 6.86925 15.3 6.7499C15.3 6.63055 15.2526 6.5161 15.1682 6.4317C15.0838 6.34731 14.9693 6.2999 14.85 6.2999Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_916_3405">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Print
                        </div>
                      </div>
                      <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                        <div className="w-[18px] h-[18px] relative">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.48 3.6001H2.52C2.23727 3.60004 1.96579 3.71086 1.76386 3.90875C1.56193 4.10664 1.44566 4.37582 1.44 4.6585V13.3417C1.44025 13.628 1.55421 13.9026 1.7568 14.1049C1.95379 14.2952 2.21729 14.4011 2.4912 14.4001H15.4512C15.7376 14.4001 16.0123 14.2863 16.2149 14.0838C16.4174 13.8812 16.5312 13.6065 16.5312 13.3201V4.6801C16.5313 4.39858 16.4215 4.12816 16.2251 3.92643C16.0288 3.7247 15.7614 3.6076 15.48 3.6001ZM15.48 13.6801H2.52C2.4251 13.6783 2.3346 13.6397 2.26748 13.5726C2.20037 13.5055 2.16185 13.415 2.16 13.3201V5.9977L8.4672 9.6337C8.62984 9.73293 8.81668 9.78543 9.0072 9.78543C9.19773 9.78543 9.38456 9.73293 9.5472 9.6337L15.84 5.9977V13.3417C15.8345 13.4334 15.7941 13.5195 15.7272 13.5824C15.6603 13.6453 15.5719 13.6803 15.48 13.6801ZM15.84 5.1697L9.18 9.0145C9.12528 9.0461 9.0632 9.06273 9 9.06273C8.93681 9.06273 8.87473 9.0461 8.82 9.0145L2.16 5.1697V4.6585C2.16551 4.56681 2.20586 4.4807 2.27279 4.41779C2.33971 4.35488 2.42815 4.31993 2.52 4.3201H15.48C15.5755 4.3201 15.667 4.35803 15.7346 4.42554C15.8021 4.49305 15.84 4.58462 15.84 4.6801V5.1481V5.1697Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                          Email voice
                        </div>
                      </div>
                    </div>
                    <div className="px-2.5 py-2 bg-white rounded justify-start items-center gap-[5px] flex">
                      <div className="w-[18px] h-[18px] relative">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9688 5.0625H4.16251L6.01876 3.20625C6.24376 2.98125 6.24376 2.64375 6.01876 2.41875C5.79376 2.19375 5.45626 2.19375 5.23126 2.41875L2.41876 5.23125C2.36251 5.2875 2.30626 5.34375 2.30626 5.4C2.25001 5.56875 2.25001 5.68125 2.30626 5.85C2.36251 5.90625 2.36251 5.9625 2.41876 6.01875L5.23126 8.83125C5.34376 8.94375 5.45626 9 5.62501 9C5.79376 9 5.90626 8.94375 6.01876 8.83125C6.24376 8.60625 6.24376 8.26875 6.01876 8.04375L4.16251 6.1875H10.9688C12.9938 6.1875 14.625 7.81875 14.625 9.84375C14.625 11.8687 12.9938 13.5 10.9688 13.5H4.44376C4.10626 13.5 3.88126 13.725 3.88126 14.0625C3.88126 14.4 4.10626 14.625 4.44376 14.625H10.9688C13.6125 14.625 15.75 12.4875 15.75 9.84375C15.75 7.2 13.6125 5.0625 10.9688 5.0625Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="text-neutral-800 text-opacity-80 text-xs font-normal ">
                        Refund
                      </div>
                    </div>
                  </div>
                </div>
                {/* mid */}
                <div className="w-[100%] h-[530px] overflow-y-auto scrollbar-thin">
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal font-['Inter']">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                  <div className="w-[99%] h-[60px] bg-white justify-start items-start gap-2.5 inline-flex ml-5 mt-6">
                    <img
                      className="w-[60px] h-[60px]"
                      src="https://via.placeholder.com/60x60"
                    />
                    <div className="grow shrink basis-0 self-stretch pt-[5px] pb-2 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                          <div className="w-[250px] text-black text-sm font-bold font-['Inter']">
                            Coffee
                          </div>
                          <div className="w-[250px] opacity-50 text-black text-xs font-normal ">
                            M, Green
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="w-[120px] text-black text-sm font-normal ">
                            GST 15%
                          </div>
                          <div className="w-[120px] opacity-50 text-black text-xs font-normal ">
                            GST 15%
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                          <div className="self-stretch text-black text-sm font-normal ">
                            25.000.000đ x 1
                          </div>
                          <div className="self-stretch opacity-50 text-black text-xs font-normal ">
                            5%
                          </div>
                        </div>
                        <div className="text-black text-sm font-semibold font-['Inter'] pr-3">
                          25.000.000 đ
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[15px]" />
                </div>
                {/* bottom */}
                <div className="w-[420px] h-[141px] flex-col gap-2.5 mt-[10px]  float-right mr-4 inline-flex">
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        Subtotal
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        125.000.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                        tax
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        5.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />

                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-neutral-600 text-sm font-normal ">
                      Discount
                      </div>
                      <div className="text-neutral-600 text-sm font-normal ">
                        -10.000đ
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-zinc-100" />
                  
                  <div className="h-[17px] flex-col justify-end items-start gap-[162px] flex">
                    <div className="self-stretch justify-between items-start flex">
                      <div className="text-black text-sm font-normal font-['Inter']">
                      Total
                      </div>
                      <div className="text-black text-sm font-bold font-['Inter']">
                      124.985.000đ
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
       </div>)
        }

    </nav>
  );
}
