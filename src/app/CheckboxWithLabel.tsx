import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  onChange: () => void;
}
// phai tao moi gia props la 1 gia tri de xay dung ham
//void la ham khog tra ve gia tri chi don gian la goi hanh dong tac dong len checkbox
//interface la 1 thuoc tinhs cua type script dung de tao 1 constructor 

const CheckboxWithLabel : React.FC<CheckboxWithLabelProps> = ({ id, label, onChange }) => {
  return (
    <div className="flex w-[100px] h-[36px] bg-white rounded hover:bg-[#71B02F] hover:text-white ml-3 first:ml-0">
      <div className="flex items-center space-x-1">
        <Checkbox
          id={id}
          className="w-5 h-5 ml-1 rounded-full outline-none border-none bg-gray-200"
          onChange={onChange}
        />
        <Label
          htmlFor={id}
          className="text-xs whitespace-nowrap pr-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      </div>
  </div>
  );
};
export default CheckboxWithLabel ;

