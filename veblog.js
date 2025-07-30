// انیمیشن نمایش پست‌ها هنگام اسکرول
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const triggerPoint = windowHeight * 0.85; // وقتی 85٪ صفحه دیده شد

        if (elementTop < triggerPoint) {
            el.classList.add('visible');
        }
    });
}

// دکمه بازگشت به بالا
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    animateOnScroll();

    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// اجرا در اولین لود صفحه
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});