(() => {
    'use strict';

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => [...document.querySelectorAll(sel)];

    // ── 1. BACKGROUND EFFECT (THREE.JS) ──
    class NeuralBackground {
        constructor() {
            this.canvas = $('#three-canvas');
            if (!this.canvas) return;
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.position.z = 30;

            this.initParticles();
            window.addEventListener('resize', () => this.onWindowResize());
            this.animate();
        }

        initParticles() {
            const count = 70;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);

            for (let i = 0; i < count * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 50;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({
                color: document.body.getAttribute('data-theme') === 'light' ? 0x6d28d9 : 0x7c3aed,
                size: 0.4,
                transparent: true,
                opacity: 0.6
            });

            this.points = new THREE.Points(geometry, material);
            this.scene.add(this.points);
        }

        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }

        animate() {
            requestAnimationFrame(() => this.animate());
            if (this.points) {
                this.points.rotation.y += 0.001;
                this.points.rotation.x += 0.0005;
            }
            this.renderer.render(this.scene, this.camera);
        }
    }

    // ── 2. CURSOR FOLLOW GLOW ──
    function initCursorGlow() {
        const glow = $('#cursor-glow');
        if (!glow) return;
        window.addEventListener('mousemove', (e) => {
            gsap.to(glow, { left: e.clientX, top: e.clientY, duration: 0.5, ease: 'power2.out' });
        });
    }

    // ── 3. TYPING EFFECT ──
    function initTypingAnimation() {
        const el = $('#typing-text');
        if (!el) return;
        const words = ["Graphic Designer", "Illustrator", "Branding Expert"];
        let wordIdx = 0, charIdx = 0, isDeleting = false;

        function type() {
            const current = words[wordIdx];
            if (isDeleting) {
                el.textContent = current.substring(0, charIdx - 1);
                charIdx--;
            } else {
                el.textContent = current.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIdx === current.length) {
                typeSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // ── 4. NAVBAR STICKY & HAMBURGER ──
    function initNavbar() {
        const nav = $('#navbar');
        const burger = $('.nav-hamburger');
        const links = $('.nav-links');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) nav.classList.add('sticky');
            else nav.classList.remove('sticky');
        });

        if (burger) {
            burger.addEventListener('click', () => {
                links.classList.toggle('active');
                burger.classList.toggle('toggle');
            });
        }
    }

    // ── 5. LIGHT / DARK THEME TOGGLE ──
    function initTheme() {
        const btn = $('#theme-toggle');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            btn.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        });
    }

    // ── 6. COUNTERS ANIMATION ──
    function initCounters() {
        const stats = $$('.stat-num');
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            gsap.fromTo(stat, { textContent: 0 }, {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: { trigger: stat, start: 'top 90%' },
                snap: { textContent: 1 }
            });
        });
    }

    // ── BOOT ──
    function boot() {
        new NeuralBackground();
        initCursorGlow();
        initTypingAnimation();
        initNavbar();
        initTheme();
        initCounters();
    }

    document.addEventListener('DOMContentLoaded', boot);
})();
