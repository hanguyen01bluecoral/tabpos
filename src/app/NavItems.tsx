import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import CheckboxWithLabel from "./CheckboxWithLabel";

const NavItems: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    console.log('check');
  };
  return (
    <div className="w-[100%] h-11 flex overflow-x-auto scrollbar-none">      
      {/* <CheckboxWithLabel id="nav" label="All items" onChange={handleCheckChange} /> */}
      {Array.from({ length: 30 }, (_, index) => (
        <CheckboxWithLabel key={index} id={`nav${index}`} label={`Items ${index}`} onChange={handleCheckChange} />
      ))}
    </div>
  );
};
export default NavItems;
