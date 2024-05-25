"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeadTitle from "./head-title";
import { Menu } from "lucide-react";

interface MenuItem {
  label: string;
  id: string;
}

const MenuProps: MenuItem[] = [
  { label: "Giới thiệu", id: "#about" },
  { label: "Sứ mệnh & Tầm nhìn", id: "#missions" },
  { label: "Khóa học", id: "#courses" },
  { label: "Giảng viên", id: "#teachers" },
  { label: "Feedback", id: "#feedbacks" },
];

function Navbar() {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => {
    if (state == false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="w-full fixed top-0 z-10">
      <div className="block bg-white ">
        <HeadTitle />
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-5 shadow-sm">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" width={120} height={36} />
          </Link>
          <ul className="font-regular text-[#666666] text-[15px] gap-8 hidden sm:flex">
            {MenuProps.map((i) => (
              <Link key={i.id} href={i.id}>
                <li className="cursor-pointer hover:text-[#001064]">
                  {i.label}
                </li>
              </Link>
            ))}
            ;
          </ul>
          <div className="flex items-center gap-4">
            <Button variant="default" size="default">
              Sign Up
            </Button>
            <Menu className="sm:hidden" onClick={handleClick} />
          </div>
        </div>
      </div>

      <div
        style={{ display: state ? "block" : "none" }}
        className="pt-4 pb-8 shadow-md rounded-b-3xl  bg-white border-t-[1px] sm:hidden"
      >
        <ul className="font-regular text-[#666666] text-base gap-8 pl-6">
          {MenuProps.map((i) => (
            <Link key={i.id} href={i.id} onClick={handleClick}>
              <li className="cursor-pointer hover:text-[#001064] py-3">
                {i.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
