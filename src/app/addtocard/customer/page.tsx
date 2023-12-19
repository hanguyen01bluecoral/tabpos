import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

export default function CustomerSearch() {
    return (
        <div className="w-[470px] h-[499px] mx-auto">
        <div className="w-[440px] h-[39px] bg-white mx-4 mt-5 border-b-[1px] absolute flex justify-between scrollbar-thin">
          <p className="pt-2 text-black font-bold text-base">Customer</p>
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

        <div className="w-[440px] h-[409px] bg-white mx-4 mt-[70px]  absolute flex justify-between">
          <Command className="rounded-lg  shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="">
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Nguyen Le (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Hoàng Dũng(500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Nguyen Van Nam (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Hà Linh (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Nguyễn Văn Khôi (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Trần Văn Hùng (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Hoàng Hồng Anh (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Nguyễn Lan Hồng (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
                <CommandItem className="mt-3">
                  <Avatar className="text-center items-center w-[30px] h-[30px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="items-center mt-2">
                  <p className="pl-4 text-black font-medium">
                    Kim Dung (500 Points)
                  </p>
                  <p className="pl-4 text-[9px]">034999902</p>
                  </div>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    );
  }


  // trang home  -> nhan vo san pham -> add to card 
  //addtocard -> giao dien gio hang 
  //tren thanh tim kiem co icon qr -> nhan vo do se ra ma qr 
  //add note -> khi them  mot san pham vo se hien thi addnote
  //Link  - Link/next, linkcomponent