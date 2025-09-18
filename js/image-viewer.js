document.addEventListener('DOMContentLoaded', () => {
    const imageElements = document.querySelectorAll(".image");
    const DisplayErea = document.querySelector(".large-image");

    imageElements.forEach(el => {
        el.addEventListener("click", function() {
            const dataName = this.dataset.name;
            const newImageSrc = `images/MoutainTailsCafe/${dataName}.jpg`;

            const newImg = document.createElement("img");
            newImg.src = newImageSrc;
            newImg.alt = dataName;
            newImg.classList.add("fade-in");

            const oldImage = DisplayErea.querySelector("img")
            DisplayErea.replaceChild(newImg, oldImage);
        });
    });

});