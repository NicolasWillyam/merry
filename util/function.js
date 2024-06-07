const scriptURL =
  "https://script.google.com/macros/s/AKfycby3-CzhymAPle6_cs7ffJgzi77S2fAWWelgR4tTjdU_ronJsML6YZDLYQmi9s0SIQ8/exec	";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
