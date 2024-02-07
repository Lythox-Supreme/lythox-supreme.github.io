console.log("hellow world");


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.moving-carousel');
    
    mouseOverCarousel = false;

    carousel.addEventListener('mouseover', () => {
        mouseOverCarousel = true;
    });
    
    carousel.addEventListener('mouseout', () => {
        mouseOverCarousel = false;
    });

    currentPosition=0;
    speed=-0.01;
    //lastTimeStamp=performance.now();

    function rotateCarousel() {
        //deltaTime = performance.now() - lastTimeStamp;
        if(mouseOverCarousel){
            currentPosition += speed * 0.5;
        }else{
            currentPosition += speed;
        }
        
        //lastTimeStamp=performance.now();

        if (currentPosition <= -80) {
            speed*=-1;
        }
        if (currentPosition >= 0) {
            speed*=-1;
        }

        carousel.style.transform = `translateX(${currentPosition}%)`;
        requestAnimationFrame(rotateCarousel);
    }

    // Call rotateCarousel function on a timer
    //setInterval(rotateCarousel, 1); // Adjust timing as needed
    rotateCarousel();
});


