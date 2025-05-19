document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
    }

    // Initialize form submission
    handleFormSubmit('residential-booking-form', 'Your residential waste pickup request has been submitted successfully! We will contact you shortly to confirm your booking.');

    // Add animations to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Form validation
    const form = document.getElementById('residential-booking-form');
    if (form) {
        const phoneInput = form.querySelector('#phone');
        const dateInput = form.querySelector('#pickup-date');

        // Phone number validation
        phoneInput.addEventListener('input', (e) => {
            const phone = e.target.value.replace(/\D/g, '');
            if (phone.length > 10) {
                e.target.value = phone.slice(0, 10);
            }
        });

        // Date validation - prevent past dates
        dateInput.addEventListener('input', (e) => {
            const selectedDate = new Date(e.target.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                e.target.value = '';
                alert('Please select a future date');
            }
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 