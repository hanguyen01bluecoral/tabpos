import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AddNote() {
    return (
        <div className="w-[770px] h-[222px] rounded-lg mx-auto bg-white">
        <div className="w-[735px] h-[39px] bg-white mx-4 mt-5  absolute flex justify-between">
          <p className="pt-2 text-black font-bold text-base">Note</p>
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

        <div className="w-[735px] h-[41px] mx-4 mt-[70px]  absolute flex justify-between">
          <Textarea placeholder="Enter" />
        </div>

        <div className="w-[735px] h-[41px] mx-4 mt-[165px]  absolute flex justify-between">
            <Button className="w-[735px] rounded-md">Add</Button>
        </div>
      </div>
    );
  }