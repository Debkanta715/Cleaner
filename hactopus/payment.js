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

    // Payment form handling
    const paymentForm = document.getElementById('payment-form');
    const paymentModal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close');

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show the modal
            if (paymentModal) {
                paymentModal.style.display = 'block';
            }
        });
    }

    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (paymentModal) {
                paymentModal.style.display = 'none';
            }
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });

    // Card number formatting
    const cardInput = document.getElementById('card-number');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) {
                value = value.slice(0, 16);
            }
            e.target.value = value.replace(/(\d{4})/g, '$1 ').trim();
        });
    }

    // Expiry date formatting
    const expiryInput = document.getElementById('expiry-date');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) {
                value = value.slice(0, 4);
            }
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
            e.target.value = value;
        });
    }

    // CVV validation
    const cvvInput = document.getElementById('cvv');
    cvvInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });

    // Amount validation
    const amountInput = document.getElementById('amount');
    amountInput.addEventListener('input', (e) => {
        let value = e.target.value;
        if (value < 0) {
            e.target.value = 0;
        }
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate card number
        const cardNumber = cardInput.value.replace(/\s/g, '');
        if (cardNumber.length !== 16) {
            alert('Please enter a valid 16-digit card number');
            return;
        }

        // Validate expiry date
        const expiry = expiryInput.value;
        if (!expiry.match(/^\d{2}\/\d{2}$/)) {
            alert('Please enter a valid expiry date (MM/YY)');
            return;
        }

        // Validate CVV
        if (cvvInput.value.length !== 3) {
            alert('Please enter a valid 3-digit CVV');
            return;
        }

        // Simulate payment processing
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Show success message
            const modal = document.getElementById('payment-status-modal');
            const message = modal.querySelector('#payment-message');
            message.textContent = 'Payment processed successfully! A receipt has been sent to your email.';
            modal.style.display = 'block';

            // Reset form
            form.reset();
        } catch (error) {
            alert('There was an error processing your payment. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Make Payment';
        }
    });

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
}); 