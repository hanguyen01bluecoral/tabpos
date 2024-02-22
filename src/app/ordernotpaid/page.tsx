"use client"

import { Command, CommandInput } from "@/components/ui/command";
import DemoOrderNotPaid from "./testno/page";
import React from "react";


export default function TestOderNotPaid() {
    return(
        <nav className="w-full h-screen  bg-[#F7F9FB]">
            <div className=" w-full h-screen ">
    
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