import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Command, CommandInput } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import SetTable from "./setTable/page";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import QrScaner from "./addtocard/qr/page";

const HeaderNav: React.FC = () => {
  const [position, setPosition] = React.useState("bottom")

    return (
        <div className="w-[100%] h-[45px] flex ">
        {/* phan trai */}
        <div className="w-[370px]  z-30 ">
          <div className="relative">
            <Command className="rounded-lg  relative">
              <CommandInput placeholder="Search Products..." />
              {/* <div className="ml-[84%] mt-[-43px] p-3">
                <svg
                  className="text-black"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.79418 0.5H2.35307C1.9112 0.500515 1.48757 0.676274 1.17512 0.988724C0.862676 1.30117 0.686916 1.7248 0.686401 2.16667L0.686401 6.60778C0.686916 7.04965 0.862676 7.47327 1.17512 7.78572C1.48757 8.09817 1.9112 8.27393 2.35307 8.27445H6.79418C7.23605 8.27393 7.65967 8.09817 7.97212 7.78572C8.28457 7.47327 8.46033 7.04965 8.46085 6.60778V2.16667C8.46033 1.7248 8.28457 1.30117 7.97212 0.988724C7.65967 0.676274 7.23605 0.500515 6.79418 0.5L6.79418 0.5ZM7.34974 6.60778C7.34974 6.75513 7.29121 6.89643 7.18702 7.00062C7.08283 7.10481 6.94153 7.16334 6.79418 7.16334H2.35307C2.20573 7.16334 2.06442 7.10481 1.96023 7.00062C1.85604 6.89643 1.79751 6.75513 1.79751 6.60778V2.16667C1.79751 2.01932 1.85604 1.87802 1.96023 1.77383C2.06442 1.66964 2.20573 1.61111 2.35307 1.61111H6.79418C6.94152 1.61111 7.08283 1.66964 7.18702 1.77383C7.2912 1.87802 7.34974 2.01932 7.34974 2.16667L7.34974 6.60778ZM6.79418 10.7256H2.35307C1.9112 10.7261 1.48757 10.9018 1.17512 11.2143C0.862676 11.5267 0.686916 11.9504 0.686401 12.3922L0.686401 16.8333C0.686916 17.2752 0.862676 17.6988 1.17512 18.0113C1.48757 18.3237 1.9112 18.4995 2.35307 18.5H6.79418C7.23605 18.4995 7.65967 18.3237 7.97212 18.0113C8.28457 17.6988 8.46033 17.2752 8.46085 16.8333V12.3922C8.46033 11.9503 8.28457 11.5267 7.97212 11.2143C7.65967 10.9018 7.23605 10.7261 6.79418 10.7256L6.79418 10.7256ZM7.34974 16.8333C7.34974 16.9807 7.29121 17.122 7.18702 17.2262C7.08283 17.3304 6.94153 17.3889 6.79418 17.3889H2.35307C2.20573 17.3889 2.06442 17.3304 1.96023 17.2262C1.85604 17.122 1.79751 16.9807 1.79751 16.8333V12.3922C1.79751 12.2449 1.85604 12.1036 1.96023 11.9994C2.06442 11.8952 2.20573 11.8367 2.35307 11.8367H6.79418C6.94152 11.8367 7.08283 11.8952 7.18702 11.9994C7.2912 12.1036 7.34974 12.2449 7.34974 12.3922L7.34974 16.8333ZM18.3134 11.1389C18.2029 11.1389 18.0969 11.1828 18.0188 11.2609C17.9406 11.3391 17.8967 11.4451 17.8967 11.5556V17.9445C17.8967 18.055 17.9406 18.1609 18.0188 18.2391C18.0969 18.3172 18.2029 18.3611 18.3134 18.3611C18.4239 18.3611 18.5299 18.3172 18.608 18.2391C18.6862 18.1609 18.7301 18.055 18.7301 17.9445V11.5556C18.7301 11.445 18.6862 11.3391 18.608 11.2609C18.5299 11.1828 18.4239 11.1389 18.3134 11.1389V11.1389ZM15.1128 12.8461C15.0023 12.8461 14.8963 12.89 14.8182 12.9682C14.74 13.0463 14.6961 13.1523 14.6961 13.2628V17.9444C14.6961 18.055 14.74 18.1609 14.8182 18.2391C14.8963 18.3172 15.0023 18.3611 15.1128 18.3611C15.2233 18.3611 15.3293 18.3172 15.4074 18.2391C15.4856 18.1609 15.5295 18.055 15.5295 17.9444V13.2628C15.5295 13.1523 15.4856 13.0463 15.4074 12.9681C15.3293 12.89 15.2233 12.8461 15.1128 12.8461V12.8461ZM11.9122 11.5744C11.8017 11.5744 11.6957 11.6183 11.6176 11.6965C11.5395 11.7746 11.4956 11.8806 11.4956 11.9911V17.9444C11.4956 18.055 11.5395 18.1609 11.6176 18.2391C11.6957 18.3172 11.8017 18.3611 11.9122 18.3611C12.0227 18.3611 12.1287 18.3172 12.2069 18.2391C12.285 18.1609 12.3289 18.055 12.3289 17.9444V11.9911C12.3289 11.8806 12.285 11.7746 12.2069 11.6965C12.1287 11.6184 12.0227 11.5745 11.9122 11.5745V11.5744ZM17.3333 0.5H12.8922C12.4504 0.500515 12.0267 0.676274 11.7143 0.988724C11.4018 1.30117 11.2261 1.7248 11.2256 2.16667V6.60778C11.2261 7.04965 11.4018 7.47327 11.7143 7.78572C12.0267 8.09817 12.4504 8.27393 12.8922 8.27445H17.3333C17.7752 8.27393 18.1988 8.09817 18.5113 7.78572C18.8237 7.47327 18.9995 7.04965 19 6.60778V2.16667C18.9995 1.7248 18.8237 1.30117 18.5113 0.988724C18.1988 0.676274 17.7752 0.500515 17.3333 0.5ZM17.8889 6.60778C17.8889 6.75513 17.8304 6.89643 17.7262 7.00062C17.622 7.10481 17.4807 7.16334 17.3333 7.16334H12.8922C12.8193 7.16334 12.747 7.14897 12.6796 7.12105C12.6122 7.09313 12.551 7.05221 12.4994 7.00062C12.4478 6.94903 12.4069 6.88779 12.379 6.82038C12.351 6.75298 12.3367 6.68074 12.3367 6.60778V2.16667C12.3367 2.09371 12.351 2.02147 12.379 1.95406C12.4069 1.88666 12.4478 1.82542 12.4994 1.77383C12.551 1.72224 12.6122 1.68132 12.6796 1.6534C12.747 1.62548 12.8193 1.61111 12.8922 1.61111H17.3333C17.4807 1.61111 17.622 1.66964 17.7262 1.77383C17.8304 1.87802 17.8889 2.01932 17.8889 2.16667V6.60778Z"
                    fill="black"
                  />
                </svg>
              </div> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="ml-[84%] mt-[-43px] p-3">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.04163 7.99996V5.91663C1.04295 4.75671 1.50431 3.64468 2.3245 2.8245C3.14468 2.00431 4.25671 1.54295 5.41663 1.54163H7.49996C7.66538 1.54272 7.82372 1.60892 7.94069 1.72589C8.05767 1.84287 8.12387 2.0012 8.12496 2.16663C8.12387 2.33205 8.05767 2.49039 7.94069 2.60736C7.82372 2.72434 7.66538 2.79053 7.49996 2.79163H5.41663C4.58789 2.79185 3.79316 3.12116 3.20716 3.70716C2.62116 4.29316 2.29185 5.08789 2.29163 5.91663V7.99996C2.29053 8.16538 2.22434 8.32372 2.10736 8.44069C1.99039 8.55767 1.83205 8.62387 1.66663 8.62496C1.5012 8.62387 1.34287 8.55767 1.22589 8.44069C1.10892 8.32372 1.04272 8.16538 1.04163 7.99996Z" fill="black"/>
<path d="M17.7083 7.99996V5.91663C17.7081 5.08789 17.3788 4.29316 16.7928 3.70716C16.2068 3.12116 15.412 2.79185 14.5833 2.79163H12.5C12.3345 2.79053 12.1762 2.72434 12.0592 2.60736C11.9423 2.49039 11.8761 2.33205 11.875 2.16663C11.8761 2.0012 11.9423 1.84287 12.0592 1.72589C12.1762 1.60892 12.3345 1.54272 12.5 1.54163H14.5833C15.7432 1.54295 16.8552 2.00431 17.6754 2.8245C18.4956 3.64468 18.957 4.75671 18.9583 5.91663V7.99996C18.9583 8.16572 18.8924 8.32469 18.7752 8.4419C18.658 8.55911 18.4991 8.62496 18.3333 8.62496C18.1675 8.62496 18.0086 8.55911 17.8914 8.4419C17.7741 8.32469 17.7083 8.16572 17.7083 7.99996ZM13.3333 19.4583C13.1675 19.4583 13.0086 19.3924 12.8914 19.2752C12.7741 19.158 12.7083 18.9991 12.7083 18.8333C12.7083 18.6675 12.7741 18.5086 12.8914 18.3914C13.0086 18.2741 13.1675 18.2083 13.3333 18.2083H14.5833C15.412 18.2081 16.2068 17.8788 16.7928 17.2928C17.3788 16.7068 17.7081 15.912 17.7083 15.0833V13.8333C17.7083 13.6675 17.7741 13.5086 17.8914 13.3914C18.0086 13.2741 18.1675 13.2083 18.3333 13.2083C18.4991 13.2083 18.658 13.2741 18.7752 13.3914C18.8924 13.5086 18.9583 13.6675 18.9583 13.8333V15.0833C18.957 16.2432 18.4956 17.3552 17.6754 18.1754C16.8552 18.9956 15.7432 19.457 14.5833 19.4583H13.3333ZM5.41663 19.4583C4.25671 19.457 3.14468 18.9956 2.3245 18.1754C1.50431 17.3552 1.04295 16.2432 1.04163 15.0833V13C1.04272 12.8345 1.10892 12.6762 1.22589 12.5592C1.34287 12.4423 1.5012 12.3761 1.66663 12.375C1.83205 12.3761 1.99039 12.4423 2.10736 12.5592C2.22434 12.6762 2.29053 12.8345 2.29163 13V15.0833C2.29185 15.912 2.62116 16.7068 3.20716 17.2928C3.79316 17.8788 4.58789 18.2081 5.41663 18.2083H7.49996C7.66572 18.2083 7.82469 18.2741 7.9419 18.3914C8.05911 18.5086 8.12496 18.6675 8.12496 18.8333C8.12496 18.9991 8.05911 19.158 7.9419 19.2752C7.82469 19.3924 7.66572 19.4583 7.49996 19.4583H5.41663ZM7.49996 9.87496H5.83329C5.5812 9.89847 5.32702 9.86611 5.08885 9.7802C4.85069 9.69429 4.63439 9.55692 4.45536 9.37789C4.27633 9.19886 4.13897 8.98256 4.05305 8.7444C3.96714 8.50623 3.93478 8.25205 3.95829 7.99996V6.33329C3.93478 6.0812 3.96714 5.82702 4.05305 5.58885C4.13897 5.35069 4.27633 5.13439 4.45536 4.95536C4.63439 4.77633 4.85069 4.63897 5.08885 4.55305C5.32702 4.46714 5.5812 4.43478 5.83329 4.45829H7.49996C7.75205 4.43478 8.00623 4.46714 8.2444 4.55305C8.48256 4.63897 8.69886 4.77633 8.87789 4.95536C9.05692 5.13439 9.19429 5.35069 9.2802 5.58885C9.36611 5.82702 9.39847 6.0812 9.37496 6.33329V7.99996C9.39847 8.25205 9.36611 8.50623 9.2802 8.7444C9.19429 8.98256 9.05692 9.19886 8.87789 9.37789C8.69886 9.55692 8.48256 9.69429 8.2444 9.7802C8.00623 9.86611 7.75205 9.89847 7.49996 9.87496ZM5.83329 5.70829C5.34246 5.70829 5.20829 5.84246 5.20829 6.33329V7.99996C5.20829 8.49079 5.34246 8.62579 5.83329 8.62579H7.49996C7.99079 8.62496 8.12496 8.49079 8.12496 7.99996V6.33329C8.12496 5.84246 7.99079 5.70829 7.49913 5.70829H5.83329Z" fill="black"/>
<path d="M14.1667 9.87504H12.5C12.2479 9.89855 11.9938 9.86619 11.7556 9.78028C11.5174 9.69436 11.3011 9.557 11.1221 9.37797C10.9431 9.19894 10.8057 8.98264 10.7198 8.74447C10.6339 8.50631 10.6015 8.25213 10.625 8.00004V6.33337C10.6015 6.08127 10.6339 5.8271 10.7198 5.58893C10.8057 5.35077 10.9431 5.13447 11.1221 4.95544C11.3011 4.77641 11.5174 4.63904 11.7556 4.55313C11.9938 4.46721 12.2479 4.43486 12.5 4.45837H14.1667C14.4188 4.43486 14.673 4.46721 14.9111 4.55313C15.1493 4.63904 15.3656 4.77641 15.5446 4.95544C15.7237 5.13447 15.861 5.35077 15.9469 5.58893C16.0329 5.8271 16.0652 6.08127 16.0417 6.33337V8.00004C16.0652 8.25213 16.0329 8.50631 15.9469 8.74447C15.861 8.98264 15.7237 9.19894 15.5446 9.37797C15.3656 9.557 15.1493 9.69436 14.9111 9.78028C14.673 9.86619 14.4188 9.89855 14.1667 9.87504ZM12.5 5.70837C12.0092 5.70837 11.875 5.84254 11.875 6.33337V8.00004C11.875 8.49087 12.0092 8.62587 12.5 8.62587H14.1667C14.6575 8.62504 14.7917 8.49087 14.7917 8.00004V6.33337C14.7917 5.84254 14.6575 5.70837 14.1659 5.70837H12.5ZM7.50004 16.5417H5.83337C5.58127 16.5652 5.3271 16.5329 5.08893 16.4469C4.85077 16.361 4.63447 16.2237 4.45544 16.0446C4.27641 15.8656 4.13904 15.6493 4.05313 15.4111C3.96721 15.173 3.93486 14.9188 3.95837 14.6667V13C3.93486 12.7479 3.96721 12.4938 4.05313 12.2556C4.13904 12.0174 4.27641 11.8011 4.45544 11.6221C4.63447 11.4431 4.85077 11.3057 5.08893 11.2198C5.3271 11.1339 5.58127 11.1015 5.83337 11.125H7.50004C7.75213 11.1015 8.00631 11.1339 8.24447 11.2198C8.48264 11.3057 8.69894 11.4431 8.87797 11.6221C9.057 11.8011 9.19436 12.0174 9.28028 12.2556C9.36619 12.4938 9.39855 12.7479 9.37504 13V14.6667C9.39855 14.9188 9.36619 15.173 9.28028 15.4111C9.19436 15.6493 9.057 15.8656 8.87797 16.0446C8.69894 16.2237 8.48264 16.361 8.24447 16.4469C8.00631 16.5329 7.75213 16.5652 7.50004 16.5417ZM5.83337 12.375C5.34254 12.375 5.20837 12.5092 5.20837 13V14.6667C5.20837 15.1575 5.34254 15.2925 5.83337 15.2925H7.50004C7.99087 15.2917 8.12504 15.1575 8.12504 14.6667V13C8.12504 12.5092 7.99087 12.375 7.4992 12.375H5.83337ZM14.1667 16.5417H12.5C12.2479 16.5652 11.9938 16.5329 11.7556 16.4469C11.5174 16.361 11.3011 16.2237 11.1221 16.0446C10.9431 15.8656 10.8057 15.6493 10.7198 15.4111C10.6339 15.173 10.6015 14.9188 10.625 14.6667V13C10.6015 12.7479 10.6339 12.4938 10.7198 12.2556C10.8057 12.0174 10.9431 11.8011 11.1221 11.6221C11.3011 11.4431 11.5174 11.3057 11.7556 11.2198C11.9938 11.1339 12.2479 11.1015 12.5 11.125H14.1667C14.4188 11.1015 14.673 11.1339 14.9111 11.2198C15.1493 11.3057 15.3656 11.4431 15.5446 11.6221C15.7237 11.8011 15.861 12.0174 15.9469 12.2556C16.0329 12.4938 16.0652 12.7479 16.0417 13V14.6667C16.0652 14.9188 16.0329 15.173 15.9469 15.4111C15.861 15.6493 15.7237 15.8656 15.5446 16.0446C15.3656 16.2237 15.1493 16.361 14.9111 16.4469C14.673 16.5329 14.4188 16.5652 14.1667 16.5417ZM12.5 12.375C12.0092 12.375 11.875 12.5092 11.875 13V14.6667C11.875 15.1575 12.0092 15.2925 12.5 15.2925H14.1667C14.6575 15.2917 14.7917 15.1575 14.7917 14.6667V13C14.7917 12.5092 14.6575 12.375 14.1659 12.375H12.5Z" fill="black"/>
</svg>

                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[470px]">
                  <DropdownMenuLabel>Scan QR</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="w-[440px] h-[409px] bg-gray-300 ml-[10px] mt-3 mb-3">
                      </div>
                  {/* <DropdownMenuItem className="hover:bg-white">
                      <div className="w-[450px] h-[409px] bg-gray-300">
                      </div>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
            </Command>
          </div>
        </div>
        {/* phan phai */}
        <div className="flex justify-between ml-3 w-[100%]">


          <Dialog>
            <DialogTrigger asChild>
              <div className="flex pt-[1px] pl-2 w-[143px] h-[45px] bg-white rounded-sm cursor-pointer">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1654_191)">
                <path d="M15.1875 8.59375H5.8125V6.25001H15.1875V8.59375Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.07812 3.90629C1.07812 3.90629 2.25781 10.6445 2.25781 16.2109" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.98436 13.2813V16.2109M6.98436 13.2813H2.25781V12.1094C2.25781 10.815 3.34621 10.9375 4.64062 10.9375C5.93503 10.9375 6.98436 10.815 6.98436 12.1094V13.2813Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.07812 3.90629C1.07812 3.90629 2.25781 10.6445 2.25781 16.2109" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.98438 13.2813V16.2109" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.9219 3.90629C19.9219 3.90629 18.7422 10.6445 18.7422 16.2109" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.0156 13.2813V16.2109" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.59377V15.625" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.74219 15.625H12.2578" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.7422 13.2812H14.0156V12.1094C14.0156 10.815 15.065 10.9375 16.3594 10.9375C17.6538 10.9375 18.7422 10.815 18.7422 12.1094V13.2812Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1654_191">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                  </div>
                  <p className="text-[14px] font-[400] leading-normal">Set Table</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[1160px] h-[655px]  left-[50%] top-[45%] ">
              <DialogHeader>
                <DialogTitle className="pb-3">Set table</DialogTitle>
                <DialogDescription>
                </DialogDescription>
              </DialogHeader>
                  <div className=" h-full overflow-y-auto scrollbar-none">
                        <div className="w-full h-[43px] bg-[#F5F5F5] py-[10px]">
                              <p className="font-bold text-center">Floor 1</p>
                        </div>
                        <div className="grid grid-cols-5 gap-y-3 ml-[40px] mr-[-40px] mt-3">
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                        </div>
                        <div className="w-full h-[43px] bg-[#F5F5F5] py-[10px] mt-10">
                              <p className="font-bold text-center">Floor 2</p>
                        </div>
                        <div className="grid grid-cols-5 gap-y-3 ml-[40px] mr-[-40px] mt-3">
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                            <SetTable />
                        </div>
                  </div>
              {/* <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter> */}
            </DialogContent>
          </Dialog>

          <div className="">
            <Select>
              <SelectTrigger className="w-[140px] h-[45px] outline-none border-none bg-white">
                <SelectValue placeholder="Sort: A - Z" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
}
export default HeaderNav;