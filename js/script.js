/**
 * Mahasapak Website - Interactive JavaScript
 * Features: Mobile menu, smooth scroll, form validation, active navigation
 */

// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Change icon
            if (isExpanded) {
                mobileMenuToggle.innerHTML = '✕';
            } else {
                mobileMenuToggle.innerHTML = '☰';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    mobileMenuToggle.innerHTML = '☰';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.innerHTML = '☰';
            }
        });
    }
});

// ============================================
// Active Navigation Highlighting
// ============================================
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = new URL(link.href).pathname;
        
        // Check if current page matches the link
        if (currentPath === linkPath || 
            (currentPath.endsWith('/') && linkPath.endsWith('index.html')) ||
            (currentPath.includes(linkPath.replace('.html', '')))) {
            link.classList.add('active');
        }
    });
    
    // Set home as active if on root
    if (currentPath === '/' || currentPath === '/index.html') {
        const homeLink = document.querySelector('.nav-link[href="index.html"]') || 
                        document.querySelector('.nav-link[href="/"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ============================================
// Smooth Scroll Navigation
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// Form Validation (Contact Form)
// ============================================
function validateForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const formData = {};
        
        // Get all form inputs
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Clear previous errors
            input.classList.remove('error');
            const errorElement = input.nextElementSibling;
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.style.display = 'none';
            }
            
            // Validate required fields
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            }
            // Validate email
            else if (input.type === 'email' && input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    isValid = false;
                    showError(input, 'Please enter a valid email address');
                }
            }
            // Validate phone (optional but if provided should be valid)
            else if (input.type === 'tel' && input.value.trim()) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(input.value.trim())) {
                    isValid = false;
                    showError(input, 'Please enter a valid phone number');
                }
            }
            
            // Store form data
            if (input.name) {
                formData[input.name] = input.value.trim();
            }
        });
        
        if (isValid) {
            // Show success message
            showSuccessMessage(form);
            
            // Reset form
            form.reset();
            
            // In production, you would send data to a server here
            console.log('Form submitted successfully:', formData);
        }
    });
}

function showError(input, message) {
    input.classList.add('error');
    let errorElement = input.nextElementSibling;
    
    if (!errorElement || !errorElement.classList.contains('form-error')) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function showSuccessMessage(form) {
    // Create success message element
    let successMessage = form.querySelector('.success-message');
    
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            background-color: #7CB342;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 600;
            animation: fadeInUp 0.5s ease;
        `;
        form.appendChild(successMessage);
    }
    
    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    successMessage.style.display = 'block';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// Initialize form validation on contact form
document.addEventListener('DOMContentLoaded', function() {
    validateForm('contact-form');
});

// ============================================
// Newsletter Form Validation
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                showNewsletterMessage(this, 'Please enter your email address', 'error');
                return;
            }
            
            if (!emailRegex.test(email)) {
                showNewsletterMessage(this, 'Please enter a valid email address', 'error');
                return;
            }
            
            // Show success message
            showNewsletterMessage(this, 'Thank you for subscribing!', 'success');
            
            // Reset form
            this.reset();
            
            // In production, send to server
            console.log('Newsletter subscription:', email);
        });
    });
});

function showNewsletterMessage(form, message, type) {
    let messageElement = form.querySelector('.newsletter-message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'newsletter-message';
        messageElement.style.cssText = `
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 600;
            animation: fadeIn 0.3s ease;
        `;
        form.appendChild(messageElement);
    }
    
    if (type === 'success') {
        messageElement.style.backgroundColor = '#7CB342';
        messageElement.style.color = 'white';
    } else {
        messageElement.style.backgroundColor = '#d32f2f';
        messageElement.style.color = 'white';
    }
    
    messageElement.textContent = message;
    messageElement.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2D7A4A;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#7CB342';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#2D7A4A';
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Animation on Scroll (Optional Enhancement)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .feature-card, .testimonial-card, .team-member');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ============================================
// Header Scroll Effect
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});

// ============================================
// Utility Functions
// ============================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// Performance Optimization
// ============================================

// Lazy load images if any (optional)
// Note: Modern browsers support native lazy loading via the loading="lazy" attribute
// No additional JavaScript required for browsers that support it
document.addEventListener('DOMContentLoaded', function() {
    // For older browsers that don't support native lazy loading,
    // images would need intersection observer or similar polyfill
    // Since we're using native lazy loading, this is just a placeholder
});

// Log page load performance
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    }
});
