import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
const Product: React.FC = () => {
    return (
         <div className="w-[142px] border-none">
            <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center px-0 py-0">
                <a href="#">
                <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnnixj6hk8sbf"
                alt="product"
                className="w-[140px] h-[140px] px-0 rounded-tl-[4px] rounded-tr-[4px] cursor-pointer"
                />
                </a>
            </CardHeader>
            <CardFooter className="px-0 py-1">
                <div className="px-0">
                <h6 className="text-sm font-[600]">T-shirt with logo</h6>
                <p className="font-medium text-xs">25.000.000 đ</p>
                <span className="font-light text-[10px] text-gray-400">
                    Stock (102)
                </span>
                </div>
            </CardFooter>
            </Card>
        </div> 
    );
}
export default Product;