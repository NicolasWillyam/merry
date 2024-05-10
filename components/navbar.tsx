import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center mt-5 px-5">
      <Image src={"/logo.svg"} alt="logo" width={90} height={30} />
      <ul className="font-regular text-[#666666] text-sm gap-8 hidden sm:flex">
        <li className="cursor-pointer text-[#001064]">Home</li>
        <li className="cursor-pointer hover:underline underline-offset-4 hover:text-[#001064]">
          Giới thiệu
        </li>
        <li className="cursor-pointer hover:underline underline-offset-4 hover:text-[#001064]">
          Sứ mệnh & Tầm nhìn
        </li>
        <li className="cursor-pointer hover:underline underline-offset-4 hover:text-[#001064]">
          Khóa học
        </li>
        <li className="cursor-pointer hover:underline underline-offset-4 hover:text-[#001064]">
          Giảng viên
        </li>
        <li className="cursor-pointer hover:underline underline-offset-4 hover:text-[#001064]">
          Thành tích
        </li>
      </ul>
      <Button variant="default" size="default">
        Sign Up
      </Button>
    </div>
  );
}

export default Navbar;
