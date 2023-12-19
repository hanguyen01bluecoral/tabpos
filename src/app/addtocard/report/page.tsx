export default function ReportComponent() {
    return (
        <div className="w-[570px] h-[535px] bg-white border mx-auto rounded-lg">
        <div className="w-[535px] h-[39px] bg-white mx-4 mt-5 border-b-[1px]  absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-base">Today’s profit</p>
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

        <div className="w-[535px] h-[39px] bg-white mx-4 mt-[65px] border-b-[1px]  absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-sm">Opening time</p>
          <p className="pt-2 text-black font-[400] text-sm">12/12/2022</p>
        </div>

        <div className="w-[535px] h-[39px] bg-white mx-4 mt-[105px]   absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-sm">Cashiers</p>
          <p className="pt-2 text-black font-[400] text-sm">POS Cashier 1</p>
        </div>

        <div className="w-[535px] h-[303px] bg-[#585b5c]] mx-4 mt-[145px]   absolute flex justify-between">
          <div className="w-[505px] h-[39px] mx-4 mt-[10px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Order</p>
            <p className="pt-2 text-black font-[400] text-sm">10</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[40px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Products</p>
            <p className="pt-2 text-black font-[400] text-sm">22</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[70px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Cash in hand</p>
            <p className="pt-2 text-black font-[400] text-sm">124.985.000đ</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[100px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Check payments</p>
            <p className="pt-2 text-black font-[400] text-sm">124.985.000đ</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[130px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Cash on delivery</p>
            <p className="pt-2 text-black font-[400] text-sm">85.000đ</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[160px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Paypal</p>
            <p className="pt-2 text-black font-[400] text-sm">985.000đ</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[190px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Cash</p>
            <p className="pt-2 text-black font-[400] text-sm">35.000đ</p>
          </div>
          <div className="w-[505px] h-[39px] mx-4 mt-[220px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Chip and pin</p>
            <p className="pt-2 text-black font-[400] text-sm">230.000đ</p>
          </div>
          <div className="w-[505px] h-[39px]  mx-4 mt-[250px]   absolute flex justify-between">
            <p className="pt-2 text-black font-bold text-sm">Net Sales</p>
            <p className="pt-2 text-black font-[400] text-sm">310.000đ</p>
          </div>
        </div>

        <div className="w-[535px] h-[39px] bg-white mx-4 mt-[440px]   absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-sm">Total</p>
          <p className="pt-2 text-[#71B02F] font-[600]  text-sm">124.985.000đ</p>
        </div>

        <div className="w-[535px] h-[39px] bg-white mx-4 mt-[470px]   absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-sm">Cash total</p>
          <p className="pt-2 text-[#52BD94] font-[600]  text-sm">124.985.000đ</p>
        </div>
      </div>
    );
  }