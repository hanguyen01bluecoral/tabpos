"use client"
import React, { useState } from "react";
const Quantity: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  
  return (
    <div className="flex items-center justify-center space-x-5">
      <button className="border-none bg-[#F5F5F2] inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-green-500 hover:text-white h-5 w-5 shrink-0 rounded-full"
      onClick={decreaseQuantity}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only"></span>
      </button>
      <div className="flex-grow-0 text-center">
        <div className="text-sm font-bold tracking-tighter w-[40px] h-[40px] text-center pt-[9px] border border-[#F5F5F5] ml-[0px]">
        {quantity}
        </div>
        <div className="text-[0.60rem] uppercase text-muted-foreground"></div>
      </div>
      <button className="border-none bg-[#F5F5F2] ml-[10px] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-green-500 hover:text-white h-5 w-5 shrink-0 rounded-full"
       onClick={increaseQuantity}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only"></span>
      </button>
    </div>
  );
};
export default Quantity;
