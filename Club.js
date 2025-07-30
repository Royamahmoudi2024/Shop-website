const form = document.getElementById('joinForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', e => {
    e.preventDefault();

    // شبیه‌سازی ثبت نام موفق (مثلا ارسال داده به سرور)
    successMsg.classList.remove('hidden');

    // پاک کردن فرم بعد از ثبت نام
    form.reset();

    // مخفی کردن پیام بعد از 4 ثانیه
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 4000);
});