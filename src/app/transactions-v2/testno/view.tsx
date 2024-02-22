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
        <div className="w-full  h-screen flex-grow"> 
        <div className="w-[100%] h-[100%] bg-white flex-grow border rounded-sm flex-1">
          {/* top */}
          <div className='border-b h-[calc(100%-70px)]'>
            <div className="w-[100%] h-[149px] p-5 bg-[#E7F3DA] flex-col justify-start items-start gap-[15px] inline-flex">
              <div className="w-[100%] justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                  <div className="text-black text-xl font-medium font-['Inter']">
                  {editedItem?.title  || ''}
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-neutral-600 text-sm font-normal ">
                    {editedItem?.date  || ''}
                    </div>
                    <div className="text-neutral-600 text-sm font-normal ">
                    {editedItem?.sate  || ''}
                    </div>
                    <div className="text-neutral-600 text-sm font-normal ">
                      Sale Rep: Samwell
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-end gap-2.5 inline-flex  cursor-pointer">
                  <div className="text-black text-xl font-medium font-['Inter']">
                  Guest
                  </div>
                  <div className="flex-col justify-start items-end gap-[5px] flex">
                    <div className="text-neutral-600 text-sm font-normal ">
                    N/A
                    </div>
                    <div className="text-neutral-600 text-sm font-normal ">
                      N/A
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] h-[149px] p-5 border-b flex-col justify-start items-start gap-[15px] inline-flex">
              <div className="w-[100%] justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer">
                  <div className="text-black text-xl font-medium font-['Inter']">
                  {editedItem?.title  || ''}
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-neutral-600 text-sm font-normal ">
                    {editedItem?.date  || ''}
                    </div>
                    <div className="text-neutral-600 text-sm font-normal ">
                    {editedItem?.sate  || ''}
                    </div>
                    <div className="text-neutral-600 text-sm font-normal ">
                      Sale Rep: Samwell
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-end gap-2.5 inline-flex  cursor-pointer">
                  <div className="text-black text-xl font-medium ">
                  <Button className='w-[126px] h-[36px] rounded-sm bg-white text-[#71B02F] border-[#71B02F] border hover:bg-white'>Open customer</Button>
                  </div>
                </div>
              </div>
            </div>
            {/* mid */}
            <div className="w-[100%] h-[250px] overflow-y-auto scrollbar-thin">
              <div className="w-[98.4%] h-[60px] bg-white justify-between gap-2.5 inline-flex ml-5 mt-6">
              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='w-[60px] h-[60px] rounded-sm bg-slate-300'></div>
                    <div className='ml-2'>
                      <p className='text-[#222]  text-sm font-medium'>Coffe</p>
                      <p className='text-[#222] opacity-70 text-xs font-normal'>Size A, Black</p>
                      <p className='text-[#222] opacity-70 text-xs font-normal mt-[4px]'>SKU: 124243356</p>
                    </div>
                  </div>
                </div>
                <div className='mr-6 text-black text-xs font-medium '>
                Price:$3.99
                </div>
              </div>
              
              {/* <div className="w-[100%] h-px bg-zinc-100 ml-5 mt-[10px]" /> */}

              <div className="w-[98.4%] h-[60px] bg-white justify-between gap-2.5 inline-flex ml-5 mt-6">
              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='w-[60px] h-[60px] rounded-sm bg-slate-300'></div>
                    <div className='ml-2'>
                      <p className='text-[#222]  text-sm font-medium'>Coffe</p>
                      <p className='text-[#222] opacity-70 text-xs font-normal'>Size A, Black</p>
                      <p className='text-[#222] opacity-70 text-xs font-normal mt-[4px]'>SKU: 124243356</p>
                    </div>
                  </div>
                </div>
                <div className='mr-6 text-black text-xs font-medium'>
                Price:$3.99
                </div>
              </div>

              <div className="w-[100%] h-px bg-zinc-100 ml-[80px] mt-[10px]" />

              <div className='w-[100%] ml-[80px] mt-[10px] flex justify-between'>
                  <p className='text-[#222]  text-sm font-medium'>Product total</p>
                  <p className='text-[#222]  text-sm font-medium mr-[100px]'>$7.98</p>
              </div>

              <div className="w-[100%] h-px bg-zinc-200 mt-[10px]" />
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
          <div className='flex justify-between p-4'>
            <Button className='rounded-sm w-[28%]'>Refund sale</Button>
            <Button className='rounded-sm w-[28%]'>Receipt</Button>
            <Button className='rounded-sm w-[28%]'>Open sale</Button>
          </div>
        </div>
  </div>
      ) : (
        <p className='w-full ml-2'></p>
      )}
    </div>
  );
};

export default DetailView1;


