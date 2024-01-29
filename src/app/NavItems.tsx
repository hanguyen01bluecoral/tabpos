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
    <div className="w-[100%] h-11 mt-5 flex overflow-x-auto scrollbar-none">      
      <CheckboxWithLabel id="nav" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav1" label="Best Sellers" onChange={handleCheckChange}/>
      <CheckboxWithLabel id="nav2" label="Offers" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav3" label="Accessories" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav4" label="Hoodies" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav5" label="Caps" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav6" label="Tshirts" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav7" label="Swter" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav8" label="Hoodieszip" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav9" label="Color" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav10" label="Offers" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav11" label="Accessories" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav12" label="Caps" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav13" label="Color" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav14" label="croptops" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav15" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav16" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav17" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav18" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav19" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav1" label="Best Sellers" onChange={handleCheckChange}/>
      <CheckboxWithLabel id="nav2" label="Offers" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav3" label="Accessories" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav4" label="Hoodies" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav5" label="Caps" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav6" label="Tshirts" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav7" label="Swter" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav8" label="Hoodieszip" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav9" label="Color" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav10" label="Offers" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav11" label="Accessories" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav12" label="Caps" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav13" label="Color" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav14" label="croptops" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav15" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav16" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav17" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav18" label="All items" onChange={handleCheckChange} />
      <CheckboxWithLabel id="nav19" label="All items" onChange={handleCheckChange} />
    </div>
  );
};
export default NavItems;
