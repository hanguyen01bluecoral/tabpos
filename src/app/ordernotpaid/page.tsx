"use client"

import { Command, CommandInput } from "@/components/ui/command";
import DemoOrderNotPaid from "./testno/page";
import React from "react";


export default function TestOderNotPaid() {
    return(
        <nav className="w-full h-screen  bg-[#F7F9FB]">
            <div className=" pt-[20px] w-full h-screen ">
                <div className="ml-[20px]">
                    <p className="text-xl font-medium w-[370px]">Orders</p>
                </div>
                <div className=" mt-[15px] ml-[20px]">
                    <div className="w-[370px] h-[45px] flex ">
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
    
                <div className="mt-[15px] ml-[20px]">
                    <p className="text-sm font-bold ">Date: start - end</p>
                </div>
    
                <div className="w-[99%] ml-[16px]">
                    <DemoOrderNotPaid />
                </div>

                <div>
                </div>
            </div>
            {/* <div className="w-full ">
                    <DemoOrderNotPaid />
            </div> */}
      </nav>
    );
}