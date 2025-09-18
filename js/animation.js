document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('h2.heading');
    // const inner = document.querySelector('#works .inner');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    // fade up animation
    const fadeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up");
            } else {
                entry.target.classList.remove("fade-up");
            }
        });
    }, observerOptions);

    // fade in animation
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in");
            }
        });
    }, observerOptions);



    targets.forEach((target) => {
        fadeUpObserver.observe(target);
    });


    // if (inner) {
    //     fadeInObserver.observe(inner);
    // }

});