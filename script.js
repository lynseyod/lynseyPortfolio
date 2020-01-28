document.addEventListener('DOMContentLoaded', function() {
  let windowHeight;
  let elementsToFallIn;
  let elementsToSlideIn;

  const init = () => {
    elementsToFallIn = document.querySelectorAll('.to-fall-in');
    elementsToSlideIn = document.querySelectorAll('.to-slide-in')
    windowHeight = window.innerHeight;
  }

  const checkPosition = () => {
    init();
    for (let i = 0; i < elementsToFallIn.length; i++) {
      const element = elementsToFallIn[i];
      const positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add(`fall-in-${i+1}`);
        element.classList.remove('to-fall-in')
      }
    }
    for (let i = 0; i < elementsToSlideIn.length; i++) {
      const element = elementsToSlideIn[i];
      const positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('slide-in');
        element.classList.remove('to-slide-in');
      }
    }
  }
  
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);
})