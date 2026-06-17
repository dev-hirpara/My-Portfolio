  // Typing Animation
        const typingTexts = [
            "Automobile Engineer",
            "Manufacturing Enthusiast",
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

       function typeWriter() {
  const el = document.querySelector('.typing-text');
  const text = typingTexts[textIndex];

  el.textContent = text.slice(0, isDeleting ? --charIndex : ++charIndex);

  if (!isDeleting && charIndex === text.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}


        // Particle Animation
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                container.appendChild(particle);
            }
        }

        // Smooth Scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
        }

        // Skill Circle Animation
        function animateSkills() {
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                const progress = item.querySelector('.progress');
                const percent = progress.getAttribute('data-percent');
                const circumference = 2 * Math.PI * 50;
                const offset = circumference - (percent / 100) * circumference;
                progress.style.strokeDashoffset = offset;
            });
        }

        // Floating Navigation
        function updateFloatingNav() {
            const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'contact'];
            const navDots = document.querySelectorAll('.nav-dot');

            let currentSection = '';
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = sectionId;
                }
            });

            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-section') === currentSection) {
                    dot.classList.add('active');
                }
            });
        }

        // Timeline Animation
        function animateTimeline() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            });
        }

        // Download Resume
        function downloadResume() {
    const a = document.createElement('a');
    a.href = 'Jeel resume for outside.pdf';
    a.download = 'Jeel_Hirpara_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}     

        // Intersection Observer
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'about') {
                        animateCounters();
                    } else if (entry.target.id === 'skills') {
                        animateSkills();
                    } else if (entry.target.id === 'timeline') {
                        animateTimeline();
                    }
                }
            });
        }, observerOptions);

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function () {
            typeWriter();
            createParticles();

            // Observe sections
            ['about', 'skills', 'timeline'].forEach(id => {
                observer.observe(document.getElementById(id));
            });

            // Floating nav clicks
            document.querySelectorAll('.nav-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    const section = dot.getAttribute('data-section');
                    scrollToSection(section);
                });
            });

            // Contact form
            document.getElementById('contact-form').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            });
        });

        // Scroll events
        window.addEventListener('scroll', updateFloatingNav);
    (function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9832b748f7916ec2',t:'MTc1ODU1MzY4OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();