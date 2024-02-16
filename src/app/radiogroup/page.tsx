"use client"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Radio() {
    return(
        <div className="ml-[100px] mt-[100px] ">
            <RadioGroup defaultValue="comfortable" className="flex">
                <div className="flex items-center space-x-2 ">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="r4" id="r4" />
                    <Label htmlFor="r4"> Day la r4</Label>
                </div>
            </RadioGroup>
        </div>
    );
}