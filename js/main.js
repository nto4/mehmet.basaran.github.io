// Smooth scrolling for anchor links (if specific links are added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    // Initial state set in CSS, but this ensures JS takes over control if needed
    // or enhances the behavior.
    observer.observe(section);
});

// Console message for developers/curious users
console.log(`
%c Mehmet Başaran %c DevOps Engineer 
`, 'background: #38bdf8; color: #000; padding: 5px; font-weight: bold; border-radius: 3px;', 'color: #38bdf8; font-weight: bold;');
console.log("Welcome to my portfolio! Built with performance in mind.");