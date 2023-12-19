import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Checkout() {
  return (
    <div className="w-[670px] h-[690px] border mx-auto rounded-lg">
    <div className="w-[635px] h-[39px] bg-white mx-4 mt-5 border-b-[1px]  absolute flex justify-between">
      <p className="pt-2 text-black font-bold text-base">Payment</p>
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
      <div className="w-[635px] h-[39px]  mx-4 mt-[65px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">Payment Method</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[635px] h-[56px]  mx-4 mt-[103px]  absolute  flex ">
        <div className="h-full bg-white border  rounded-sm w-[153px] ml-0 pl-0 hover:bg-[#71B02F] hover:text-white">
          <svg
            className="ml-2 mt-2 hover:text-white"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
              fill="black"
            />
          </svg>
          <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
            Clear all items
          </p>
        </div>
        
        <div className="h-full bg-white border  rounded-sm w-[153px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
          <svg className="ml-2 mt-2" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
          ATM / Credit Card
          </p>
        </div>

        <div className="h-full bg-white border  rounded-sm w-[153px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
          <svg
            className="ml-2 mt-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
              fill="black"
            />
          </svg>
          <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
          Paypal
          </p>
        </div>

        <div className="h-full bg-white border  rounded-sm w-[153px] ml-2 pl-0 hover:bg-[#71B02F] hover:text-white">
          <svg
            className="ml-2 mt-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8334 3.33325C11.3242 3.33319 11.8042 3.4776 12.2135 3.74849C12.6228 4.01938 12.9433 4.40477 13.135 4.85659L13.1917 4.99992H14.2892C14.7252 4.99995 15.1537 5.11402 15.532 5.33081C15.9103 5.5476 16.2254 5.85957 16.4459 6.23575L16.525 6.38159L18.07 9.47242C18.2144 9.76102 18.3016 10.0749 18.3267 10.3966L18.3342 10.5899V12.4999C18.3343 13.0181 18.1734 13.5235 17.8738 13.9463C17.5741 14.369 17.1506 14.6883 16.6617 14.8599C16.6968 15.3006 16.5555 15.7372 16.2687 16.0737C15.9819 16.4102 15.5732 16.6189 15.1325 16.6541C14.6918 16.6892 14.2552 16.5479 13.9187 16.2611C13.5823 15.9743 13.3735 15.5656 13.3384 15.1249L13.3334 14.9999H7.50002C7.50002 15.4419 7.32443 15.8659 7.01186 16.1784C6.6993 16.491 6.27538 16.6666 5.83335 16.6666C5.39133 16.6666 4.9674 16.491 4.65484 16.1784C4.34228 15.8659 4.16669 15.4419 4.16669 14.9999C3.52901 15 2.91542 14.7563 2.45147 14.3188C1.98751 13.8814 1.70826 13.2832 1.67085 12.6466L1.66669 12.4999V5.83325C1.66665 5.19558 1.91029 4.58199 2.34776 4.11803C2.78522 3.65408 3.38344 3.37483 4.02002 3.33742L4.16669 3.33325H10.8334ZM15.4167 14.9999H14.5834C14.5834 15.1104 14.6273 15.2164 14.7054 15.2945C14.7835 15.3727 14.8895 15.4166 15 15.4166C15.1105 15.4166 15.2165 15.3727 15.2946 15.2945C15.3728 15.2164 15.4167 15.1104 15.4167 14.9999ZM6.25002 14.9999H5.41669C5.4165 15.104 5.45529 15.2045 5.52544 15.2814C5.59559 15.3583 5.69201 15.4062 5.79571 15.4156C5.8994 15.4251 6.00286 15.3953 6.08571 15.3322C6.16857 15.2692 6.2248 15.1774 6.24335 15.0749L6.25002 14.9999ZM16.8317 9.79159H13.3334V13.7499L16.075 13.7266C16.3592 13.6706 16.6151 13.5177 16.799 13.2939C16.9829 13.0702 17.0834 12.7895 17.0834 12.4999V10.5899C17.0833 10.3961 17.0383 10.205 16.9517 10.0316L16.8317 9.79159ZM10.8334 4.58325H4.16669C3.83517 4.58325 3.51722 4.71495 3.2828 4.94937C3.04838 5.18379 2.91669 5.50173 2.91669 5.83325V12.4999C2.91669 12.8314 3.04838 13.1494 3.2828 13.3838C3.51722 13.6182 3.83517 13.7499 4.16669 13.7499H12.0834V5.83325C12.0834 5.50173 11.9517 5.18379 11.7172 4.94937C11.4828 4.71495 11.1649 4.58325 10.8334 4.58325ZM14.2884 6.24992H13.3334V8.54159H16.2067L15.4067 6.94159C15.3118 6.75169 15.1702 6.58909 14.9951 6.4691C14.82 6.34911 14.6172 6.27569 14.4059 6.25575L14.2884 6.24992Z"
              fill="black"
            />
          </svg>
          <p className="text-xs font-normal text-[#222222] ml-2 mt-1 hover:text-white">
          ATM
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[635px] h-[39px]  mx-4 mt-[160px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">Paid</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[635px] h-[39px]  mx-4 mt-[195px]  absolute ">
      <Input type="email" placeholder="700.000" className="bg-[#F7F9FB]" />
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[635px] h-[39px]  mx-4 mt-[240px]  absolute ">
        <p className="pt-2 text-black font-bold text-sm">Popular tendered</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[635px] h-[39px]  mx-4 mt-[276px]  absolute  flex justify-between">
      <Input type="email" placeholder="700.000đ" className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center" />
      <Input type="email" placeholder="800.000đ" className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center" />
      <Input type="email" placeholder="1.000.000đ" className="bg-[#F7F9FB] w-[150px] mr-3 placeholder:text-center" />
      <Input type="email" placeholder="2.000.000đ" className="bg-[#F7F9FB] w-[150px] placeholder:text-center" />
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[205px] h-[39px]  mx-4 mt-[320px]   absolute ">
        <p className="pt-2 text-black font-bold text-sm">
        Amount to pay
        </p>
      </div>
      <div className="w-[205px] h-[39px]  ml-[233px] mt-[320px]   absolute ">
        <p className="pt-2 text-black font-bold text-sm">
        Paid
        </p>
      </div>
      <div className="w-[205px] h-[39px]  ml-[450px] mt-[320px]   absolute ">
        <p className="pt-2 text-black font-bold text-sm">Change</p>
      </div>
    </div>

    <div className="flex justify-between ">
      <div className="w-[205px] h-[39px]  mx-4 mt-[355px]   absolute ">
          <Input disabled  type="email" placeholder="500.000đ" className="text-base font-bold text-right placeholder:text-[#71B02F] bg-[#E7F3DA]"/>
      </div>
      <div className="w-[205px] h-[39px]  ml-[233px] mt-[355px]   absolute ">
          <Input disabled  type="email" placeholder="700.000đ" className="text-base font-bold text-right placeholder:text-black bg-[#E9EEF3]"/>
      </div>
      <div className="w-[205px] h-[39px]  ml-[450px] mt-[355px]   absolute ">
          <Input disabled  type="email" placeholder="200.000đ" className="text-base font-bold text-right placeholder:text-[#ee9d67] bg-[#f3ebd9]"/>
      </div>
    </div>

    <div className="w-[635px] h-[243px]  mx-4 mt-[420px]   absolute rounded-lg">
      <div className=" rounded-lg">
        <Button className="w-[124px] h-[60px] rounded-tl-lg border bg-white text-black hover:text-white">
          1
        </Button>
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          2
        </Button>
        <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          3
        </Button>
        <Button className="w-[260px] h-[60px] text-sm font-[300] rounded-tr-lg border bg-white text-black hover:text-white">
          Clear
        </Button>
      </div>
      <div className=" rounded-lg flex">
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          4
        </Button>
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          5
        </Button>
        <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          6
        </Button>
        <Button className="w-[260px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
      <div className=" rounded-lg">
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          7
        </Button>
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          8
        </Button>
        <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          9
        </Button>
        <Button className="w-[260px] h-[60px] text-sm rounded-none border bg-white text-black hover:text-white">
        PAY & PRINT
        </Button>
      </div>
      <div className=" rounded-lg">
        <Button className="w-[124px] h-[60px] rounded-bl-lg border bg-white text-black hover:text-white">
          0
        </Button>
        <Button className="w-[124px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          .
        </Button>
        <Button className="w-[125px] h-[60px] rounded-none border bg-white text-black hover:text-white">
          00
        </Button>
        <Button className="w-[260px] h-[60px] rounded-br-lg border text-black bg-[#F5F5F5] hover:text-white">
          BACK
        </Button>
      </div>
    </div>
  </div>
  );
}