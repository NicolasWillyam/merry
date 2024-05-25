import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
interface StoryProps {
  id: string;
  first_title: string;
  second_title: string;
  content: string;
  imageURL: string;
}

const StoryCard: React.FC<StoryProps> = (prop) => {
  return (
    <div className="w-full grid grid-cols-1 items-center gap-8 px-4">
      <div className="w-fit block">
        <div className="flex gap-4 items-center">
          <Image
            src={prop.imageURL}
            alt="image"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="">
            <p className="font-medium text-lg">{prop.first_title}</p>
            <p className="text-[#666666]">{prop.second_title}</p>
          </div>
        </div>
        <p className="text-regular text-[15px] text-[#313131] mt-8">
          {'"'}
          {prop.content}
          {'"'}
        </p>
        <p className="font-medium mt-8">26 March 2024</p>
      </div>
    </div>
  );
};

export default StoryCard;
