import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const NavItems: React.FC = () => {
  return (
    <div className="w-[735px] h-9 mt-5 flex justify-between overflow-x-auto scrollbar-none">
      <div className="flex w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            All item
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[110px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav1"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav1"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Best Seller
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav2"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav2"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Offer
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[110px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav3"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav3"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accessories
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav4"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav4"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Hoodies
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav5"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav5"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Caps
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav6"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav6"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Tshirt
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg focus:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav7"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav7"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweter
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav8"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav8"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweter
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav9"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav9"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweter
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav10"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav10"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweter
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav11"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav11"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweter
          </label>
        </div>
      </div>
      <div className="flex ml-3  w-[90px] h-[36px] bg-white rounded-lg hover:bg-[#71B02F] hover:text-white">
        <div className="flex items-center space-x-1">
          <Checkbox
            id="nav12"
            className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          />
          <label
            htmlFor="nav12"
            className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accessories
          </label>
        </div>
      </div>
    </div>
  );
};
export default NavItems;
