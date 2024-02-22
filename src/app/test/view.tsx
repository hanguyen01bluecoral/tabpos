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
    <div className=' h-screen flex-grow box-border -mt-[98px]'>
      {selectedItem ? (
        <div className='w-[390px] h-full border pb-5 m-[20px] -mt-[98px] rounded-md bg-white'>
            <div className='h-full'>
                <div className=' ml-4 mr-4 mt-4  bg-[#F7F9FB] rounded-t-md px-4 py-2'>
                <div className='flex justify-between'>
                        <div className='flex'>
                            <div className="w-8 h-8 rounded-full bg-slate-300 p-1 mt-1">
                                <svg
                                    className='items-center ml-[2px]' 
                                    width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="user 2">
                                    <path id="Vector" d="M10.7175 10.0833C9.77822 10.0833 8.87738 9.71019 8.21319 9.046C7.549 8.38181 7.17586 7.48098 7.17586 6.54167C7.17586 5.60236 7.549 4.70152 8.21319 4.03733C8.87738 3.37314 9.77822 3 10.7175 3C11.6568 3 12.5577 3.37314 13.2219 4.03733C13.8861 4.70152 14.2592 5.60236 14.2592 6.54167C14.2592 7.48098 13.8861 8.38181 13.2219 9.046C12.5577 9.71019 11.6568 10.0833 10.7175 10.0833ZM3.21753 17.1667V16.75C3.21753 15.2029 3.83211 13.7192 4.92607 12.6252C6.02004 11.5312 7.50377 10.9167 9.05086 10.9167H12.3842C13.9313 10.9167 15.415 11.5312 16.509 12.6252C17.6029 13.7192 18.2175 15.2029 18.2175 16.75V17.1667C18.2175 17.3877 18.1297 17.5996 17.9735 17.7559C17.8172 17.9122 17.6052 18 17.3842 18H4.05086C3.82985 18 3.61789 17.9122 3.46161 17.7559C3.30533 17.5996 3.21753 17.3877 3.21753 17.1667Z" fill="white"/>
                                    </g>
                                </svg>
                            </div>
                            <div className='ml-2'>
                                <p className='text-black text-base font-bold leading-normal'>{editedItem?.title  || ''}</p>
                                <p className='text-[#555] text-[12px] font-[400] leading-normal'>{editedItem?.email  || ''}</p>
                                <p className='text-[#555] text-[12px] font-[400] leading-normal'>{editedItem?.phone  || ''}</p>
                            </div>
                        </div>
                        <div className='w-[74px] h-[36px] px-3 py-2 rounded-sm text-sm text-[#71B02F] items-center font-[400] border border-[#71B02F] flex mt-1'>
                            <svg className='mr-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2759 2.5C14.2727 2.56082 15.2078 3.00343 15.8867 3.73583C16.3222 4.08124 16.6737 4.52091 16.9148 5.02178C17.1558 5.52264 17.2802 6.07165 17.2784 6.6275C17.1609 7.55188 16.7212 8.40523 16.0367 9.0375L9.20006 16.275C8.78697 16.6863 8.26372 16.9694 7.69339 17.09H7.68923L5.00589 17.5483C4.87516 17.5709 4.74273 17.5824 4.61006 17.5825C4.34301 17.5878 4.07789 17.5361 3.83244 17.4308C3.58698 17.3254 3.36684 17.1689 3.18673 16.9717C3.00104 16.756 2.8635 16.5032 2.78331 16.2302C2.70313 15.9572 2.68213 15.6701 2.72173 15.3883L3.03006 12.6867V12.675C3.12593 12.1062 3.37614 11.5747 3.75339 11.1383L10.5959 3.895C10.9205 3.48825 11.3266 3.15399 11.7882 2.91372C12.2498 2.67346 12.7565 2.53253 13.2759 2.5ZM7.47589 15.8583C7.77638 15.7858 8.05325 15.6375 8.28006 15.4275L8.28756 15.4192L15.1292 8.1775C15.608 7.75124 15.9265 7.17399 16.0317 6.54167C16.0165 6.17131 15.9188 5.80901 15.7458 5.48119C15.5728 5.15336 15.3289 4.86826 15.0317 4.64667C14.5794 4.13846 13.9528 3.81848 13.2759 3.75C12.9278 3.78627 12.5909 3.89377 12.2861 4.0658C11.9813 4.23783 11.7152 4.47073 11.5042 4.75L4.66423 11.995C4.4679 12.2395 4.33328 12.5276 4.27173 12.835L3.96256 15.5283C3.94424 15.6352 3.94857 15.7447 3.97527 15.8498C4.00197 15.9549 4.05045 16.0532 4.11756 16.1383C4.18084 16.2043 4.25759 16.2558 4.34257 16.2895C4.42755 16.3231 4.51878 16.3381 4.61006 16.3333C4.67181 16.333 4.73342 16.3274 4.79423 16.3167L7.47589 15.8583ZM14.4509 10.4492C14.4298 10.4502 14.4087 10.4502 14.3876 10.4492C13.1243 10.323 11.9386 9.78119 11.0163 8.90879C10.094 8.03638 9.48713 6.88263 9.29089 5.62833C9.26551 5.46457 9.3062 5.29742 9.40403 5.16365C9.50185 5.02988 9.6488 4.94044 9.81256 4.915C9.89371 4.90231 9.97657 4.90574 10.0564 4.9251C10.1362 4.94445 10.2114 4.97935 10.2778 5.0278C10.3441 5.07625 10.4002 5.1373 10.4429 5.20746C10.4857 5.27761 10.5141 5.3555 10.5267 5.43667C10.6818 6.41619 11.157 7.31673 11.8782 7.99748C12.5993 8.67823 13.5257 9.10082 14.5126 9.19917C14.6783 9.20734 14.834 9.28103 14.9455 9.40403C15.0569 9.52702 15.1149 9.68924 15.1067 9.855C15.0985 10.0208 15.0249 10.1765 14.9019 10.2879C14.7789 10.3993 14.6167 10.4573 14.4509 10.4492Z" fill="#71B02F"/>
                            </svg>

                            Edit
                        </div>
                </div>
                </div>
                <div className='mr-4 ml-4 border-b py-6'>
                <div className=' flex justify-around'>
                        <div className=' flex flex-col'>
                            <div className='text-base font-semibold textblack'>$1,700.00</div>
                            <div className='text-[12px] text-[#555] font-[400]'>Total spent</div>
                        </div>
                        <div className=' border border-[#EFEFEF]' />
                        <div className='flex flex-col'>
                            <div className='text-base font-semibold textblack'>116</div>
                            <div className='text-[12px] text-[#555] font-[400]'>Order</div>
                        </div>
                        <div className='border border-[#EFEFEF]' />
                        <div className='flex flex-col'>
                            <div className='text-base font-semibold textblack'>$5.00</div>
                            <div className='flex items-center '>
                                <div className='text-[12px] text-[#71B02F] font-[400]'>Store edit</div>
                                <svg className='ml-1' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46551 2C9.06361 2.03649 9.62465 2.30206 10.032 2.7415C10.2933 2.94874 10.5042 3.21255 10.6488 3.51307C10.7935 3.81358 10.8681 4.14299 10.867 4.4765C10.7965 5.03113 10.5327 5.54314 10.122 5.9225L6.02001 10.265C5.77216 10.5118 5.45821 10.6816 5.11601 10.754H5.11351L3.50351 11.029C3.42507 11.0426 3.34562 11.0494 3.26601 11.0495C3.10578 11.0527 2.94671 11.0217 2.79944 10.9585C2.65216 10.8953 2.52008 10.8013 2.41201 10.683C2.3006 10.5536 2.21808 10.4019 2.16996 10.2381C2.12185 10.0743 2.10925 9.90208 2.13301 9.733L2.31801 8.112V8.105C2.37553 7.76373 2.52566 7.4448 2.75201 7.183L6.85751 2.837C7.05225 2.59295 7.29594 2.39239 7.57288 2.24823C7.84983 2.10408 8.1539 2.01952 8.46551 2ZM4.98551 10.015C5.1658 9.97151 5.33193 9.8825 5.46801 9.7565L5.47251 9.7515L9.57751 5.4065C9.86477 5.15075 10.0559 4.80439 10.119 4.425C10.1099 4.20278 10.0513 3.98541 9.94747 3.78871C9.84367 3.59202 9.6973 3.42096 9.51901 3.288C9.2476 2.98307 8.87166 2.79109 8.46551 2.75C8.25665 2.77176 8.0545 2.83626 7.87163 2.93948C7.68876 3.0427 7.52908 3.18244 7.40251 3.35L3.29851 7.697C3.18072 7.84368 3.09994 8.01654 3.06301 8.201L2.87751 9.817C2.86652 9.88112 2.86912 9.94683 2.88514 10.0099C2.90116 10.0729 2.93025 10.1319 2.97051 10.183C3.00848 10.2226 3.05453 10.2535 3.10552 10.2737C3.15651 10.2939 3.21124 10.3029 3.26601 10.3C3.30306 10.2998 3.34003 10.2965 3.37651 10.29L4.98551 10.015ZM9.17051 6.7695C9.15785 6.77013 9.14517 6.77013 9.13251 6.7695C8.37455 6.69377 7.66313 6.36872 7.10974 5.84527C6.55635 5.32183 6.19225 4.62958 6.07451 3.877C6.05928 3.77874 6.0837 3.67845 6.14239 3.59819C6.20109 3.51793 6.28926 3.46427 6.38751 3.449C6.4362 3.44139 6.48592 3.44344 6.53381 3.45506C6.58171 3.46667 6.62684 3.48761 6.66664 3.51668C6.70644 3.54575 6.74011 3.58238 6.76574 3.62447C6.79137 3.66657 6.80845 3.7133 6.81601 3.762C6.90903 4.34971 7.19417 4.89004 7.62687 5.29849C8.05957 5.70694 8.61542 5.96049 9.20751 6.0195C9.30697 6.02441 9.4004 6.06862 9.46726 6.14242C9.53411 6.21621 9.56892 6.31354 9.56401 6.413C9.5591 6.51246 9.51489 6.60589 9.44109 6.67275C9.3673 6.7396 9.26997 6.77441 9.17051 6.7695Z" fill="#71B02F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between border-b py-3 mr-4 ml-4'>
                    <div className='w-[255px]'>
                        <p className='text-sm font-bold leading-normal'>Bill infomation</p>
                        <p className='text-[12px] text-[#555] font-normal'>34563 Bouchain St</p>
                        <p className='text-[12px] text-[#555] font-normal'>92592</p>
                        <p className='text-[12px] text-[#555] font-normal'>US</p> 
                    </div>
                    <div className='w-[255px]'>
                        <p className='text-sm font-bold leading-normal'>Shipping infomation</p>
                        <p className='text-[12px] text-[#555] font-normal'>34563 Bouchain St</p>
                        <p className='text-[12px] text-[#555] font-normal'>92592</p>
                        <p className='text-[12px] text-[#555] font-normal'>US</p> 
                    </div>
                </div>
                <div className='flex justify-between py-3 border-b ml-4 mr-4'>
                    <p className='text-sm font-bold leading-normal'>Customer note</p>
                    <p className='text-[12px] font-[400] text-[#71B02F]'>
                        Add note
                    </p>
                </div>
                <div className='flex flex-col justify-between ml-4 mr-4 py-2 border-b'>
                    <div className='flex justify-between'>
                        <p className='text-[10px] text-[#555] font-[400]'>19, October 2023</p>
                        <p className='text-[10px] text-[#555] font-[400]'>4:50 AM</p>
                    </div>
                    <div className='text-[12px] text-black font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </div>
                </div>
                <div className='flex flex-col justify-between ml-4 mr-4 py-2 border-b'>
                    <div className='flex justify-between'>
                        <p className='text-[10px] text-[#555] font-[400]'>19, October 2023</p>
                        <p className='text-[10px] text-[#555] font-[400]'>4:50 AM</p>
                    </div>
                    <div className='text-[12px] text-black font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </div>
                </div>
                <div className='flex flex-col justify-between ml-4 mr-4 py-2'>
                    <div className='flex justify-between'>
                        <p className='text-[10px] text-[#555] font-[400]'>19, October 2023</p>
                        <p className='text-[10px] text-[#555] font-[400]'>4:50 AM</p>
                    </div>
                    <div className='text-[12px] text-black font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </div>
                </div>

                <div className='flex w-full justify-between mt-[40%]'>
                    <div className='ml-4 mr-4 w-[100%]'>
                        <Button className='w-full rounded-sm' onClick={handleSave}> View transactions</Button>
                    </div>
                </div>
            </div>
            {/* <div className='flex w-full justify-between mt-5'>
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
                        <Checkbox id="use" className='rounded-full'/>
                        <label
                            htmlFor="use"
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
            </div> */}
        </div>
      ) : (
        <p className='w-[540px] ml-2'></p>
      )}
    </div>
  );
};

export default DetailView;

