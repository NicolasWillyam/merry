import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
interface TeacherProps {
  id: string;
  first_title: string;
  second_title: string;
  content: string;
  imageURL: string;
}

const TeacherCard: React.FC<TeacherProps> = (prop) => {
  return (
    <div className="w-full grid sm:grid-cols-2 items-center gap-8 px-8">
      <div className="w-fit block">
        <p className="uppercase font-semibold text-[#FF6099]">
          {prop.first_title}
        </p>
        <p className="text-3xl font-semibold mt-4 mb-8">{prop.second_title}</p>
        <p className="text-regular text-[15px] text-[#666666]">
          {prop.content}
        </p>
      </div>
      <Image
        className="ml-auto rounded-3xl"
        src={prop.imageURL}
        alt="image"
        width={320}
        height={320}
      />
    </div>
  );
};

export default TeacherCard;
