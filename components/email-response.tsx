"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function EmailResponse() {
  const { width, height } = useWindowSize();
  const formRef = useRef<HTMLFormElement>(null);

  const [clicked, setClicked] = useState<Boolean>(false);
  const [filled, setFilled] = useState<String>("");

  useEffect(() => {
    const form = formRef.current;

    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
          });
          if (response.ok) {
            // alert("Thank you! Your form is submitted successfully.");
          } else {
            console.error("Form submission failed:", response.statusText);
          }
        } catch (error) {
          //   console.error("Error!", error.message);
        }
      };
      // window.location.reload();

      form.addEventListener("submit", handleSubmit);

      // Cleanup the event listener on unmount
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const submitHandle = () => {
    if (emailInputRef.current) {
      const emailValue = emailInputRef.current.value;
      if (!emailValue) {
        console.log("Email input is empty or null");
        // You can show an error message to the user or handle this case as needed
      } else {
        console.log("Email:", emailValue);
        setClicked(true);
        setFilled(
          "Cảm ơn " +
            emailValue +
            ", bạn sẽ nhận được những thông tin mới nhất từ MERRY "
        );
        setTimeout(() => {
          setClicked(false);
          setFilled("");
          window.location.reload();
        }, 5000);
        // Perform any additional actions with the email value, like sending it to an API
      }
    }
  };

  return (
    <section id="email" className="relative">
      {clicked && (
        <Confetti
          width={width}
          height={height}
          tweenDuration={5000}
          className="absolute -mt-32 left-0"
        />
      )}
      <div className="max-w-6xl mx-auto my-32  bg-[#181B3E] p-16 text-center sm:rounded-3xl">
        <div className="sm:w-1/2 mx-auto">
          <p className="text-2xl sm:text-4xl font-semibold text-white">
            Đăng kí để nhận thông tin mới nhất từ
            <span className="text-[#E54981]"> MERRY</span>
          </p>
          <p className=" my-4 sm:my-8 italic  text-white">{filled}</p>

          <div className="block">
            <div className="p-1 flex bg-white  w-full rounded-full">
              <form
                ref={formRef}
                action="https://sheetdb.io/api/v1/pupw5iq9jx88a"
                method="post"
                id="sheetdb-form"
                className="w-full  flex justify-between  "
              >
                <input
                  type="email"
                  placeholder="Nhập Email"
                  name="data[Email]"
                  ref={emailInputRef}
                  className="w-full outline-none mx-4"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  onClick={submitHandle}
                >
                  Gửi
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailResponse;
