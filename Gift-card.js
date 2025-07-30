const amountSelect = document.getElementById('amount');
const customAmountInput = document.getElementById('customAmount');

amountSelect.addEventListener('change', () => {
  if (amountSelect.value === 'custom') {
    customAmountInput.style.display = 'block';
    customAmountInput.required = true;
  } else {
    customAmountInput.style.display = 'none';
    customAmountInput.required = false;
    customAmountInput.value = '';
  }
});

// می‌تونی اینجا فرم رو هندل کنی (ارسال به سرور، نمایش پیام و ...)
document.getElementById('giftCardForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('فرم کارت هدیه با موفقیت ارسال شد!');
  // اینجا کد ارسال داده‌ها به سرور یا پردازش بعدی رو بنویس
});