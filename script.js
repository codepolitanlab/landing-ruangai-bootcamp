// Simplified JavaScript for AI Video Creator Bootcamp Landing Page

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(function (faqItem) {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href !== '#' && href !== '#daftar') {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});
