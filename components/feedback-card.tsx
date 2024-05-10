import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
interface FeedbackProps {
  name: string;
  role: string;
  content: string;
  imageURL: string;
  time: string;
}

const FeedbackCard: React.FC<FeedbackProps> = (prop) => {
  return (
    <div className="w-full items-center gap-8 p-6 border-2 rounded-2xl cursor-pointer hover:border-[#9747FF] mb-4">
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
            <p className="font-medium text-lg">{prop.name}</p>
            <p className="text-[#666666]">{prop.role}</p>
          </div>
        </div>
        <p className="text-regular text-[15px] text-[#313131] mt-8">
          {'"'}
          {prop.content}
          {'"'}
        </p>
        <p className="font-medium mt-8">{prop.time}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
