"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

function EmailResponse() {
  const formRef = useRef<HTMLFormElement>(null);

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
            alert("Thank you! Your form is submitted successfully.");
            window.location.reload();
          } else {
            console.error("Form submission failed:", response.statusText);
          }
        } catch (error) {
          //   console.error("Error!", error.message);
        }
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup the event listener on unmount
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <div>
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
            className=" outline-none ml-4"
            required
          />
          <Button type="submit" variant="default" size="default">
            Gửi
          </Button>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default EmailResponse;
