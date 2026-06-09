// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Animate menu button
        const icon = mobileMenuButton.querySelector('svg');
        if (icon) {
            icon.style.transform = mobileMenu.classList.contains('hidden') 
                ? 'rotate(0deg)' 
                : 'rotate(90deg)';
        }
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('svg');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// ===========================
// SMOOTH SCROLLING
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
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

// ===========================
// HEADER SCROLL EFFECT
// ===========================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    let scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// TYPING ANIMATION
// ===========================
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            typingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 100);
        } else {
            // Keep the cursor blinking
            typingText.style.borderRight = '3px solid var(--primary-blue)';
        }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 500);
}

// ===========================
// SKILL CARDS STAGGER ANIMATION
// ===========================
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===========================
// PROJECT CARDS REVEAL
// ===========================
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
    projectObserver.observe(card);
});

// ===========================
// CONTACT CARDS ANIMATION
// ===========================
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===========================
// PARALLAX EFFECT FOR BLOBS
// ===========================
window.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===========================
// BUTTON RIPPLE EFFECT
// ===========================
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ===========================
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, opacity: 1 });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

function drawCursorTrail() {
    const canvas = document.getElementById('cursor-trail');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    cursorTrail.forEach((point, index) => {
        const radius = (index / trailLength) * 5;
        const opacity = point.opacity * (index / trailLength);
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${opacity * 0.5})`;
        ctx.fill();
        
        point.opacity *= 0.95;
    });
    
    requestAnimationFrame(drawCursorTrail);
}

// Uncomment to enable cursor trail
// const canvas = document.createElement('canvas');
// canvas.id = 'cursor-trail';
// canvas.style.position = 'fixed';
// canvas.style.top = '0';
// canvas.style.left = '0';
// canvas.style.pointerEvents = 'none';
// canvas.style.zIndex = '9999';
// document.body.appendChild(canvas);
// drawCursorTrail();

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
let ticking = false;

function optimizedScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            highlightNavLink();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', optimizedScroll);

// ===========================
// LOAD ANIMATIONS
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    highlightNavLink();
    
    // Add subtle entrance animation to main elements
    const mainElements = document.querySelectorAll('main > section');
    mainElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ===========================
// THEME PREFERENCE (OPTIONAL)
// ===========================
// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ===========================
// CONSOLE EASTER EGG
// ===========================
console.log(
    '%c👋 Hello, Developer!',
    'color: #F59E0B; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cInterested in the code? Check it out on GitHub!',
    'color: #F43F5E; font-size: 16px;'
);
console.log('%chttps://github.com/thakur-027', 'color: #10B981; font-size: 14px;');
