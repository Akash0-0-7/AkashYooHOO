function toggleMobileMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.remove('active');
                updateActiveNavLink(sectionId); 
            }
        }
 document.addEventListener('DOMContentLoaded', function() {
            const profileWrapper = document.querySelector('.profile-image-wrapper');
            const particles = document.querySelectorAll('.particle');

            profileWrapper.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x / 20;
                const moveY = y / 20;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });

            profileWrapper.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) scale(1)';
            });

            profileWrapper.addEventListener('mouseenter', function() {
                particles.forEach((particle, index) => {
                    setTimeout(() => {
                        particle.style.animationDelay = Math.random() * 2 + 's';
                    }, index * 100);
                });
            });
        });

        function updateActiveNavLink(activeSection) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeSection}`) {
                    link.classList.add('active');
                }
            });
        }

        function showProjectDetails(projectName) {
            alert(`Opening ${projectName} details...\n\nThis would typically open a modal or navigate to a detailed project page with more information, images, and case studies.`);
        }

        function showSkillInfo(skillName) {
            const skillDescriptions = {
                'HTML5': 'Latest version of HTML with semantic elements and improved APIs',
                'CSS3': 'Advanced styling with animations, flexbox, and grid layouts',
                'JavaScript': 'Modern ES6+ JavaScript for interactive web applications',
                'React': 'Component-based library for building user interfaces',
                'Vue.js': 'Progressive framework for building modern web applications',
                'TypeScript': 'Typed superset of JavaScript for better development experience',
                'Tailwind CSS': 'Utility-first CSS framework for rapid UI development',
                'Next.js': 'React framework with server-side rendering and optimization',
                'Node.js': 'JavaScript runtime for building scalable server applications',
                'Python': 'Versatile programming language for backend development',
                'PostgreSQL': 'Advanced open-source relational database',
                'MongoDB': 'NoSQL database for flexible document storage',
                'GraphQL': 'Query language for APIs with strong type system',
                'REST APIs': 'Architectural style for designing web services',
                'AWS': 'Cloud computing platform for scalable applications',
                'Figma': 'Collaborative design tool for UI/UX design',
                'Adobe Creative Suite': 'Professional design and creative software collection',
                'Sketch': 'Digital design toolkit for creating interfaces',
                'Prototyping': 'Creating interactive mockups and wireframes',
                'UI/UX Design': 'User interface and experience design principles',
                'Wireframing': 'Creating structural blueprints for web pages',
                'User Research': 'Understanding user needs and behaviors'
            };
            
            const description = skillDescriptions[skillName] || 'Specialized skill in modern development practices';
            alert(`${skillName}\n\n${description}`);
        }

        function showServiceDetails(serviceName) {
            const serviceDetails = {
                'UI/UX Design': 'Complete design process from research to final implementation, including user personas, wireframes, prototypes, and design systems.',
                'Web Development': 'Full-stack development services including frontend, backend, database design, and deployment with modern technologies.',
                'Mobile App Design': 'Native iOS and Android app design, as well as cross-platform solutions with React Native and Flutter.',
                'Brand Identity': 'Logo design, brand guidelines, color palettes, typography selection, and complete visual identity systems.',
                'Performance Optimization': 'Website speed optimization, SEO improvements, accessibility enhancements, and technical audits.',
                'Consulting': 'Strategic planning, technology stack selection, project management, and digital transformation guidance.'
            };
            
            const details = serviceDetails[serviceName] || 'Professional service tailored to your needs';
            alert(`${serviceName}\n\n${details}\n\nWould you like to discuss your project? Feel free to contact me!`);
        }

        function handleFormSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}!\n\nYour message has been received. I'll get back to you at ${email} within 24 hours.\n\nSubject: ${subject}`);
            event.target.reset();
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert(`Copied to clipboard: ${text}`);
            }).catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert(`Copied to clipboard: ${text}`);
            });
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', () => {
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
            updateActiveNavOnScroll();
        });

        function updateActiveNavOnScroll() {
            const sections = ['home', 'about', 'my-work', 'skills', 'services', 'contact'];
            const scrollPosition = window.pageYOffset + 500;
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop;     
                    const sectionHeight = element.offsetHeight;
                    const isActive = scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight       
                    const navLink = document.querySelector(`.nav-link[href="#${section}"]`);
                    if (navLink) {
                        if (isActive) { 
                            navLink.classList.add('active');
                        } else {
                            navLink.classList.remove('active');
                        }
                    }
                }

            });}
            const matrixContainer = document.getElementById('matrixRain');
            const matrixChars = '01010101';
            const colors = [ 'blue', 'cyan', 'bright-blue'];
    
            function createMatrixColumn() {
                const column = document.createElement('div');
                column.className = `matrix-column ${colors[Math.floor(Math.random() * colors.length)]}`;
                
                let text = '';
                const columnHeight = Math.floor(Math.random() * 50) + 5;
                for (let i = 0; i < columnHeight; i++) {
                    text += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '\n';
                }
                column.textContent = text;
                
                column.style.left = Math.random() * 100 + '%';
                column.style.animationDuration = (Math.random() * 6+6) + 's';
                column.style.animationDelay = Math.random() * 5 + 's';
                column.style.opacity = Math.random() * 0.8 + 0.2;
                matrixContainer.appendChild(column);
                setTimeout(() => {
                    if (column.parentNode) {
                        column.parentNode.removeChild(column);
                    }
                }, 8000);
            }
    
            setInterval(createMatrixColumn, 100);
            
            for (let i = 0; i < 40; i++) {
                setTimeout(createMatrixColumn, i * 100);
            }
    
            setInterval(() => {
                for (let i = 0; i < 3; i++) {
                    setTimeout(createMatrixColumn, i * 30);
                }
            }, 500);
            
function profileImageHover(isHover) {
  const wrapper = document.querySelector('.profile-image-wrapper');
  const image = wrapper.querySelector('.profile-image');
  if (isHover) {
    image.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border 0.5s cubic-bezier(0.4,0,0.2,1)';
    image.style.transform = 'scale(1.07) rotate(-2deg)';
    image.style.boxShadow = '0 0 0 0 transparent';
    image.style.border = '4px solid transparent';
  } else {
    image.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border 0.5s cubic-bezier(0.4,0,0.2,1)';
    image.style.transform = 'scale(1) rotate(0)';
    image.style.boxShadow = 'none';
    image.style.border = 'none';
  }
}