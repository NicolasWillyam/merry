import Image from "next/image";
import React from "react";

function footer() {
  return (
    <div className="max-w-6xl sm:flex justify-between mx-auto mt-16 sm:mt-32 px-4 sm:px-0">
      <div className="block max-w-[340px]">
        <Image alt="image" src={"/logo.svg"} width={120} height={40} />
        <p className="text-sm text-[#313131] mt-4">
          Sứ mệnh- Giúp người học xây dựng tư duy đúng về việc học và xây dựng
          thói quen học tập tốt thông qua trải nghiệm học Tiếng Anh
        </p>
      </div>
      <div className="sm:w-3/5 grid sm:grid-cols-3 grid-cols-2 sm:gap-16 gap-8 sm:mt-0 mt-8">
        <ul>
          <li className="font-semibold mb-4">Courses</li>
          <li className="text-[#666666] text-sm">IELTS 0-6.5</li>
          <li className="text-[#666666] text-sm">TOEIC 0-800</li>
          <li className="text-[#666666] text-sm">KID ENGLISH</li>
        </ul>

        <ul>
          <li className="font-semibold mb-4">Phone Number</li>
          <li className="text-[#666666] text-sm">(+84) 555-0467</li>
          <li className="text-[#666666] text-sm">(+84) 555-0467</li>
        </ul>
        <ul>
          <li className="font-semibold mb-4">Address</li>
          <li className="text-[#666666] text-sm">
            Number 3891 Ranchview Dr. Richardson, California{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
