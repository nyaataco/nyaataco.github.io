document.addEventListener('DOMContentLoaded', () => {
    const imageElements = document.querySelectorAll(".image");
    const DisplayErea = document.querySelector(".large-image");

    imageElements.forEach(el => {
        el.addEventListener("click", function() {
            const dataName = this.dataset.name;
            DisplayErea.className = "large-image"
            DisplayErea.classList.add(dataName);
        });
    });

});