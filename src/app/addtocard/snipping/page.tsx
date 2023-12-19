import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function Snipping() {
  return (
    <div className="w-[670px] h-[505px] bg-white border mx-auto rounded-lg">
    <div className="w-[635px] h-[39px] bg-white mx-4 mt-5 border-b-[1px]  absolute flex justify-between">
      <p className="pt-2 text-black font-bold text-base">Shipping</p>
      <svg
        className="mt-3 mr-3 cursor-pointer"
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
    </div>

    <div className="flex justify-between ">
      <div className="w-[355px] h-[39px]  mx-4 mt-[65px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">
          Shiping method
        </p>
      </div>

      <div className="w-[235px] h-[39px]  ml-[420px] mt-[70px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">Amount*</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[355px] h-[39px]  mx-4 mt-[103px]  absolute ">
        <Select>
          <SelectTrigger className="w-[355px]">
            <SelectValue placeholder="Flat rate" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Flat rate</SelectLabel>
              <SelectItem value="apple" className="overflow-x-hidden">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-[230px] h-[39px]  ml-[420px] mt-[103px]  absolute ">
      <Input type="enter" placeholder="Enter" />
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[355px] h-[39px]  mx-4 mt-[150px]  absolute ">
      </div>

      <div className="w-[230px] h-[39px]  ml-[420px] mt-[150px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">Amount to pay</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[355px] h-[39px]  mx-4 mt-[185px]  absolute ">
      </div>
      <div className="w-[230px] h-[39px]  ml-[420px] mt-[185px]  absolute ">
      <Input type="enter" placeholder="500.000.000đ" className="placeholder:font-bold placeholder:text-right placeholder:text-[#71B02F] bg-[#E7F3DA] " /> 
      </div>
    </div>

    <div className="w-[635px] h-[245px]  mx-4 mt-[245px]   absolute rounded-lg">
      <div className=" rounded-lg">
          <Button className="w-[124px] h-[60px] rounded-tl-lg borderbg-white text-black hover:text-white">1</Button>
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">2</Button>
          <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">3</Button>
          <Button className="w-[260px] h-[60px] text-sm font-[300] rounded-tr-lg border bg-white text-black hover:text-white">Clear</Button>
      </div> 
      <div className=" rounded-lg flex">
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">4</Button>
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">5</Button>
          <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">6</Button>
          <Button className="w-[260px] h-[60px] rounded-none border bg-white text-black hover:text-white">
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
              </path>
            </svg>
          </Button>
      </div> 
      <div className=" rounded-lg">
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">7</Button>
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">8</Button>
          <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">9</Button>
          <Button className="w-[260px] h-[60px] text-sm rounded-none border bg-white text-black hover:text-white">SAVE SHIPING</Button>
      </div> 
      <div className=" rounded-lg">
          <Button className="w-[124px] h-[60px] rounded-bl-lg border bg-white text-black hover:text-white">0</Button>
          <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">.</Button>
          <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">00</Button>
          <Button className="w-[260px] h-[60px] rounded-br-lg border text-black bg-[#F5F5F5] hover:text-white">BACK</Button>
      </div> 
    </div>

  </div>
  );
}