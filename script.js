const slides = document.querySelectorAll(".slide")
const body = document.querySelector("body")   
body.style.backgroundImage = document.querySelector(".active").style.backgroundImage

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveSlide()
        slide.classList.add("active")
        body.style.backgroundImage = slide.style.backgroundImage


    })
}

function clearActiveSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}
