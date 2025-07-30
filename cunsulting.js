document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input, select, textarea");

  // انیمیشن فوکوس روی فیلدها
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#e60050";
      input.style.boxShadow = "0 0 5px rgba(230, 0, 80, 0.4)";
    });

    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";
    });
  });

  // افکت hover روی دکمه
  const btn = document.querySelector(".submit-button");
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 0 10px rgba(230, 0, 80, 0.4)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });

  // ارسال فرم و نمایش پیام موفقیت
  const form = document.querySelector(".consulting-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // جلوگیری از ارسال واقعی
    form.reset();

    const msg = document.createElement("p");
    msg.textContent = "✅ درخواست مشاوره با موفقیت ثبت شد!";
    msg.style.color = "#27ae60";
    msg.style.marginTop = "20px";
    msg.style.textAlign = "center";
    msg.style.fontWeight = "bold";

    form.appendChild(msg);
  });
});