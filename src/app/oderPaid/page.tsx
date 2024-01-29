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
import Image from "next/image";


export default function OderPaid() {
  
  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (itemId: any | React.SetStateAction<null>) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  // any la chap nhan moi kieu du lieu
  
  

  return (
    <nav className="w-[100%] h-screen flex  bg-[#F7F9FB]">
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
                <Command className="rounded-lg relative">
                  <CommandInput placeholder="Search Products..." />
                </Command>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[15px]">
          <p className="text-sm font-bold ">Date: start - end</p>
        </div>

        <div className="w-[370px] h-[420px] mt-[15px]  bg-white rounded border border-zinc-100 flex-col justify-start items-start gap-px inline-flex">
          
          <div className={`w-[370px] p-2.5 border-b justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${activeItem === 2 ? 'text-[#71B02F] bg-lime-50' : ''}`} onClick={() => handleItemClick(2)}>
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
          <div className={`w-[370px] p-2.5 border-b justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${activeItem === 1 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(1)}>
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
          <div className={`w-[370px] p-2.5 border-b justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${activeItem === 3 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(3)}>
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
          <div className={`w-[370px] p-2.5 border-b justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${activeItem === 4 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(4)}>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <b className="text-sm font-['Inter']">#32098532791</b>
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
          <div className={`w-[370px] p-2.5 border-b justify-between items-start inline-flex hover:bg-lime-50 hover:text-[#71B02F] ${activeItem === 5 ? 'bg-lime-50 text-[#71B02F]' : ''}`} onClick={() => handleItemClick(5)}>
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
                        #32098532791
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
