
const prev = document.getElementsByClassName("left")[0]
const next = document.getElementsByClassName("right")[0]

let slideIndex=0

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer; // reset timer
}

function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}

  
// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}

const showSlides=()=>{
    let slides=document.querySelectorAll(".image")
    if(slideIndex>slides.length-1){
        slideIndex=0
    }
    if(slideIndex<0){
        slideIndex = slides.length-1
    }
    slides.forEach((slide)=>{
        slide.style.display ="none"
    })
    slides[slideIndex].style.display = "block";
    
}

let timer = 5; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec

prev.addEventListener('click',prevSlide)
next.addEventListener('click',nextSlide)

 