//PHOTOS PAGE//

let images = document.querySelectorAll(".grid-wrapper img")
let currentIndex = 0;
let wrapper = document.getElementById('wrapper')

let imgWrapper = document.getElementById('fullImg')

let close = document.getElementById('x')

images.forEach((img, index) => {
    img.addEventListener('click', ()=>{
        openModal(index);
    })
})

function openModal(index){
    currentIndex = index;
    wrapper.style.display = 'flex';
    showImage();
}

function showImage(){
    imgWrapper.src = images[currentIndex].src;
}

close.addEventListener('click', () => wrapper.style.display = 'none') 

wrapper.addEventListener('click', (e) => {
  if (e.target === wrapper) {
    wrapper.style.display = 'none';
  }
});

document.querySelector('.left').addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
})

document.querySelector('.right').addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    showImage();
});