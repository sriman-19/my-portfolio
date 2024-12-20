// Typed.js Configuration
var typed = new Typed(".multiple-text", {
    strings: [
        "FrontEnd Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Prompt Engineering"
    ],
    typeSpeed: 100,   // Typing speed
    backSpeed: 100,   // Backspacing speed
    backDelay: 1000,  // Delay before backspacing
    loop: true        // Loop animation
});

// Highlight color for "multiple-text"
document.querySelector('.multiple-text').style.color = "#ff5e57";
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Function to activate the Home section on load
    function activateDefaultSection() {
        document.querySelector('#home').classList.add('active'); // Add active class to Home section
        document.querySelector('.nav-link[href="#home"]').classList.add('active'); // Highlight Home link
    }

    // Function to handle navigation clicks
    function handleNavClick(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Hide all sections and deactivate all links
        sections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        // Activate the clicked link and corresponding section
        targetSection.classList.add('active');
        this.classList.add('active');
    }

    // Attach event listeners to navigation links
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    // Activate the default Home section on page load
    activateDefaultSection();
});

document.addEventListener("DOMContentLoaded", () => {
    const colors = document.querySelectorAll(".theme-colors .color");
    const textContent = document.getElementById("text-content");

    colors.forEach(color => {
        color.addEventListener("click", () => {
            const selectedColor = color.getAttribute("data-color");
            textContent.style.color = selectedColor;
        });
    });
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelector('.carousel-items');
let scrollPosition = 0;

prevBtn.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= 1;  // Scroll one project left
    }
    updateCarouselPosition();
});

nextBtn.addEventListener('click', () => {
    if (scrollPosition < carouselItems.children.length - 1) {
        scrollPosition += 1;  // Scroll one project right
    }
    updateCarouselPosition();
});

function updateCarouselPosition() {
    const itemWidth = carouselItems.children[0].offsetWidth + 20; // Width of each project item + margin
    carouselItems.style.transform = `translateX(-${scrollPosition * itemWidth}px)`;
}