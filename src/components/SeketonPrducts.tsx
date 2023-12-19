import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

export default function SeketonProducts() {
    return(
        <div className="w-[735px] h-9 mt-5 flex justify-between">
        <div className="flex  w-[90px] h-[36px]">
            <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[110px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[90px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[110px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[90px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[90px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
        <div className="flex  w-[90px] h-[36px]  rounded-lg ">
        <Avatar className="text-center items-center w-5 h-5">
              <Skeleton  className="w-5 h-5 rounded-full"/>
              <Skeleton></Skeleton>
            </Avatar>
          <Skeleton className="ml-2 text-xs mt-3 whitespace-nowrap" />All Items
        </div>
      </div>
    );
}