document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('h2.heading');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        } else {
            entry.target.classList.remove("fade-up");
        }
        });
    }, observerOptions);

    targets.forEach((target) => {
        observer.observe(target);
    });
});