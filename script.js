document.addEventListener('DOMContentLoaded', function() {
  let elementsToAnimate;
  let windowHeight;

  const init = () => {
    elementsToFallIn = document.querySelectorAll('.to-fall-in');
    windowHeight = window.innerHeight;
    console.log(elementsToFallIn);
  }

  const checkPosition = () => {
    init();
    console.log(elementsToFallIn)
    for (let i = 0; i < elementsToFallIn.length; i++) {
      const element = elementsToFallIn[i];
      const positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add(`fall-in-${i+1}`);
        element.classList.remove('to-fall-in')
      }
    }
  }
  
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);
})