/*const sliderContainer = document.createElement('div');
const prevBtn = document.createElement('div');
const nextBtn = document.createElement('div');
const chirstmasImages = ['https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1543598098-622a5e218f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80','https://images.unsplash.com/photo-1479722842840-c0a823bd0cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80','https://images.unsplash.com/photo-1511731357620-952d10f3234c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'];

sliderContainer.classList.add('sliderContainer');




function createSlider(){
  let slider = document.querySelector('.slider');
  slider.appendChild(sliderContainer);
  slider.appendChild(prevBtn);
  slider.appendChild(nextBtn);
}

function getSliderItemWidth(){
  const sliderItem = document.querySelector('.slider-item');
  return sliderItem.clientWidth;
}


function nextSlide(event){
  const itemWidth = getSliderItemWidth();


  sliderInfo.currentSlide++;
  sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

function prevSlide(event){
  const itemWidth = getSliderItemWidth();
  
  if (sliderInfo.currentSlide === 1){
    prevBtn.classList.add('hide');
  }
    
  sliderInfo.currentSlide--;

  sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

Promise.all(chirstmasImages).then(function(urls){
  createSlider();
  for ( let i=0 ; i < urls.length ; i++){
      let image = document.createElement('img');
      image.setAttribute('src', urls[i]);
      image.classList.add('slider-item');
      sliderContainer.appendChild(image);
  }
}).catch(function(urls){
  console.log("Error loading some images: " + urls)
})

*/

function createSliderOne(root,imgArray){
  //root hidden
  root.hidden = true;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('sliderContainer')
  const prevBtn = document.createElement('div');
  const nextBtn = document.createElement('div');

  root.appendChild(sliderContainer);
  root.appendChild(prevBtn);
  root.appendChild(nextBtn);

  let sliderInfo = {
    sliderElement: sliderContainer,
    currentSlide : 0,
  }

  function getSliderItemWidth(){
    const sliderItem = document.querySelector('.slider-item');
    return sliderItem.clientWidth;
  }
  
  
  function nextSlide(event){
    const itemWidth = getSliderItemWidth();

    sliderInfo.currentSlide++;
    sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
  }
  
  function prevSlide(event){
    const itemWidth = getSliderItemWidth();
    
    if (sliderInfo.currentSlide === 1){
      prevBtn.classList.add('hide');
    }
      
    sliderInfo.currentSlide--;
  
    sliderInfo.sliderElement.style.left = -1 * sliderInfo.currentSlide * itemWidth + 'px';
  }

  prevBtn.classList.add('arrow-left');
  nextBtn.classList.add('arrow-right');

  nextBtn.addEventListener('click',nextSlide);
  prevBtn.addEventListener('click',prevSlide);

  //wait for all images to be loaded
  let promise_1 = new Promise(resolve =>{
    let image = document.createElement('img');
    image.addEventListener('load', (event)=>{
      resolve(image);
    })
    image.setAttribute('src', imgArray[0]);
    image.classList.add('slider-item');
    sliderContainer.appendChild(image);
  });

  let promise_2 = new Promise(resolve =>{
    let image = document.createElement('img');
    image.addEventListener('load', (event)=>{
      resolve(image);
    })
    image.setAttribute('src', imgArray[1]);
    image.classList.add('slider-item');
    sliderContainer.appendChild(image);
  });

  let promise_3 = new Promise(resolve =>{
    let image = document.createElement('img');
    image.addEventListener('load', (event)=>{
      resolve(image);
    })
    image.setAttribute('src', imgArray[1]);
    image.classList.add('slider-item');
    sliderContainer.appendChild(image);
  }); 

  Promise.all([promise_1, promise_2, promise_3]).then((values) => {
    root.hidden = false;  
  });

}
const sliderOne = document.querySelector('.slider');
const imgArray = ['https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1543598098-622a5e218f43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80','https://images.unsplash.com/photo-1479722842840-c0a823bd0cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80','https://images.unsplash.com/photo-1511731357620-952d10f3234c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80']

createSliderOne(sliderOne, imgArray);