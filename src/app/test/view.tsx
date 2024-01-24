"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState, useEffect } from 'react';

interface DetailViewProps {
  selectedItem: { 
    title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string;
} | null;
  onSave: (editedItem: 
    { 
        title: string;
        firtname: string;
        lastname: string;
        email: string;
        phone: string;
        address: string;
        country: string;
        sate: string;
        city: string;
        zipcode: string;
    }) => void;
}

const DetailView: React.FC<DetailViewProps> = ({ selectedItem, onSave }) => {
  const [editedItem, setEditedItem] = useState<{ 
    title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string;
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
    if (editedItem && editedItem.title && editedItem.firtname && editedItem.firtname
        && editedItem.lastname  && editedItem.email  && editedItem.phone  && editedItem.address
        && editedItem.country  && editedItem.sate  && editedItem.city  && editedItem.zipcode) {
      onSave(editedItem as { 
            title: string;
            firtname: string;
            lastname: string;
            email: string;
            phone: string;
            address: string;
            country: string;
            sate: string;
            city: string;
            zipcode: string; 
        });
    }
  };

  return (
    <div>
      {selectedItem ? (
        <div className='w-[550px] h-full border pb-5 m-[20px] -mt-[70px] rounded-md bg-white'>
            <div className='w-full h-[50px] bg-black rounded-t-md px-4 py-4'>
                <p className='text-white text-base font-bold leading-normal'>{editedItem?.title  || ''}</p>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>First Name</p>
                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='firtname' value={editedItem?.firtname?.toString() || ''} onChange={handleInputChange}/>
                </div>
                <div className='mr-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Last Name</p>
                    <Input className='mt-2 border-none bg-[#F7F9FB]'  type='text' name='lastname' value={editedItem?.lastname?.toString() || ''}  onChange={handleInputChange}/>
                </div>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Email</p>
                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='email' value={editedItem?.email?.toString() || ''}  onChange={handleInputChange}/>
                </div>
                <div className='mr-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Phone</p>
                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='phone' value={editedItem?.phone?.toString() || ''}  onChange={handleInputChange}/>
                </div>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 mr-4 w-[100%]'>
                    <p className='text-sm font-bold leading-normal'>Adress1</p> 
                    <Input className='mt-2 border-none bg-[#F7F9FB]' type='text' name='address' value={editedItem?.address?.toString() || ''}  onChange={handleInputChange}/>
                </div>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 mr-4 w-[100%]'>
                    <p className='text-sm font-bold leading-normal'>Adress2</p>
                    <Input className='mt-2 border-none bg-[#F7F9FB]'/>
                </div>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Coutry</p>
                    <Select>
                        <SelectTrigger className="w-[255px] h-[44px] outline-none border-none bg-white mt-2">
                            <SelectValue placeholder={editedItem?.country?.toString() || ''} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>{editedItem?.country?.toString() || ''}</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mr-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Sate</p>
                    <Select>
                        <SelectTrigger className="w-[255px] h-[44px] outline-none border-none bg-white mt-2">
                            <SelectValue placeholder={editedItem?.sate?.toString() || ''} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>{editedItem?.sate?.toString() || ''}</SelectLabel>
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
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>City</p>
                    <Select >
                        <SelectTrigger className="w-[255px] h-[44px] outline-none border-none bg-white mt-2">
                            <SelectValue placeholder={editedItem?.city?.toString() || ''}  onChange={handleInputChange}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>{editedItem?.city?.toString() || ''}</SelectLabel>
                            <SelectItem value="apple">Hà Nội</SelectItem>
                            <SelectItem value="banana">Đà Nẵng</SelectItem>
                            <SelectItem value="blueberry">Hồ Chí Minh</SelectItem>
                            <SelectItem value="grapes">Cần Thơ</SelectItem>
                            <SelectItem value="pineapple">Hải Phòng</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mr-4 w-[255px]'>
                    <p className='text-sm font-bold leading-normal'>Zip Code</p>
                    <Select>
                        <SelectTrigger className="w-[255px] h-[44px] outline-none border-none bg-white mt-2">
                            <SelectValue placeholder={editedItem?.zipcode?.toString() || ''} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>{editedItem?.zipcode?.toString() || ''}</SelectLabel>
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
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 mr-4 w-[100%]'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className='rounded-full'/>
                        <label
                            htmlFor="terms"
                            className="text-black font-normal leading-5 text-[14px]"
                        >
                            Use same info for shipping
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between mt-5'>
                <div className='ml-4 mr-4 w-[100%]'>
                    <Button className='w-full rounded-lg' onClick={handleSave}> SAVE</Button>
                </div>
            </div>
        </div>
      ) : (
        <p className='w-[540px] ml-2'></p>
      )}
    </div>
  );
};

export default DetailView;

