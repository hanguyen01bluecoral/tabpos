"use client"


import React, { useState } from 'react';

export default function SetTable() {

  const defaultColor = '#F5F5F5';
  const selectedColor = '#b0afab';

  const [svgColor, setSvgColor] = useState(defaultColor);

  const handleDivClick = () => {
    // Nếu màu hiện tại là màu đã chọn, chuyển về màu mặc định, ngược lại, chuyển sang màu đã chọn
    const newColor = svgColor === selectedColor ? defaultColor : selectedColor;
    setSvgColor(newColor);
    console.log(newColor)
  };

  //cap nhat chu
  const Color1 = '#000';
  const Color2 = '#fff';

  const [svgTextColor, setTextSvgColor] = useState(Color1);

  const handleTextDivClick = () => {
    // Nếu màu hiện tại là màu đã chọn, chuyển về màu mặc định, ngược lại, chuyển sang màu đã chọn
    const newTextColor = svgTextColor === Color2 ? Color1 : Color2;
    setTextSvgColor(newTextColor);
    console.log(newTextColor)
  };


  return (
    <nav>
      <div className="w-[150px] h-[160px]" onClick={handleDivClick} >
        <svg
          className="relative cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="147"
          viewBox="0 0 148 147"
          fill={svgColor} // Sử dụng màu sắc từ state   
        >
           <path d="M63.1249 14.7C58.759 14.7 55.2104 18.2515 55.2104 22.6144C55.2104 26.9774 58.7605 30.5304 63.1249 30.5304H84.875C89.2409 30.5304 92.7895 26.9789 92.7895 22.6144C92.7895 18.25 89.2394 14.7 84.875 14.7H63.1249ZM23.1159 92.291C25.2145 92.2886 27.2264 91.4538 28.7102 89.9698C30.194 88.4857 31.0284 86.4736 31.0304 84.375V62.6249C31.0304 58.259 27.4803 54.7089 23.1159 54.7089C18.7515 54.7089 15.2 58.2605 15.2 62.6249V84.375C15.2023 86.4737 16.037 88.4858 17.5211 89.9699C19.0051 91.4539 21.0172 92.2886 23.1159 92.291ZM63.1249 116.47C58.759 116.47 55.2104 120.021 55.2104 124.385C55.2104 128.75 58.7605 132.3 63.1249 132.3H84.875C89.2409 132.3 92.7895 128.748 92.7895 124.385C92.7895 120.022 89.2394 116.47 84.875 116.47H63.1249ZM124.884 92.291C126.983 92.2886 128.995 91.4539 130.479 89.9699C131.963 88.4858 132.798 86.4737 132.8 84.375V62.6249C132.8 58.259 129.248 54.7089 124.884 54.7089C120.52 54.7089 116.97 58.2605 116.97 62.6249V84.375C116.971 86.4736 117.806 88.4857 119.29 89.9698C120.773 91.4538 122.785 92.2886 124.884 92.291ZM38.867 110.103H109.133C109.523 110.103 109.897 109.948 110.172 109.672C110.448 109.397 110.603 109.023 110.603 108.633V38.367C110.603 37.9771 110.448 37.6032 110.172 37.3275C109.897 37.0518 109.523 36.8969 109.133 36.8969H38.867C38.4771 36.8969 38.1032 37.0518 37.8275 37.3275C37.5518 37.6032 37.3969 37.9771 37.3969 38.367V108.633C37.3969 109.023 37.5518 109.397 37.8275 109.672C38.1032 109.948 38.4771 110.103 38.867 110.103Z"  fill={svgColor} />
           <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#000"  className='font-bold cursor-pointer' >
              A1
            </text>
        </svg>
        <p className="font-bold text-center">Seat : 2</p>
      </div>
    </nav>
  );
}
