"use client";
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ListTableProps {
    data: Array<{  
                  title: string;
                  date: string;
                  sate: string; 
                  coin: string;
                  name:string;  
                }>;
  onRowClick: (item: {  
                        title: string;
                        date: string;
                        sate: string;
                        coin: string;
                        name:string;
                      }) => void;
}
const ITEMS_PER_PAGE = 5; //moi items tren trang la 5

const ListTableOrder: React.FC<ListTableProps> = ({ data, onRowClick }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1); //su dung state de kiem soat trang hien tai

  const handleItemClick = (itemId: any | React.SetStateAction<null>) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  const [isHiden, setIsHiden] = React.useState(false);

  const handleShow = (isShow: any | React.SetStateAction<boolean>) => {
    setActiveItem(isShow === isHiden ? true : isShow);
    if(isShow === isHiden ? true : isShow) {
       return console.log()
    } else {
      return console.log('an');
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page)
  };

  return (
    <div>
      <table>
      <tbody>
        <div className='w-[370px] h-[80px] p-5 bg-white border-b border-[#F5F5F5] flex justify-between items-center'>
            <p className='text-sm font-normal'>Sort by:</p>
            <Select>
              <SelectTrigger className="w-[180px] mt-2">
                  <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                  <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
              </SelectContent>
            </Select>
        </div>

        <div className='w-[370px] h-[31px] px-3 py-2 bg-[#EFF4F9]'>
            <p className='text-xs font-medium'>19, February 2024</p>
        </div>
        {paginatedData.map((item, index) => (
            <div key={index} onClick={() => onRowClick(item)} className='cursor-pointer bg-white'>
                <div className={`w-[370px] p-3 border-b border-[#F5F5F5] justify-between items-start inline-flex hover:bg-[#F7F9FB] ${ activeItem === index ? 'bg-[#E7F3DA]' : ''}`} onClick={() => handleItemClick(index)}>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <b className="text-sm font-['Inter']">{item.title}</b>
                      <div className="text-[#555] text-xs font-normal ">
                      {item.date}
                      </div>
                      <div className="text-[#555] text-xs font-normal ">{item.sate}</div>
                    </div>
                    <div className="flex-col justify-start items-end gap-[5px] inline-flex">
                      <div className="text-black text-sm font-semibold font-['Inter']">
                      {item.coin}
                      </div>
                      <div className="text-[#555] text-xs font-normal ">{item.name}</div>
                    </div>
                </div>
            </div>
        ))}
      </tbody>
    </table>
    {/* {totalPages > 1 && (
        <div className="pagination mt-10 fixed">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-[50px] h-[40px] ml-3 first:ml-0 border hover:bg-[#71B02F] hover:text-white ${
                currentPage === index + 1 ? 'active' : ''
              }`}
            >
              {index + 1}
              
            </button>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default ListTableOrder;


