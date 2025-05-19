document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const modal = document.getElementById('feedback-modal');
    const closeBtn = modal.querySelector('.close');
    const feedbackMessage = document.getElementById('feedback-message');

    // Form validation
    const validateForm = (formData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const serviceType = formData.get('service-type');
        const rating = formData.get('rating');
        const feedback = formData.get('feedback');
        const recommend = formData.get('recommend');

        if (!name || !email || !serviceType || !rating || !feedback || !recommend) {
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return false;
        }

        return true;
    };

    // Handle form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(feedbackForm);
        
        if (!validateForm(formData)) {
            feedbackMessage.textContent = 'Please fill in all fields correctly.';
            modal.style.display = 'block';
            return;
        }

        // Simulate form submission
        const submitBtn = feedbackForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Simulate API call
        setTimeout(() => {
            // Reset form
            feedbackForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Feedback';

            // Show success message
            feedbackMessage.textContent = 'Thank you for your feedback! We appreciate your input.';
            modal.style.display = 'block';

            // Add new testimonial to the list
            addTestimonial(formData);
        }, 1500);
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add new testimonial
    const addTestimonial = (formData) => {
        const testimonialsContainer = document.querySelector('.testimonials-container');
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        const rating = formData.get('rating');
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        
        testimonialCard.innerHTML = `
            <div class="rating">${stars}</div>
            <p class="testimonial-text">"${formData.get('feedback')}"</p>
            <p class="testimonial-author">- ${formData.get('name')}</p>
        `;

        // Add animation
        testimonialCard.style.opacity = '0';
        testimonialCard.style.transform = 'translateY(20px)';
        
        testimonialsContainer.insertBefore(testimonialCard, testimonialsContainer.firstChild);
        
        // Trigger animation
        setTimeout(() => {
            testimonialCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            testimonialCard.style.opacity = '1';
            testimonialCard.style.transform = 'translateY(0)';
        }, 100);
    };

    // Star rating hover effect
    const ratingLabels = document.querySelectorAll('.rating label');
    ratingLabels.forEach(label => {
        label.addEventListener('mouseover', () => {
            const rating = label.getAttribute('for').replace('star', '');
            highlightStars(rating);
        });

        label.addEventListener('mouseout', () => {
            const selectedRating = document.querySelector('.rating input:checked');
            if (selectedRating) {
                highlightStars(selectedRating.value);
            } else {
                resetStars();
            }
        });
    });

    const highlightStars = (rating) => {
        ratingLabels.forEach(label => {
            const starRating = label.getAttribute('for').replace('star', '');
            label.style.color = starRating <= rating ? '#ffd700' : '#ddd';
        });
    };

    const resetStars = () => {
        ratingLabels.forEach(label => {
            label.style.color = '#ddd';
        });
    };

    // Animate testimonials on scroll
    const animateTestimonials = () => {
        const testimonials = document.querySelectorAll('.testimonial-card');
        testimonials.forEach(testimonial => {
            const rect = testimonial.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateTestimonials);
    
    // Trigger initial animation
    animateTestimonials();

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

    // Form submission handling
    const feedbackFormMobile = document.getElementById('feedback-form');
    const feedbackModalMobile = document.getElementById('feedback-modal');
    const closeModalMobile = document.querySelector('.close');

    if (feedbackFormMobile) {
        feedbackFormMobile.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show the modal
            if (feedbackModalMobile) {
                feedbackModalMobile.style.display = 'block';
            }
        });
    }

    // Close modal when clicking the close button
    if (closeModalMobile) {
        closeModalMobile.addEventListener('click', () => {
            if (feedbackModalMobile) {
                feedbackModalMobile.style.display = 'none';
            }
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === feedbackModalMobile) {
            feedbackModalMobile.style.display = 'none';
        }
    });
}); 