import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ContentProps {
  id: string;
  first_title: string;
  second_title: string;
  content: string;
  imageURL: string;
}

const ContentCard: React.FC<ContentProps> = (prop) => {
  if (prop.id == "0") {
    return (
      <div className="w-full grid sm:grid-cols-2 items-center gap-8 sm:gap-0">
        <div className="w-fit block">
          <p className="uppercase font-semibold text-[#FF6099]">
            {prop.first_title}
          </p>
          <p className="text-3xl font-semibold mt-4 mb-8">
            {prop.second_title}
          </p>
          <p className="text-regular text-[15px] text-[#666666]">
            {prop.content}
          </p>
          <Link href={"https://web.facebook.com/profile.php?id=61559203776992"}>
            <Button className="mt-8">Register Now</Button>
          </Link>
        </div>
        <Image
          className="ml-auto"
          src={prop.imageURL}
          alt="image"
          width={360}
          height={360}
        />
      </div>
    );
  } else {
    return (
      <div className="w-full grid sm:grid-cols-2 items-center gap-8 sm:gap-0">
        <Image
          className="mx-auto sm:mr-auto"
          src={prop.imageURL}
          alt="image"
          width={360}
          height={360}
        />
        <div className="w-fit block">
          <p className="uppercase font-semibold text-[#FF6099]">
            {prop.first_title}
          </p>
          <p className="text-3xl font-semibold mt-4 mb-8">
            {prop.second_title}
          </p>
          <p className="text-regular text-[15px] text-[#666666]">
            {prop.content}
          </p>
          <Link href={"https://web.facebook.com/profile.php?id=61559203776992"}>
            <Button className="mt-8">Register Now</Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default ContentCard;
