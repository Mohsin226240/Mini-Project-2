document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search functionality simulation
    const searchForms = document.querySelectorAll('.search-form');
    const searchInputs = document.querySelectorAll('.search-input');
    const searchResults = document.querySelectorAll('.search-results');
    
    if (searchForms.length > 0) {
        searchForms.forEach((form, index) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = searchInputs[index].value.trim();
                
                if (query) {
                    // Simulate search results
                    searchResults[index].innerHTML = `
                        <p style="margin-top: 1rem;">Search results for: <strong>${query}</strong></p>
                        <ul style="list-style: none; margin-top: 0.5rem;">
                            <li style="margin-bottom: 0.5rem;"><a href="post.html">Post related to ${query}</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="post.html">Another post about ${query}</a></li>
                            <li><a href="post.html">How ${query} is changing the industry</a></li>
                        </ul>
                    `;
                } else {
                    searchResults[index].innerHTML = '<p style="margin-top: 1rem; color: var(--gray);">Please enter a search term</p>';
                }
            });
        });
    }

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const elementInView = (el, scrollOffset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const handleScrollAnimation = () => {
        fadeElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };
    
    if (fadeElements.length > 0) {
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
        
        // Initial check on page load
        handleScrollAnimation();
    }

    // Comment form submission
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Comment submitted! (This is a demo - no actual comment was sent)');
            commentForm.reset();
        });
    }

    // Subscribe form submission
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for subscribing! (This is a demo - no actual subscription was created)');
            subscribeForm.reset();
        });
    }

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPage === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === 'post.html' && href === 'post.html') {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
});