"use client";

import React, { useState } from 'react';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import "../radio.css";
import Image from "next/image";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import Quantity from '../Quantity';
import TestSearh from '../tkcus/page';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import HeaderNav from '../HeaderNav';
import NavItems from '../NavItems';


// Interface sản phẩm
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

// Component ProductSelection
const ProductSelection: React.FC<ProductSelectionProps> = ({ products, orderedProducts, setOrderedProducts }) => {
  // Hàm xử lý khi nhấn nút Add to Cart
  const handleAddToCart = (product: Product) => {
    setOrderedProducts(prevProducts => [...prevProducts, product]);
  };
  return (
    <div className='flex flex-wrap justify-between'>
      {products.map((product, index) => (
        <div key={index} className=''>
          <div className=' overflow-y-auto scrollbar-none flex justify-between flex-wrap gap-y-[10px]'>
            <Dialog >
              <DialogTrigger asChild>
                  <div className="w-[145px] border-none mr-[5px]">
                  <Card className="flex flex-col justify-between">
                  <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
                  </CardHeader>
                  <CardFooter className="px-0 py-1">
                      <div className="pl-2">
                          <h6 className="text-sm font-[500]">{product.name}</h6>
                          <p className="font-normal text-xs">{product.gia} đ</p>
                          <span className="font-normal text-[10px] opacity-[0.5]">
                              {product.desc}
                          </span>
                      </div>
                  </CardFooter>
                  </Card>
                  </div> 
              </DialogTrigger>
              <DialogContent className="w-[770px] h-[850px] rounded-lg bg-white border">
              <DialogHeader>
                  <DialogTitle>Chọn option sản phẩm</DialogTitle>
              </DialogHeader>
              <div className="w-[720px] h-[800px]">
                  <div className="w-[720px] h-[100px] absolute  flex rounded-tl-md">
                  <div className="rounded-tl-md">
                  <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
                  </div>
                  <div className="my-1 mx-4">
                  <h6 className="font-semibold text-base">{product.name}</h6>
                  <p className="text-xs font-[500] mt-1">{product.gia} đ</p>
                  <p className="text-[10px] font-normal mt-1">{product.desc}</p>
                  </div>
                  </div>

                  <div className="w-[720px] h-[25px] absolute mt-[110px] flex">
                    <p className="font-semibold text-base h-2">Color</p>
                  </div>
                  <div className="w-[720px] h-[60px] absolute mt-[140px] flex">
                    <div className="flex">
                      <label className=" mr-2">
                        <input type="radio" name="option" value="option1" />
                        <span className="radio-label flex border w-[70px] h-[40px]">
                          <div className="flex items-center">
                                <p className="text-sm pt-1"> WHITE </p>
                          </div>
                        </span>
                      </label>
                      <label className="mr-2">
                        <input type="radio" name="option" value="option1" />
                        <span className="radio-label flex border w-[70px] h-[40px]">
                          <div className="flex items-center">
                                <p className="text-sm pt-1"> RED </p>
                          </div>
                        </span>
                      </label>
                      <label className="mr-2">
                        <input type="radio" name="option" value="option1" />
                        <span className="radio-label flex border w-[70px] h-[40px]">
                          <div className="flex items-center">
                                <p className="text-sm pt-1"> GREENS </p>
                          </div>
                        </span>
                      </label>
                      <label className="radio-container">
                        <input type="radio" name="option" value="option1" />
                        <span className="radio-label flex border w-[70px] h-[40px]">
                          <div className="flex items-center">
                                <p className="text-sm pt-1"> BLACK </p>
                          </div>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="w-[720px] h-[25px] absolute mt-[190px] flex">
                    <p className="font-semibold text-base h-2">Size</p>
                  </div>
                  <div className="w-[720px] h-[60px] absolute mt-[225px] flex">
                    <div className="flex">
                        <label className=" mr-2">
                          <input type="radio" name="option1" value="option12" />
                          <span className="radio-label flex border w-[70px] h-[40px]">
                            <div className="flex items-center">
                                  <p className="text-sm pt-1"> S </p>
                            </div>
                          </span>
                        </label>
                        <label className="mr-2">
                          <input type="radio" name="option1" value="option12" />
                          <span className="radio-label flex border w-[70px] h-[40px]">
                            <div className="flex items-center">
                                  <p className="text-sm pt-1"> M </p>
                            </div>
                          </span>
                        </label>
                        <label className="mr-2">
                          <input type="radio" name="option1" value="option12" />
                          <span className="radio-label flex border w-[70px] h-[40px]">
                            <div className="flex items-center">
                                  <p className="text-sm pt-1"> L </p>
                            </div>
                          </span>
                        </label>
                      </div>
                  </div>

                  <div className="w-[720px] h-[25px] absolute mt-[275px] flex">
                    <p className="font-semibold text-base h-2">Additional info</p>
                  </div>
                  <div className="w-[720px] h-[50px] absolute mt-[310px] flex">
                    <div>
                      <Input
                        className="w-[719px] focus:outline-none focus:border-none"
                        type="email"
                        placeholder="Type here"
                      />
                    </div>
                  </div>

                  <div className="w-[720px] h-[25px] absolute mt-[360px] flex">
                    <p className="font-semibold text-base h-2">Number</p>
                  </div>
                  <div className="w-[720px] h-[50px] absolute mt-[390px] flex">
                    <Quantity/>
                  </div>

                  <div className="w-[720px] h-[25px] absolute mt-[440px] flex">
                    <p className="font-semibold text-base h-2">Up sales</p>
                  </div>
                  <div className="w-[720px] h-[220px] absolute mt-[465px] grid grid-cols-5 gap-2">
                    <Card className="flex flex-col justify-between mt-2 h-[210px] border-none rounded-sm">
                      <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                          alt="product"
                          className="w-full h-full px-0 cursor-pointer rounded-sm"
                        />
                      </CardHeader>
                      <CardFooter className="px-0 mt-2">
                        <div className="px-1">
                          <h6 className="text-sm font-[500]">T-shirt with logo</h6>
                          <p className="font-[400] text-xs">25.000.000 đ</p>
                          <span className="font-light text-[10px] text-gray-400">
                            Stock (102)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-between mt-2 h-[210px] border-none">
                      <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                          alt="product"
                          className="w-full h-full px-0 cursor-pointer rounded-sm"
                        />
                      </CardHeader>
                      <CardFooter className="px-0 mt-2">
                        <div className="px-1">
                          <h6 className="text-sm font-[500]">T-shirt with logo</h6>
                          <p className="font-[400] text-xs">25.000.000 đ</p>
                          <span className="font-light text-[10px] text-gray-400">
                            Stock (102)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-between mt-2 h-[210px] border-none">
                      <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                          alt="product"
                          className="w-full h-full px-0 cursor-pointer rounded-sm"
                        />
                      </CardHeader>
                      <CardFooter className="px-0 mt-2">
                        <div className="px-1">
                          <h6 className="text-sm font-[500]">T-shirt with logo</h6>
                          <p className="font-[400] text-xs">25.000.000 đ</p>
                          <span className="font-light text-[10px] text-gray-400">
                            Stock (102)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-between mt-2 h-[210px] border-none">
                      <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                          alt="product"
                          className="w-full h-full px-0 cursor-pointer rounded-sm"
                        />
                      </CardHeader>
                      <CardFooter className="px-0 mt-2">
                        <div className="px-1">
                          <h6 className="text-sm font-[500]">T-shirt with logo</h6>
                          <p className="font-[400] text-xs">25.000.000 đ</p>
                          <span className="font-light text-[10px] text-gray-400">
                            Stock (102)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col justify-between mt-2 h-[210px] border-none">
                      <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                        <img
                          src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                          alt="product"
                          className="w-full h-full px-0 cursor-pointer rounded-sm"
                        />
                      </CardHeader>
                      <CardFooter className="px-0 mt-2">
                        <div className="px-1">
                          <h6 className="text-sm font-[500]">T-shirt with logo</h6>
                          <p className="font-[400] text-xs">25.000.000 đ</p>
                          <span className="font-light text-[10px] text-gray-400">
                            Stock (102)
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="h-[25px] absolute mt-[690px] flex">
                      <Button onClick={() => handleAddToCart(product)} className="mt-2 w-[720px] bg-slate-white border rounded-md text-black hover:text-white">
                        Add to cart
                      </Button>
                  </div>
              </div>
              <DialogFooter>
                  {/* <Button type="submit">Save changes</Button> */}
              </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}   
    </div>       
  );
};
  export default ProductSelection;

