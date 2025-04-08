// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Dynamic Greeting based on time of day
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Navigation Active State on Scroll
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Skill Tabs
    const tabs = document.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding panel
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animate progress bars when in viewport
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgressBars = () => {
        progressBars.forEach(progress => {
            const value = progress.getAttribute('data-width');
            const rect = progress.getBoundingClientRect();
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                progress.style.width = `${value}%`;
            }
        });
    };
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check
    
    // Projects Data
    const projectsData = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            image: 'https://via.placeholder.com/600x400',
            description: 'A full-stack e-commerce platform with payment integration.',
            github: '#',
            demo: '#',
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 2,
            title: 'Food Delivery App',
            category: 'mobile',
            image: 'https://via.placeholder.com/600x400',
            description: 'A mobile application for food ordering and delivery tracking.',
            github: '#',
            demo: '#',
            tags: ['React Native', 'Firebase']
        },
        {
            id: 3,
            title: 'Data Visualization Dashboard',
            category: 'data',
            image: 'https://via.placeholder.com/600x400',
            description: 'Interactive dashboard for visualizing business metrics.',
            github: '#',
            demo: '#',
            tags: ['D3.js', 'Python', 'Flask']
        },
        {
            id: 4,
            title: 'Social Media Platform',
            category: 'web',
            image: 'https://via.placeholder.com/600x400',
            description: 'A social network with real-time messaging features.',
            github: '#',
            demo: '#',
            tags: ['Vue.js', 'Firebase', 'Socket.io']
        },
        {
            id: 5,
            title: 'Weather Forecasting App',
            category: 'mobile',
            image: 'https://via.placeholder.com/600x400',
            description: 'App that provides real-time weather forecasts based on location.',
            github: '#',
            demo: '#',
            tags: ['Swift', 'WeatherAPI']
        },
        {
            id: 6,
            title: 'Machine Learning Model',
            category: 'data',
            image: 'https://via.placeholder.com/600x400',
            description: 'Predictive analytics model for customer behavior.',
            github: '#',
            demo: '#',
            tags: ['Python', 'TensorFlow', 'Scikit-Learn']
        }
    ];
    
    // Blog Data
    const blogData = [
        {
            id: 1,
            title: 'Getting Started with JavaScript Frameworks',
            date: 'April 3, 2025',
            image: 'https://via.placeholder.com/600x400',
            excerpt: 'Learn how to choose and get started with popular JavaScript frameworks for web development.',
            tags: ['JavaScript', 'React', 'Vue', 'Angular']
        },
        {
            id: 2,
            title: 'The Future of Web Development',
            date: 'March 27, 2025',
            image: 'https://via.placeholder.com/600x400',
            excerpt: 'Exploring emerging technologies and trends that will shape the future of web development.',
            tags: ['WebDev', 'Trends', 'Technology']
        },
        {
            id: 3,
            title: 'Optimizing Performance in Mobile Applications',
            date: 'March 15, 2025',
            image: 'https://via.placeholder.com/600x400',
            excerpt: 'Tips and techniques for improving the performance of your mobile applications.',
            tags: ['Mobile', 'Performance', 'Optimization']
        },
        {
            id: 4,
            title: 'Introduction to Data Analysis with Python',
            date: 'March 5, 2025',
            image: 'https://via.placeholder.com/600x400',
            excerpt: 'A beginner-friendly guide to data analysis using Python and its libraries.',
            tags: ['Python', 'Data', 'Analysis']
        }
    ];
    
    // Render Projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    const renderProjects = (filter = 'all') => {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.setAttribute('data-category', project.category);
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="lightbox-img" data-img="${project.image}">
                </div>
                <div class="project-info">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank"><i class="fab fa-github"></i> Code</a>
                        <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                        <a href="#" class="view-details" data-id="${project.id}"><i class="fas fa-info-circle"></i> Details</a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Re-attach lightbox event listeners
        attachLightboxListeners();
        
        // Re-attach project detail modal listeners
        attachProjectDetailListeners();
    };
    
    // Initial project render
    renderProjects();
    
    // Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
    
    // Render Blog Posts
    const blogPostsContainer = document.querySelector('.blog-posts');
    
    const renderBlogPosts = (searchQuery = '') => {
        blogPostsContainer.innerHTML = '';
        
        const filteredPosts = searchQuery === '' 
            ? blogData 
            : blogData.filter(post => 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        
        if (filteredPosts.length === 0) {
            blogPostsContainer.innerHTML = '<div class="no-results">No blog posts found matching your search.</div>';
            return;
        }
        
        filteredPosts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            
            blogCard.innerHTML = `
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            
            blogPostsContainer.appendChild(blogCard);
        });
    };
    
    // Initial blog render
    renderBlogPosts();
    
    // Blog Search Functionality
    const blogSearchInput = document.getElementById('blog-search-input');
    
    blogSearchInput.addEventListener('input', () => {
        renderBlogPosts(blogSearchInput.value);
    });
    
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Helper function for email validation
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    // Live validation for each field
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('error');
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameInput.classList.add('error');
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('error');
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
        }
    });
    
    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            subjectInput.classList.add('error');
        } else {
            subjectError.textContent = '';
            subjectInput.classList.remove('error');
        }
    });
    
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageInput.classList.add('error');
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageInput.classList.add('error');
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('error');
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Check if all fields are valid
        let isValid = true;
        
        if (nameInput.value.trim() === '' || nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name is required and must be at least 2 characters';
            nameInput.classList.add('error');
            isValid = false;
        }
        
        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'A valid email address is required';
            emailInput.classList.add('error');
            isValid = false;
        }
        
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            subjectInput.classList.add('error');
            isValid = false;
        }
        
        if (messageInput.value.trim() === '' || messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message is required and must be at least 10 characters';
            messageInput.classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid, show success message and reset form
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'Your message has been sent successfully!';
            
            contactForm.reset();
            contactForm.appendChild(successMessage);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }
    });
    
    // Live Clock in Contact Section
    const liveClock = document.getElementById('live-clock');
    
    const updateClock = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        
        liveClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    };
    
    updateClock();
    setInterval(updateClock, 1000);
    
    // Lightbox Functionality
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    function attachLightboxListeners() {
        const lightboxImages = document.querySelectorAll('.lightbox-img');
        
        lightboxImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.getAttribute('data-img');
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Project Detail Modal
    const modal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    
    function attachProjectDetailListeners() {
        const viewDetailsBtns = document.querySelectorAll('.view-details');
        
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = parseInt(btn.getAttribute('data-id'));
                const project = projectsData.find(p => p.id === projectId);
                
                if (project) {
                    modalBody.innerHTML = `
                        <div class="modal-image">
                            <img src="${project.image}" alt="${project.title}">
                        </div>
                        <div class="modal-content-info">
                            <h2>${project.title}</h2>
                            <div class="modal-category">${project.category}</div>
                            <p>${project.description}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel libero eget nunc eleifend fermentum. 
                            Nulla facilisi. Morbi aliquam, neque vel semper tincidunt, neque nunc ultricies leo, vel hendrerit quam est vel nunc.</p>
                            <div class="modal-tags">
                                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                            <div class="modal-links">
                                <a href="${project.github}" target="_blank" class="btn secondary-btn"><i class="fab fa-github"></i> View Code</a>
                                <a href="${project.demo}" target="_blank" class="btn primary-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    `;
                    
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initial calls to attach event listeners
    attachLightboxListeners();
    attachProjectDetailListeners();
});
