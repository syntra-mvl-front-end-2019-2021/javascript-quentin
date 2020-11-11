const previousBtn = document.querySelector('.citation-slider__previous');
const nextBtn = document.querySelector('.citation-slider__next');

function getSliderItemWidth(){
    const sliderItem = document.querySelector('.citation-slider__item');
    return sliderItem.clientWidth;
}

let sliderInfo = {
    sliderElement: document.querySelector('.citation-slider'),
    currentSlide : 0,
}

function nextSlide(event){
    const itemWidth = getSliderItemWidth();

    console.log(getSliderItemWidth());
    sliderInfo.currentSlide++;

    sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

function prevSlide(event){
    if(sliderInfo.currentSlide === 0){
        return;
    }

    if (sliderInfo.currentSlide === 1){
        previousBtn.classList.add('hide');
    }


    const itemWidth = getSliderItemWidth();
    
    console.log(getSliderItemWidth());
    sliderInfo.currentSlide--;

    sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

function windowResize(){
    
}

previousBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', windowResize);