// Add this script to your HTML file or at the end of the body
document.addEventListener('DOMContentLoaded', function() {
    const portfolioImages = document.querySelectorAll('.render');
  
    function showImage(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }
  
    const observer = new IntersectionObserver(showImage, { threshold: 0.5 });
  
    portfolioImages.forEach(image => {
      observer.observe(image);
    });
  });
  