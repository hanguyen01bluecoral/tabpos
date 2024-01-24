"use client";
import React from 'react';

interface ListTableProps {
  data: Array<{  title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string; }>;
  onRowClick: (item: {  title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string;}) => void;
}

const ListTable: React.FC<ListTableProps> = ({ data, onRowClick }) => {
  return (
    <table>
      <tbody>
        {data.map((item, index) => (
            <div key={index} onClick={() => onRowClick(item)} className='cursor-pointer'>
                <div className="w-[635px] h-[65px] p-4 bg-white rounded border-b border-zinc-100 justify-start items-center inline-flex hover:bg-slate-100">
                    <div className='flex'>
                        <div className="w-8 h-8 rounded-full bg-slate-300">
                        <svg
                            className='items-center ml-[5px] mt-1' 
                            width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="user 2">
                            <path id="Vector" d="M10.7175 10.0833C9.77822 10.0833 8.87738 9.71019 8.21319 9.046C7.549 8.38181 7.17586 7.48098 7.17586 6.54167C7.17586 5.60236 7.549 4.70152 8.21319 4.03733C8.87738 3.37314 9.77822 3 10.7175 3C11.6568 3 12.5577 3.37314 13.2219 4.03733C13.8861 4.70152 14.2592 5.60236 14.2592 6.54167C14.2592 7.48098 13.8861 8.38181 13.2219 9.046C12.5577 9.71019 11.6568 10.0833 10.7175 10.0833ZM3.21753 17.1667V16.75C3.21753 15.2029 3.83211 13.7192 4.92607 12.6252C6.02004 11.5312 7.50377 10.9167 9.05086 10.9167H12.3842C13.9313 10.9167 15.415 11.5312 16.509 12.6252C17.6029 13.7192 18.2175 15.2029 18.2175 16.75V17.1667C18.2175 17.3877 18.1297 17.5996 17.9735 17.7559C17.8172 17.9122 17.6052 18 17.3842 18H4.05086C3.82985 18 3.61789 17.9122 3.46161 17.7559C3.30533 17.5996 3.21753 17.3877 3.21753 17.1667Z" fill="white"/>
                            </g>
                        </svg>

                        </div>
                        <div className='ml-2'>
                            <p className='text-black text-[14px] font-medium leading-normal'>{item.title}</p>
                            <p className='text-black text-[9px] font-normal leading-normal'>{item.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
