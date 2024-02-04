console.log("hellow world");


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.moving-carousel');
    let rotateValue = 0;

    currentPosition=0;
    speed=-0.01;

    function rotateCarousel() {
        currentPosition += speed; // Adjust the speed by changing the value

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


