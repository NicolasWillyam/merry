import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
interface CourseProps {
  id: string;
  first_title: string;
  second_title: string;
  content: string;
  imageURL: string;
}

const CourseCard: React.FC<CourseProps> = (prop) => {
  return (
    <div className="w-full grid sm:grid-cols-2 items-center gap-8 px-6">
      <Image
        className="mx-auto"
        src={prop.imageURL}
        alt="image"
        width={420}
        height={420}
      />
      <div className="w-fit block">
        <p className="uppercase font-semibold text-[#FF6099]">
          {prop.first_title}
        </p>
        <p className="text-3xl font-semibold mt-4 mb-8">{prop.second_title}</p>
        <p className="text-regular text-[15px] text-[#666666]">
          {prop.content}
        </p>

        <div className="w-fit flex items-center mt-16 gap-8">
          <Button variant="default" size="default">
            Register Now
          </Button>
          <Link href={"https://web.facebook.com/profile.php?id=61559203776992"}>
            <div className="flex gap-2 items-center">
              <Image
                src={"/play-icon.svg"}
                alt="play-icon"
                width={38}
                height={38}
              />
              <p className="font-medium">Watch Videos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
