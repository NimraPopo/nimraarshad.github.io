// Typing effect
const roles = ["Finance Enthusiast", "Aspiring Analyst", "Data Driven Thinker"];
let index = 0;
let char = 0;
let deleting = false;

function typeEffect() {
    let current = roles[index];

    if (!deleting) {
        document.querySelector(".typing").textContent = current.substring(0, char++);
        if (char > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = current.substring(0, char--);
        if (char === 0) {
            deleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();


// Scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});