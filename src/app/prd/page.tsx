"use client";

import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Quantity from "../Quantity";
import TestSearh from "../tkcus/page";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import HeaderNav from "../HeaderNav";
import NavItems from "../NavItems";
import ProductSelection from "./ProductSelection";
import OrderTable from "./OrderTable";

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

<OrderTable
  orderedProducts={[]}
  removeFromOrder={function (productId: number): void {
    throw new Error("Function not implemented.");
  }}
/>;

// Component App
const Product: React.FC = () => {
  // Danh sách sản phẩm và đơn hàng
  const [products] = useState<Product[]>([
    { id: 1, name: 'kep toc', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lr3tzi37p09ld1', desc: 'Stock (102)', gia: '12000' },
          { id: 2, name: 'day thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 3, name: 'Tshirt', imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmh-lqj0c5snvazq28', desc: 'Stock (102)', gia: '12000' },
          { id: 4, name: 'Card', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3gw0fyia222a', desc: 'Stock (102)', gia: '12000' },
          { id: 5, name: 'Ao thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 6, name: 'Day lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 7, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '12000' },
          { id: 8, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 9, name: 'Op lung', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
          { id: 10, name: 'kep toc', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpr0li0r7xvb94_tn', desc: 'Stock (102)', gia: '12000' },
          { id: 11, name: 'day thun', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dvbcqes7v97', desc: 'Stock (102)', gia: '12000' },
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
          { id: 27, name: 'Balo nam', imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3gw0fyia222a', desc: 'Stock (102)', gia: '12000' }
    // Thêm sản phẩm khác nếu cần
  ]);
  const [orderedProducts, setOrderedProducts] = useState<Product[]>([]);

  const handleRemoveFromOrder = (productId: number) => {
    setOrderedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="flex">
      {/* Hiển thị danh sách sản phẩm và đơn hàng */}
      {/* <ProductSelection products={products} orderedProducts={orderedProducts} setOrderedProducts={setOrderedProducts} /> */}
      <ProductSelection
        products={products}
        orderedProducts={orderedProducts}
        setOrderedProducts={setOrderedProducts}
      />
      <OrderTable
        orderedProducts={orderedProducts}
        removeFromOrder={handleRemoveFromOrder}
      />
    </div>
  );
};

export default Product;

//neu muon tinh tong tien tu cc san pham trong ordertable
//1. lay ra gia cua cac san pham thong qua id 
//2. từ những id trên duyệt qua vòng lặp và cộng đọn chúg lại theo các lần lặp


