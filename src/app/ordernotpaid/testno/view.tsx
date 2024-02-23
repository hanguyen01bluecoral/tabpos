"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState, useEffect } from 'react';

interface DetailViewProps {
  selectedItem: { 
        title: string;
        date: string;
        sate: string; 
        coin: string;
        name:string;
} | null;
  onSave: (editedItem: 
    { 
        title: string;
        date: string;
        sate: string; 
        coin: string;
        name:string;
    }) => void;
}

//isTrueLean = 

const DetailView1: React.FC<DetailViewProps> = ({ selectedItem, onSave }) => {
  const [editedItem, setEditedItem] = useState<{ 
        title: string;
        date: string;
        sate: string; 
        coin: string;
        name:string;
    } | null>(selectedItem);

  useEffect(() => {
    setEditedItem(selectedItem);
  }, [selectedItem]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevItem: any) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (editedItem && editedItem.title && editedItem.date && editedItem.sate
        && editedItem.coin  && editedItem.name) {
      onSave(editedItem as { 
        title: string;
        date: string;
        sate: string; 
        coin: string;
        name:string; 
        });
    }
  };

  return (
    <div className='w-full'>
      {selectedItem ? (
        <div className="w-full  h-screen ml-4 flex-grow mt-[105px]"> 
        <div className="w-[100%] h-[100%] bg-white flex-grow border rounded-sm flex-1">
            <div className='h-[calc(100%-80px)] border-b'>
                   {/* top */}
              <div className='w-full mt-6 ml-5 flex items-center '>
                <svg className='mr-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.63786 4.36135C5.70473 4.30549 5.78217 4.26369 5.86555 4.23844C5.94894 4.21319 6.03656 4.20501 6.12318 4.21439C6.2098 4.22377 6.29363 4.25051 6.36968 4.29303C6.44573 4.33554 6.51242 4.39296 6.56578 4.46183C6.61914 4.53071 6.65806 4.60963 6.68022 4.69389C6.70239 4.77815 6.70733 4.86601 6.69477 4.95223C6.68221 5.03844 6.65239 5.12124 6.60711 5.19567C6.56182 5.2701 6.50199 5.33464 6.4312 5.38542C5.46837 6.12986 4.7625 7.15681 4.41244 8.32244C4.06239 9.48808 4.08569 10.734 4.47908 11.8857C4.87247 13.0375 5.61624 14.0373 6.60623 14.7452C7.59622 15.4532 8.78284 15.8337 9.9999 15.8336C10.1718 15.8336 10.3367 15.9019 10.4582 16.0234C10.5798 16.145 10.648 16.3098 10.648 16.4817C10.648 16.6536 10.5798 16.8185 10.4582 16.94C10.3367 17.0616 10.1718 17.1299 9.9999 17.1299C8.51272 17.1297 7.06282 16.6645 5.85317 15.7993C4.64353 14.9342 3.73471 13.7124 3.25393 12.3051C2.77316 10.8978 2.7445 9.37534 3.17197 7.95092C3.59944 6.5265 4.46164 5.2714 5.63786 4.36135ZM14.2712 15.7091C14.2031 15.7602 14.1256 15.7974 14.0432 15.8185C13.9607 15.8396 13.8749 15.8443 13.7906 15.8322C13.7064 15.8202 13.6253 15.7917 13.5521 15.7483C13.4788 15.705 13.4149 15.6476 13.3638 15.5795C13.3127 15.5114 13.2756 15.4339 13.2544 15.3515C13.2333 15.269 13.2286 15.1832 13.2407 15.0989C13.2527 15.0147 13.2812 14.9336 13.3246 14.8604C13.368 14.7871 13.4253 14.7232 13.4934 14.6721C14.4746 13.9385 15.1999 12.9146 15.5664 11.7456C15.933 10.5767 15.9222 9.32196 15.5356 8.15947C15.149 6.99697 14.4063 5.9857 13.4126 5.26906C12.419 4.55242 11.225 4.16681 9.9999 4.1669C9.91478 4.16682 9.83052 4.14997 9.75191 4.11732C9.67331 4.08467 9.60191 4.03685 9.54178 3.97661C9.48165 3.91636 9.43398 3.84486 9.40149 3.76619C9.36899 3.68752 9.35231 3.60322 9.3524 3.51811C9.35249 3.43299 9.36933 3.34872 9.40199 3.27012C9.43464 3.19152 9.48245 3.12011 9.5427 3.05999C9.60294 2.99986 9.67444 2.95219 9.75311 2.91969C9.83178 2.8872 9.91608 2.87052 10.0012 2.87061C11.4984 2.87051 12.9576 3.34173 14.1719 4.21745C15.3862 5.09317 16.2941 6.32894 16.7667 7.74954C17.2393 9.17015 17.2527 10.7035 16.8051 12.1321C16.3574 13.5608 15.4713 14.8123 14.2725 15.7091H14.2712Z" fill="black"/>
                  <path d="M7.21809 3.70781C7.33476 3.82448 7.40735 3.98781 7.40735 4.1667V8.05559C7.40735 8.22749 7.33907 8.39235 7.21752 8.5139C7.09596 8.63545 6.9311 8.70374 6.7592 8.70374C6.58731 8.70374 6.42245 8.63545 6.3009 8.5139C6.17934 8.39235 6.11106 8.22749 6.11106 8.05559V4.81485H2.87032C2.7852 4.81485 2.70092 4.79809 2.62228 4.76551C2.54364 4.73294 2.47219 4.6852 2.41201 4.62501C2.35182 4.56483 2.30408 4.49338 2.27151 4.41474C2.23893 4.3361 2.22217 4.25182 2.22217 4.1667C2.22217 4.08159 2.23893 3.9973 2.27151 3.91867C2.30408 3.84003 2.35182 3.76858 2.41201 3.70839C2.47219 3.64821 2.54364 3.60046 2.62228 3.56789C2.70092 3.53532 2.7852 3.51855 2.87032 3.51855H6.7592C6.93809 3.51855 7.10013 3.59115 7.21809 3.70781ZM12.7818 16.2923C12.7215 16.232 12.6738 16.1605 12.6413 16.0817C12.6088 16.003 12.5922 15.9186 12.5925 15.8334V11.9445C12.5925 11.7726 12.6608 11.6077 12.7824 11.4862C12.9039 11.3646 13.0688 11.2963 13.2407 11.2963C13.4126 11.2963 13.5774 11.3646 13.699 11.4862C13.8205 11.6077 13.8888 11.7726 13.8888 11.9445V15.1852H17.1296C17.3015 15.1852 17.4663 15.2535 17.5879 15.3751C17.7094 15.4966 17.7777 15.6615 17.7777 15.8334C17.7777 16.0053 17.7094 16.1701 17.5879 16.2917C17.4663 16.4132 17.3015 16.4815 17.1296 16.4815H13.2407C13.1555 16.4818 13.0711 16.4652 12.9923 16.4328C12.9136 16.4003 12.842 16.3525 12.7818 16.2923Z" fill="black"/>
                </svg>
                <p className='text-base font-semibold '>Transaction history</p>
              </div>
              {/* mid */}
              <div className="w-[100%] h-[100%] overflow-y-auto scrollbar-thin p-5">
                <div className='w-full h-[80px] bg-[#E7F3DA] flex justify-between p-2'>
                    <div className=''>
                        <div className='flex'>
                          <p className='text-[16px] font-[600]'>{editedItem?.title}</p>
                          <Button className='w-[55px] h-[24px] ml-1 rounded-sm'>Open</Button>
                        </div>
                        <div>
                          <p className=' text-xs font-normal text-[#555]'>Opening fload</p>
                          <p className='text-xs font-bold text-[#555] mt-[3px]'>$400.00</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-xs text-[#71B02F] font-normal'>Currently active</p>
                    </div>
                </div>
                
                <div className="w-[100%] h-px bg-zinc-100  mt-[10px]" />

                <div className='w-full h-[80px] flex justify-between p-2 mt-2'>
                    <div className=''>
                        <div className='flex'>
                          <p className='text-[14px] font-[600] text-[#71B02F]'>Cash sale</p>
                        </div>
                        <div>
                          <p className=' text-xs font-normal text-[#555]'>+ $11.00</p>
                          <p className='text-xs font-bold text-[#555] mt-[3px]'>current balance: $1,345.00</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-xs text-[#222] opacity-50 font-normal'>4:50 AM</p>
                    </div>
                </div>
                <div className="w-[100%] h-px bg-zinc-100" />

                <div className='w-full h-[80px] flex justify-between p-2 mt-2'>
                    <div className=''>
                        <div className='flex'>
                          <p className='text-[14px] font-[600] text-[#71B02F]'>Cash sale</p>
                        </div>
                        <div>
                          <p className=' text-xs font-normal text-[#555]'>+ $11.00</p>
                          <p className='text-xs font-bold text-[#555] mt-[3px]'>current balance: $1,345.00</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-xs text-[#222] opacity-50 font-normal'>4:50 AM</p>
                    </div>
                </div>
                <div className="w-[100%] h-px bg-zinc-100" />

                <div className='w-full h-[80px] flex justify-between p-2 mt-2'>
                    <div className=''>
                        <div className='flex'>
                          <p className='text-[14px] font-[600] text-[#71B02F]'>Cash sale</p>
                        </div>
                        <div>
                          <p className=' text-xs font-normal text-[#555]'>+ $11.00</p>
                          <p className='text-xs font-bold text-[#555] mt-[3px]'>current balance: $1,345.00</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-xs text-[#222] opacity-50 font-normal'>4:50 AM</p>
                    </div>
                </div>
                <div className="w-[100%] h-px bg-zinc-100" />

                <div className='w-full h-[80px] flex justify-between p-2 mt-2'>
                    <div className=''>
                        <div className='flex'>
                          <p className='text-[14px] font-[600] text-[#71B02F]'>Cash sale</p>
                        </div>
                        <div>
                          <p className=' text-xs font-normal text-[#555]'>+ $11.00</p>
                          <p className='text-xs font-bold text-[#555] mt-[3px]'>current balance: $1,345.00</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-xs text-[#222] opacity-50 font-normal'>4:50 AM</p>
                    </div>
                </div>
                <div className="w-[100%] h-px bg-zinc-100" />
                
              </div>
          </div>

          <div className='flex justify-between p-2'>
            <Button className='h-[40px] w-[49%] rounded-sm'>Remove cash</Button>
            <Button className='h-[40px] w-[49%] rounded-sm'>Add cash</Button>
          </div>

          {/* bottom */}
          {/* <div className="w-[420px] h-[141px] flex-col gap-2.5 mt-[10px]  float-right mr-4 inline-flex">
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
            
          </div> */}
        </div>
  </div>
      ) : (
        <p className='w-full ml-2'></p>
      )}
    </div>
  );
};

export default DetailView1;

