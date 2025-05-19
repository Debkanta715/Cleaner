document.addEventListener('DOMContentLoaded', () => {
    // Initialize form submission
    handleFormSubmit('dumpster-booking-form', 'Your dumpster rental request has been submitted successfully! We will contact you shortly to confirm your booking.');

    // Add animations to dumpster cards
    const dumpsterCards = document.querySelectorAll('.dumpster-card');
    dumpsterCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Form validation and business logic
    const form = document.getElementById('dumpster-booking-form');
    if (form) {
        const phoneInput = form.querySelector('#phone');
        const startDateInput = form.querySelector('#start-date');
        const durationInput = form.querySelector('#duration');
        const dumpsterSizeSelect = form.querySelector('#dumpster-size');
        const emailInput = form.querySelector('#email');

        // Phone number validation
        phoneInput.addEventListener('input', (e) => {
            const phone = e.target.value.replace(/\D/g, '');
            if (phone.length > 10) {
                e.target.value = phone.slice(0, 10);
            }
        });

        // Email validation
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // ... validation logic
        });

        // Date validation - prevent past dates
        startDateInput.addEventListener('input', (e) => {
            const selectedDate = new Date(e.target.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                e.target.value = '';
                alert('Please select a future date');
            }
        });

        // Duration validation based on dumpster size
        dumpsterSizeSelect.addEventListener('change', (e) => {
            const size = e.target.value;
            const duration = parseInt(durationInput.value);

            if (size === '10' && duration > 7) {
                durationInput.value = 7;
                alert('10-yard dumpsters can only be rented for up to 7 days');
            } else if (size === '20' && duration > 14) {
                durationInput.value = 14;
                alert('20-yard dumpsters can only be rented for up to 14 days');
            } else if (size === '30' && duration > 30) {
                durationInput.value = 30;
                alert('30-yard dumpsters can only be rented for up to 30 days');
            }
        });

        // Duration input validation
        durationInput.addEventListener('input', (e) => {
            const duration = parseInt(e.target.value);
            const size = dumpsterSizeSelect.value;

            if (duration < 1) {
                e.target.value = 1;
            } else if (size === '10' && duration > 7) {
                e.target.value = 7;
                alert('10-yard dumpsters can only be rented for up to 7 days');
            } else if (size === '20' && duration > 14) {
                e.target.value = 14;
                alert('20-yard dumpsters can only be rented for up to 14 days');
            } else if (size === '30' && duration > 30) {
                e.target.value = 30;
                alert('30-yard dumpsters can only be rented for up to 30 days');
            }
        });

        // Calculate and display estimated price
        function updatePrice() {
            const size = dumpsterSizeSelect.value;
            const duration = parseInt(durationInput.value);
            let basePrice = 0;

            switch (size) {
                case '10':
                    basePrice = 300;
                    break;
                case '20':
                    basePrice = 500;
                    break;
                case '30':
                    basePrice = 800;
                    break;
            }

            const totalPrice = basePrice * duration;
            const priceDisplay = document.getElementById('price-display');
            if (priceDisplay) {
                priceDisplay.textContent = `Estimated Total: $${totalPrice}`;
            }
        }

        dumpsterSizeSelect.addEventListener('change', updatePrice);
        durationInput.addEventListener('input', updatePrice);
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

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
}); 






/*.................*/

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