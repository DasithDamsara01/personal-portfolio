gsap.registerPlugin(ScrollTrigger);

$(document).ready(function() {
    // 1. Particleground Background එක ක්‍රියාත්මක කිරීම
    $('#particles').particleground({
        dotColor: '#999999',
        lineColor: '#999999',
        density: 12000,
        particleRadius: 4,
        lineWidth: 0.6,
        proximity: 100,
        parallax: true,
        parallaxMultiplier: 5
    });

    // 2. Custom Cursor Animation (Only on Desktop)
    if(window.innerWidth > 768) {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        const links = document.querySelectorAll('a, .theme-btn');

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

    // 3. Hero Animations (අකුරු මතුවන Animation එක)
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

    // 4. Reveal Titles on Scroll
    const revealTitles = document.querySelectorAll('.reveal-title');
    revealTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // 5. Light / Dark Mode Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
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
    }
});
