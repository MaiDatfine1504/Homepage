const slider__wrapper = document.querySelector(".slider__wrapper");
firstImg = slider__wrapper.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".slider i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        slider__wrapper.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});


const autoSlide = () => {
    if(slider__wrapper.scrollLeft == (slider__wrapper.scrollWidth - slider__wrapper.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let varDifference = firstImgWidth - positionDiff;
    if(slider__wrapper.scrollLeft > prevScrollLeft) {
        return slider__wrapper.scrollLeft += positionDiff > firstImgWidth / 4 ? varDifference : -positionDiff;
    }
    return slider__wrapper.scrollLeft -= positionDiff > firstImgWidth / 4 ? varDifference : -positionDiff;
}
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider__wrapper.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider__wrapper.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider__wrapper.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
    slider__wrapper.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slider__wrapper.addEventListener("mousedown", dragStart);
slider__wrapper.addEventListener("touchstart", dragStart);
slider__wrapper.addEventListener("mousemove", dragging);
slider__wrapper.addEventListener("touchmove", dragging);
slider__wrapper.addEventListener("mouseup", dragStop);
slider__wrapper.addEventListener("mouseleave", dragStop);
slider__wrapper.addEventListener("touchend", dragStop);

const Button = document.querySelector(".btn__menu");
const Menu = document.querySelector(".hz__menu__wrapper");
const Link = document.querySelectorAll(".hz__menu__item a");

Button.onclick = function () {
    Menu.style.display = 'block';
    Button.style.color = '#F77E3E';
};
Menu.onmouseleave = function () {
    Menu.style.display = 'none';
    Button.style.color = '#000';
};