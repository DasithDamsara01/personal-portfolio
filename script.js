gsap.registerPlugin(ScrollTrigger);

// Custom Cursor (Only on Desktop)
if(window.innerWidth > 768) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, .theme-btn, input, textarea');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// Hero Animations (මුලින්ම Text එක මතු වන animation එක)
gsap.from('.reveal-text', {
    y: 150,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.2
});

gsap.from('.fade-in', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    stagger: 0.2
});

// Reveal Titles & Cards on Scroll (පහළට Scroll කරද්දී Elements මතු වීම)
const revealElements = document.querySelectorAll('.reveal-title, .skill-card, .project-card, .timeline-item, .contact-form');
revealElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 90%", // Screen එකේ 90% කට ආවම සජීවීකරණය පටන් ගනී
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Light / Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});
