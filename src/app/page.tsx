"use client";
import "./globals.css";
import "./radio.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import React, { createContext } from "react";
import HeaderNav from "./HeaderNav";
import NavItems from "./NavItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyMinusIcon, SaveIcon } from "lucide-react";
import Quantity from "./Quantity";
import { Checkbox } from "@/components/ui/checkbox";
import CheckboxWithLabel from "./CheckboxWithLabel";  
import { Value } from "@radix-ui/react-select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import TestSearh from "./tkcus/page";
import Product from "./Products";
import ProductSelection from "./prd/ProductSelection";
import OrderTable from "./prd/OrderTable";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  desc: string;
  gia: string;
}

// Props cho component ProductSelection
interface ProductSelectionProps {
  products: Product[];
  orderedProducts: Product[];
  setOrderedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
interface OrderTableProps {
  orderedProducts: Product[];
}


export default function Home() {

  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (itemId: any | React.SetStateAction<null>) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  function handleCheckChange(): void {
    throw new Error("Function not implemented.");
  }

  //row
  const [isRowVisible, setIsRowVisible] = React.useState(true);
  const handleIconClick = () => {
    setIsRowVisible(false);
  };

  const [orderedProducts, setOrderedProducts] = React.useState<Product[]>([]);

  const handleRemoveFromOrder = (productId: number) => {
    setOrderedProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <nav className="w-full h-screen flex bg-[#F7F9FB] flex-grow ">
      {/* khoi itemproduct */}
      <div className="w-[calc(100%-600px)] pt-[20px] h-screen ml-[15px] flex-grow">

        <div className="">
          <HeaderNav />
        </div>

        <div className=" mt-[20px] h-[50px] flex overflow-x-auto scrollbar-none flex-grow relative">
          
          <div className="absolute w-full h-[45px]">
            <div className="absolute flex overflow-x-auto scrollbar-none">
              <NavItems/>
              
                {/* <Carousel className="w-full">
                  <CarouselContent className="-ml-1">
                    {Array.from({ length: 100 }).map((_, index) => (
                      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-[115px]">
                        <div className="">
                        <CheckboxWithLabel key={index} id={`nav${index}`} label={`Items ${index}`} onChange={handleCheckChange} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel> */}
            </div>
          </div>
        </div>

        <div className="mt-[8px] lg:h-[457px] md:h-[600px] overflow-y-auto scrollbar-none flex justify-between flex-wrap gap-y-[10px]">
        {/* <Product/> */}
        {/* <ProductSelection/> */}
        <ProductSelection products={[
          { id: 1, name: 'kep toc', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr3tzi37p09ld1', desc: 'Stock (102)', gia: '12500' },
          { id: 2, name: 'day thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 3, name: 'Tshirt', imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lqj0c5snvazq28', desc: 'Stock (102)', gia: '12400' },
          { id: 4, name: 'Card', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3gw0fyia222a', desc: 'Stock (102)', gia: '12100' },
          { id: 5, name: 'Ao thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '122000' },
          { id: 6, name: 'Day lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 7, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '132000' },
          { id: 8, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '142000' },
          { id: 9, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '123000' },
          { id: 10, name: 'kep toc', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '12000' },
          { id: 11, name: 'day thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '132000' },
          { id: 12, name: 'Tshirt', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 13, name: 'Card', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 14, name: 'Ao thun', imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lqj0c5snvazq28', desc: 'Stock (102)', gia: '12000' },
          { id: 15, name: 'Day lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '12000' },
          { id: 16, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 17, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 18, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '12000' },
          { id: 19, name: 'kep toc', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr3tzi37p09ld1', desc: 'Stock (102)', gia: '12000' },
          { id: 20, name: 'day thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 21, name: 'Tshirt', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 22, name: 'Card', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 23, name: 'Ao thun', imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lqj0c5snvazq28', desc: 'Stock (102)', gia: '12000' },
          { id: 24, name: 'Day lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 25, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 26, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lqj0c5snvazq28', desc: 'Stock (102)', gia: '12000' },
          { id: 27, name: 'Balo nam', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3gw0fyia222a', desc: 'Stock (102)', gia: '12000' },
        ]} orderedProducts={orderedProducts} setOrderedProducts={setOrderedProducts}/>
        </div>
      </div>

      {/* khoi customer */}
      <OrderTable orderedProducts={orderedProducts}  removeFromOrder={handleRemoveFromOrder} />

      {/* <div className="w-[400px] pt-[10px]  ml-[10px] h-screen flex  flex-col">
        <div className=" flex-grow h-full bg-white rounded-lg mb-[35px]"> */}
          {/* <div className="pt-3  rounded-xl">
            <p className="ml-3 mb-3 text-sm font-medium">Customer</p>
            <div className="mb-3 rounded-full w-[97%] h-[100%] flex  justify-between pt-3 pl-2 mx-auto ">
              
              <TestSearh />
              
            </div> */}

            {/* table products */}
            {/* <Table className="mt-2 border-none">
              <div className="h-[100%] overflow-y-auto scrollbar-none">
                <TableCaption></TableCaption>
                <TableHeader className="border-none">
                  <TableRow className="border-none">
                    <TableHead className="w-[100px] text-xs">NAME</TableHead>
                    <TableHead className="text-left text-xs">
                      QUANTITY
                    </TableHead>
                    <TableHead className="text-xs text-left">PRICE</TableHead>
                    <TableHead className=" text-xs"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {isRowVisible && (
                  <TableRow>
                    <TableCell className="w-[129px]">
                      <div>
                        <h5 className="text-sm font-semibold">Coffee</h5>
                        <p className="text-xs">Size A, Black</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Quantity />
                    </TableCell>
                    <TableCell className="text-left">100000đ</TableCell>
                    <TableCell className="text-right">
                    <svg  onClick={handleIconClick} width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </TableCell>
                  </TableRow>
                )}
                  <TableRow>
                    <TableCell className="w-[129px]">
                      <div>
                        <h5 className="text-sm font-semibold">Coffee</h5>
                        <p className="text-xs">Size A, Black</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Quantity />
                    </TableCell>
                    <TableCell className="text-left">1000đ</TableCell>
                    <TableCell className="text-right">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="w-[129px]">
                      <div>
                        <h5 className="text-sm font-semibold">Coffee</h5>
                        <p className="text-xs">Size A, Black</p>
                      </div>
                    </TableCell>
                    <TableCell className="">
                      <Quantity />
                    </TableCell>
                    <TableCell className="text-left">1000đ</TableCell>
                    <TableCell className="text-right">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </TableCell>
                  </TableRow>
               
                  
                </TableBody>
              </div>
            </Table> */}
          {/* </div>
        </div> */}

        {/* <div className="mt-auto ">
          <div className=" w-[100%] "> */}
            {/* table subtotal */}
            {/* <Table>
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className=" text-left text-base text-black font-medium">
                    Sub total
                  </TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                  <TableHead className="text-right pr-3 text-base text-black font-medium">
                    116.000 đ
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-none pt-0">
                  <TableCell className="font-normal text-gray-500 text-sm ">
                    Promotions
                  </TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                    23,200 đ
                  </TableCell>
                </TableRow>
                <TableRow className="border-none pt-0">
                  <TableCell className="font-normal text-gray-500 text-sm pt-0">
                    Shipping
                  </TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                    0 đ
                  </TableCell>
                </TableRow>
                <TableRow className="border-none pt-0">
                  <TableCell className="font-normal text-gray-500 text-sm pt-0">
                    Fees
                  </TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="pt-0"></TableCell>
                  <TableCell className="text-right pr-3 font-normal text-gray-500 text-sm pt-0">
                    - 200 đ
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table> */}

            {/* save oder */}
            {/* <div className="mb-2 rounded-sm w-[99%] h-[36px] bg-[#E9EEF3] flex pt-0 pl-3 pr-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="save"
                  className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-300"
                />
                <label
                  htmlFor="save"
                  className="text-xs cursor-pointer whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save Order
                </label>
              </div>
            </div> */}

            {/* <div className="mb-2 rounded-sm w-[100%] h-[66px] pt-[10px] flex justify-between cursor-pointer"> */}
              {/* add shipping */}
              {/* <div className=" flex">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                      <svg
                        className="ml-2 mt-2"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                          fill="black"
                        />
                      </svg>
                      <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                        Shipping
                      </p>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="ml-5 mr-10">
                        <div className=" flex justify-between">
                          <p className="pt-2  text-black font-bold text-base">
                            Shipping
                          </p>
                          <AlertDialogCancel className="border-none p-0 outline-none hover:bg-transparent ">
                            <svg
                              className="mt-3 mr-1 cursor-pointer"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                fill="black"
                              />
                            </svg>
                          </AlertDialogCancel>
                        </div>
                      </AlertDialogTitle>
                      <AlertDialogDescription className="w-[700px] h-[370px] relative">
                        <div className="w-[670px] h-[365px] bg-white  ml-[7px] rounded-lg absolute">
                          <div className="flex justify-between ">
                            <div className="w-[355px] h-[39px]  mx-4 mt-[5px]  absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Shiping method
                              </p>
                            </div>

                            <div className="w-[235px] h-[39px]  ml-[420px] mt-[5px]  absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Amount*
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[375px] h-[39px]  mx-4 mt-[50px]  absolute ">
                              <Select>
                                <SelectTrigger className="w-[375px] border-none bg-[#F5F5F5]">
                                  <SelectValue placeholder="Flat rate" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Flat rate</SelectLabel>
                                    <SelectItem
                                      value="apple"
                                      className="overflow-x-hidden"
                                    >
                                      Apple
                                    </SelectItem>
                                    <SelectItem value="banana">
                                      Banana
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Blueberry
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Grapes
                                    </SelectItem>
                                    <SelectItem value="pineapple">
                                      Pineapple
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="w-[250px] h-[39px]  ml-[400px] mt-[50px] absolute ">
                              <Input type="enter" placeholder="Enter" className="border-none bg-[#F5F5F5] "/>
                            </div>
                          </div>

                          <div className="w-[635px] h-[245px]  mx-4 mt-[110px]   absolute rounded-lg">
                            <div className=" rounded-lg">
                              <Button className="w-[124px] h-[60px] rounded-tl-lg border bg-white text-black hover:text-white">
                                1
                              </Button>
                              <Button className="w-[124px] h-[60px] rounded-none border-t border-r border-b bg-white text-black hover:text-white">
                                2
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-t border-r border-b bg-white text-black hover:text-white">
                                3
                              </Button>
                              <Button className="w-[260px] h-[60px] text-sm font-[300] border-t border-r border-b rounded-tr-lg  bg-white text-black hover:text-white">
                                Clear
                              </Button>
                            </div>
                            <div className=" rounded-lg flex">
                              <Button className="w-[124px] h-[60px] rounded-none border-l border-r border-b bg-white text-black hover:text-white">
                                4
                              </Button>
                              <Button className="w-[124px] h-[60px] rounded-none  border-r border-b bg-white text-black hover:text-white">
                                5
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                6
                              </Button>
                              <Button className="w-[260px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </Button>
                            </div>
                            <div className=" rounded-lg">
                              <Button className="w-[124px] h-[60px] rounded-none border-l border-r border-b bg-white text-black hover:text-white">
                                7
                              </Button>
                              <Button className="w-[124px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                8
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                9
                              </Button>
                              <Button className="w-[260px] h-[60px] text-sm rounded-none border-r border-b bg-white text-black hover:text-white">
                                SAVE SHIPING
                              </Button>
                            </div>
                            <div className=" rounded-lg">
                              <Button className="w-[124px] h-[60px] rounded-bl-lg border-l border-r border-b bg-white text-black hover:text-white">
                                0
                              </Button>
                              <Button className="w-[124px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                .
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                00
                              </Button>
                              <Button className="w-[260px] h-[60px] rounded-br-lg  border-r border-b text-black bg-[#F5F5F5] hover:text-white">
                                BACK
                              </Button>
                            </div>
                          </div>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
              </div> */}

              {/* add Coupont */}
              {/* <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                        <svg
                          className="ml-2 mt-2"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                          Coupont
                        </p>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <div className="flex justify-between items-center">
                            Apply coupon
                            <AlertDialogCancel className="border-none p-0 hover:bg-transparent">
                              <svg
                                className="mt-0 mr-0 cursor-pointer outline-none border-none hover:bg-transparent"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                  fill="black"
                                />
                              </svg>
                            </AlertDialogCancel>
                          </div>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div className="w-[470px] h-[150px] bg-white rounded-lg mx-auto">
                            <div className="w-[440px] h-[41px]   mt-[0px]  absolute flex justify-between">
                              <p className="pt-2 text-black font-bold text-sm">
                                Enter coupon code
                              </p>
                            </div>

                            <div className="w-[470px] h-[41px]  mt-[40px]  absolute flex justify-between">
                              <Input type="enter" placeholder="Enter" className="border-none bg-[#F5F5F5] "/>
                            </div>

                            <div className="w-[470px] h-[41px]  mt-[100px]  absolute flex justify-between">
                              <Button className="w-[470px] rounded-md">
                                Add
                              </Button>
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div> */}

              {/* order note */}
              {/* <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                        <svg
                          className="ml-2 mt-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4642 15.5506H10.7149C10.423 15.5506 10.1862 15.3137 10.1862 15.0219C10.1862 14.7301 10.423 14.4933 10.7149 14.4933H11.4642C12.0191 14.3812 14.2677 12.1254 14.4427 11.4879V4.35975C14.4427 3.22155 13.5167 2.29535 12.3783 2.29535H3.85239C2.71393 2.29535 1.78799 3.22129 1.78799 4.35975V12.4281C1.78799 13.5668 2.71393 14.4933 3.85239 14.4933H7.48637C7.77819 14.4933 8.01502 14.7301 8.01502 15.0219C8.01502 15.3137 7.77819 15.5506 7.48637 15.5506H3.85239C2.13109 15.5506 0.730682 14.1499 0.730682 12.4281V4.35975C0.730682 2.63844 2.13109 1.23804 3.85239 1.23804H12.3783C14.0996 1.23804 15.5 2.63844 15.5 4.35975V11.5138C15.4997 12.5325 12.4824 15.5506 11.4642 15.5506Z"
                            fill="black"
                          />
                          <path
                            d="M1.78375 5.28296H14.6145V6.34027H1.78375V5.28296Z"
                            fill="black"
                          />
                          <path
                            d="M3.62164 3.71251C3.32982 3.71251 3.09299 3.47567 3.09299 3.18385V0.847991C3.09299 0.556174 3.32982 0.319336 3.62164 0.319336C3.91346 0.319336 4.1503 0.556174 4.1503 0.847991V3.18385C4.1503 3.47594 3.91372 3.71251 3.62164 3.71251Z"
                            fill="black"
                          />
                          <path
                            d="M12.5345 3.71251C12.2427 3.71251 12.0058 3.47567 12.0058 3.18385V0.847991C12.0058 0.556174 12.2427 0.319336 12.5345 0.319336C12.8263 0.319336 13.0631 0.556174 13.0631 0.847991V3.18385C13.0631 3.47594 12.8263 3.71251 12.5345 3.71251Z"
                            fill="black"
                          />
                          <path
                            d="M10.6599 15.4733C10.3681 15.4733 10.1312 15.2364 10.1312 14.9446V13.0623C10.1312 11.5107 11.3934 10.2483 12.9453 10.2483H14.5986C14.8904 10.2483 15.1273 10.4851 15.1273 10.7769C15.1273 11.0688 14.8904 11.3056 14.5986 11.3056H12.9453C11.9768 11.3056 11.1885 12.0936 11.1885 13.0623V14.9446C11.1885 15.2367 10.9517 15.4733 10.6599 15.4733Z"
                            fill="black"
                          />
                        </svg>
                        <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                          Order Notes
                        </p>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <div className="flex justify-between">
                            Note
                            <AlertDialogCancel className="border-none p-0 hover:bg-transparent">
                              <svg
                                className="mt-0 mr-0 cursor-pointer outline-none border-none"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893C15.0976 0.683417 15.0976 1.31658 14.7071 1.70711L8.91421 7.5L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.5 8.91421L1.70711 14.7071C1.31658 15.0976 0.683418 15.0976 0.292894 14.7071C-0.0976312 14.3166 -0.0976312 13.6834 0.292894 13.2929L6.08579 7.5L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.5 6.08579L13.2929 0.292893Z"
                                  fill="black"
                                />
                              </svg>
                            </AlertDialogCancel>
                          </div>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div className="w-[670px] h-[150px] bg-white rounded-lg mx-auto">
                            <div className="w-[670px] h-[41px]  mt-[10px]  absolute flex justify-between">
                              <Textarea placeholder="Enter" className="border-none bg-[#F5F5F5] "/>
                            </div>

                            <div className="w-[670px] h-[41px]  mt-[105px]  absolute flex justify-between">
                              <Button className="w-[670px] rounded-md">
                                Add
                              </Button>
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div> */}

              {/* Clear all items */}
              {/* <div className="h-full bg-[#E9EEF3] rounded-sm w-[97px] ml-0 pl-0">
                <svg
                  className="ml-2 mt-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xs font-normal text-[#222222] ml-2 mt-1">
                  Clear all items
                </p>
              </div>
            </div> */}

            {/* checkout */}
            {/* <Button className="w-[99%] rounded-md mt-4 px-0 h-[63px] mb-3">
              <div className="flex ">
                <Dialog>
                  <DialogTrigger>
                    <div className="flex">
                      <div className="font-bold text-lg ml-[-210px] w-[485px] ">
                        Checkout
                        <p className=" font-light text-xs">05 Items</p>
                      </div>
                      <div className="font-bold text-lg ">
                        189.000 đ
                        <p className=" font-light text-xs">(VAT Included)</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-[700px]">
                    <DialogHeader>
                      <DialogTitle className="pb-4 focus:outline-none">Payment</DialogTitle>
                      <DialogDescription>
                        <div className="w-[580px] h-[600px] rounded-lg">
                          <div className="flex justify-between ">
                            <div className="w-[635px] h-[39px]  mt-[0px]  absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Payment Method
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[650px] h-[56px]  mt-[40px]  absolute  flex ">
                              <div className={`h-full border px-2  rounded-sm w-[160px] ml-0 ${ activeItem === 1 ? 'bg-[#71B02F] text-white' : ''}`} onClick={() => handleItemClick(1)}>
                                <svg className="mt-2 mb-1" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>        
                                  Cash
                              </div>

                              <div className={`h-full  ml-2 border px-2  rounded-sm w-[160px] ${ activeItem === 2 ? 'bg-[#71B02F] text-white' : ''}`} onClick={() => handleItemClick(2)}>
                                <svg className="mt-2 mb-1" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                  Creadit / Banking
                              </div>

                              <div className={`h-full  ml-2 border px-2  rounded-sm w-[160px] ${ activeItem === 3 ? 'bg-[#71B02F] text-white' : ''}`} onClick={() => handleItemClick(3)}>
                                <svg className="mt-2 mb-1" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                  Money
                              </div>

                              <div className={`h-full ml-2 border px-2  rounded-sm w-[160px] ${ activeItem === 4 ? 'bg-[#71B02F] text-white' : ''}`} onClick={() => handleItemClick(4)}>
                                <svg className="mt-2 mb-1" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 7.21321 1.87134 6.93143 1.91256 6.65615L9.56374 2.23875C9.86311 2.35627 10.15 2.49861 10.4219 2.66322L3.77065 6.50332C3.73669 6.52183 3.70482 6.5449 3.67602 6.57238C3.5911 6.65308 3.54245 6.76286 3.53682 6.87658C3.53359 6.9418 3.54451 7.00831 3.57086 7.07137C3.58927 7.1157 3.6149 7.15742 3.64744 7.19458C3.67306 7.22396 3.702 7.24941 3.73337 7.27069L7.32533 9.83813L3.87232 11.8317C2.63604 10.7953 1.84998 9.23944 1.84998 7.49998ZM8.36843 10.2751C8.37682 10.2706 8.38509 10.2659 8.39322 10.2608L9.84091 9.42499C9.84706 9.42163 9.85314 9.41812 9.85915 9.41446L11.3101 8.57677C11.3655 8.54649 11.4154 8.504 11.4554 8.44995C11.6034 8.25031 11.5616 7.96848 11.362 7.82046L7.82779 5.20017L11.2161 3.24393C12.4013 4.27963 13.15 5.80237 13.15 7.49998C13.15 7.83546 13.1207 8.16411 13.0647 8.48353L5.56875 12.8113C5.26138 12.6995 4.96646 12.5618 4.68662 12.4008L8.36843 10.2751ZM8.18149 9.34383L4.81659 6.93868L5.50918 6.53881L8.80604 8.98324L8.18149 9.34383ZM6.35875 6.04832L6.97822 5.69067L10.2751 8.13506L9.6556 8.49275L6.35875 6.04832ZM8.3318 1.91078L2.24263 5.42636C3.06941 3.33188 5.11164 1.84998 7.49998 1.84998C7.78258 1.84998 8.06033 1.87072 8.3318 1.91078ZM6.84684 13.1126C7.06114 13.1373 7.27908 13.15 7.49998 13.15C9.8246 13.15 11.8213 11.7461 12.6886 9.7399L6.84684 13.1126ZM7.49998 0.849976C3.82728 0.849976 0.849976 3.82728 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                  ATM
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[635px] h-[39px]   mt-[100px]  absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Paid
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[650px] h-[39px]   mt-[140px]  absolute ">
                              <Input
                                type="email"
                                placeholder="700.000"
                                className="bg-[#F7F9FB] border-none"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[650px] h-[39px]  mt-[190px]  absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Popular tendered
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="w-[650px] h-[39px]   mt-[230px]  absolute  flex justify-between">
                              <Input
                                type="email"
                                placeholder="700.000đ"
                                className=" w-[150px] mr-3 placeholder:text-center"
                              />
                              <Input
                                type="email"
                                placeholder="800.000đ"
                                className=" w-[150px] mr-3 placeholder:text-center"
                              />
                              <Input
                                type="email"
                                placeholder="1.000.000đ"
                                className=" w-[150px] mr-3 placeholder:text-center"
                              />
                              <Input
                                type="email"
                                placeholder="2.000.000đ"
                                className=" w-[150px] placeholder:text-center"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between w-[650px]">
                            <div className="w-[210px] h-[39px]   mt-[275px]   absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Amount to pay
                              </p>
                            </div>
                            <div className="w-[320px] h-[39px]  ml-[330px] mt-[275px]   absolute ">
                              <p className="pt-2 text-black font-bold text-sm">
                                Change
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between w-[650px] ">
                            <div className="w-[315px] h-[39px]   mt-[310px]   absolute ">
                              <Input
                                disabled
                                type="email"
                                placeholder="500.000đ"
                                className="text-base font-bold text-right placeholder:text-[#71B02F] bg-[#E7F3DA]"
                              />
                            </div>
                            <div className="w-[320px] h-[39px]  ml-[330px] mt-[310px]   absolute ">
                              <Input
                                disabled
                                type="email"
                                placeholder="200.000đ"
                                className="text-base font-bold text-right placeholder:text-[#ee9d67] bg-[#f3ebd9]"
                              />
                            </div>
                          </div>

                          <div className="w-[650px] h-[243px]   mt-[370px]   absolute rounded-lg">
                            <div className=" rounded-lg">
                              <Button className="w-[126px] h-[60px] rounded-tl-lg border  bg-white text-black hover:text-white">
                                1
                              </Button>
                              <Button className="w-[126px] h-[60px] rounded-none border-t border-r border-b  bg-white text-black hover:text-white">
                                2
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-t border-r border-b bg-white text-black hover:text-white">
                                3
                              </Button>
                              <Button className="w-[273px] h-[60px] text-sm font-[300] border-t border-r border-b rounded-tr-lg  bg-white text-black hover:text-white">
                                Clear
                              </Button>
                            </div>
                            <div className=" rounded-lg flex">
                              <Button className="w-[126px] h-[60px] rounded-none border-l border-r border-b bg-white text-black hover:text-white">
                                4
                              </Button>
                              <Button className="w-[126px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                5
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                6
                              </Button>
                              <Button className="w-[273px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </Button>
                            </div>
                            <div className=" rounded-lg">
                              <Button className="w-[126px] h-[60px] rounded-none border-l border-r border-b bg-white text-black hover:text-white">
                                7
                              </Button>
                              <Button className="w-[126px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                8
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none  border-r border-b bg-white text-black hover:text-white">
                                9
                              </Button>
                              <Button className="w-[273px] h-[60px] text-sm rounded-none border-r border-b bg-white text-black hover:text-white">
                                PAY & PRINT
                              </Button>
                            </div>
                            <div className=" rounded-lg">
                              <Button className="w-[126px] h-[60px] rounded-bl-lg border-l border-r border-b bg-white text-black hover:text-white">
                                0
                              </Button>
                              <Button className="w-[126px] h-[60px] rounded-none  border-r border-b bg-white text-black hover:text-white">
                                .
                              </Button>
                              <Button className="w-[125px] h-[60px] rounded-none border-r border-b bg-white text-black hover:text-white">
                                00
                              </Button>
                              <Button className="w-[273px] h-[60px] rounded-br-lg border-r border-b text-black bg-[#F5F5F5] hover:text-white">
                                PRINT
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </Button> */}
            
          {/* </div>
        </div>
      </div> */}
    </nav>
  );
};


