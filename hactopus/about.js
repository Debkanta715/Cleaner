// Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
let isNavOpen = false;

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    isNavOpen = !isNavOpen;
    
    if (isNavOpen) {
        mainNav.style.display = 'flex';
        // Small delay to ensure display:flex is applied before the transition
        setTimeout(() => {
            mainNav.style.right = '0';
        }, 10);
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mainNav.style.right = '-100%';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        // Wait for transition to complete before hiding
        setTimeout(() => {
            if (!isNavOpen) {
                mainNav.style.display = 'none';
            }
        }, 300);
    }
});

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (isNavOpen && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        isNavOpen = false;
        mainNav.style.right = '-100%';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        setTimeout(() => {
            if (!isNavOpen) {
                mainNav.style.display = 'none';
            }
        }, 300);
    }
});

// Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with actual API endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } catch (error) {
        // Show error message
        alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
        // Reset button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.mission, .vision, .stat-card, .team-member');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation check
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add smooth scrolling for anchor links
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