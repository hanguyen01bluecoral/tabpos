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

export default function Transactions() {
  return (
    <nav className="w-[100%] h-screen flex  bg-[#F7F9FB]">
      {/* khoi avata */}
      <div className="w-[5%] pt-[20px] pl-3 pr-4 h-screen flex flex-1 flex-col flex-shrink-0 flex-grow-0 justify-between bg-white">
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
            <Avatar className="text-center items-center w-[36px] h-[36px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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
                <div className="w-[130px] h-[45px] bg-white ml-6 px-[10px] py-[12px]">
                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="terms"
                        className="rounded-full border-none w-5 h-5 bg-[#D9D9D9]"
                    />
                    <label
                        htmlFor="terms"
                        className="text-black font-normal leading-5 text-[12px]"
                    >
                        Add Customer
                    </label>
                    </div>
                </div>
            </div>
            <div className="mt-[15px]">
                <DemoAddCustomes />
            </div>
        </div>
    </nav>
  );
}
