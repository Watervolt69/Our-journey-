// Create stars in the background
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.body;
    const numberOfHearts = 20;
    
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = `${Math.random() * 15 + 10}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.bottom = '-20px';
            heart.style.opacity = '0.7';
            heart.style.zIndex = '-1';
            heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            heart.style.animationDelay = `${Math.random() * 30}s`;
            
            container.appendChild(heart);
        }, i * 300);
    }
    
    // Add float animation
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                transform: translateY(-70vh) rotate(180deg);
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Animate timeline items on scroll
function animateTimelineOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s ease-out';
        observer.observe(item);
    });
}

// Animate memory cards
function animateMemoryCards() {
    const cards = document.querySelectorAll('.animated-card, .quote-card, .gift-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) rotate(-2deg)';
        card.style.transition = 'all 0.8s ease-out';
        observer.observe(card);
    });
}

// Animate airplane
function animateAirplane() {
    const plane = document.querySelector('.plane');
    
    // Initial position
    plane.style.transition = 'left 8s ease-in-out';
    
    // Animation function
    function flyPlane() {
        // Fly from India to Egypt
        setTimeout(() => {
            plane.style.left = '90%';
            plane.style.transform = 'translateY(-50%) rotate(90deg)';
        }, 1000);
        
        // Then fly back from Egypt to India
        setTimeout(() => {
            plane.style.left = '10%';
            plane.style.transform = 'translateY(-50%) rotate(-90deg)';
        }, 9000);
    }
    
    // Start animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                flyPlane();
                setInterval(flyPlane, 16000); // Repeat every 16 seconds
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(document.querySelector('.map-container'));
}

// Add heart background to header
function addHeartBackground() {
    const heartBg = document.querySelector('.heart-bg');
    const heartCount = 10;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.opacity = '0.2';
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        heartBg.appendChild(heart);
    }
}

// Add pulse effect to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('.social-btn, .project-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-5px)';
            button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });
}

// Add glow effect to timeline dots
function addTimelineGlow() {
    const timelineDots = document.querySelectorAll('.timeline-item::after');
    
    // Add CSS animation for glow effect
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
        .timeline-item::after {
            animation: glow 2s infinite alternate;
        }
        
        @keyframes glow {
            0% {
                box-shadow: 0 0 5px var(--primary);
            }
            100% {
                box-shadow: 0 0 15px var(--primary), 0 0 25px var(--primary);
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Add particle effects
function addParticleEffects() {
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particles';
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.zIndex = '-2';
    particleContainer.style.pointerEvents = 'none';
    document.body.appendChild(particleContainer);
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = `${Math.random() * 3 + 1}px`;
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `particleFloat ${Math.random() * 20 + 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-${window.innerHeight}px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Add scroll trigger animation for distance section
function animateDistanceSection() {
    const distanceSection = document.getElementById('distance-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                distanceSection.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(distanceSection);
    
    // Add animation CSS
    const styleSheet = document.createElement('style');
    styleSheet.innerText = `
        #distance-section {
            transform: translateY(50px);
            opacity: 0;
            transition: all 1s ease-out;
        }
        
        #distance-section.active {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(styleSheet);
}

// Initialize all animations
function initializeAnimations() {
    createStars();
    createFloatingHearts();
    animateTimelineOnScroll();
    animateMemoryCards();
    animateAirplane();
    addHeartBackground();
    addButtonEffects();
    addTimelineGlow();
    addParticleEffects();
    animateDistanceSection();
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Run animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Add a special loader animation
function addLoader() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-heart">❤️</div>
            <p>Loading our story...</p>
        </div>
    `;
    
    // Loader styles
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.background = 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)';
    loader.style.display = 'flex';
    loader.style.justifyContent = 'center';
    loader.style.alignItems = 'center';
    loader.style.zIndex = '9999';
    loader.style.transition = 'opacity 1s ease-out';
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.textAlign = 'center';
    
    const loaderHeart = loader.querySelector('.loader-heart');
    loaderHeart.style.fontSize = '5rem';
    loaderHeart.style.animation = 'pulse 1.5s infinite';
    
    document.body.appendChild(loader);
    
    // Hide loader after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 1000);
        }, 2000);
    });
}

// Add the loader
addLoader();