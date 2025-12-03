export const useCarousel = (carouselSlideRef) => {
  const startCarousel = () => {
    const carouselSlide = carouselSlideRef.current;
    const images = carouselSlide?.querySelectorAll('img');
    
    if (!images || images.length === 0) return null;

    let counter = 0;

    function nextSlide() {
      if (counter === 0) {
        counter = 1;
      } else if (counter === 1) {
        counter = 2;
      } else if (counter === 2) {
        counter = 0;
      }
      carouselSlide.style.transform = `translateX(${-100 * counter}%)`;
    }

    return setInterval(nextSlide, 3000);
  };

  return { startCarousel };
};

export const useTypingAnimation = (typingTextRef) => {
  const startTyping = () => {
    const textElement = typingTextRef.current;
    const textToType = "Aptitude Guru Hem";
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayAfterType = 2000;
    const delayAfterErase = 500;

    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentText = textToType.substring(0, charIndex);
      if (textElement) textElement.textContent = currentText;

      let typeSpeed = isDeleting ? erasingSpeed : typingSpeed;

      if (!isDeleting && charIndex < textToType.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else if (!isDeleting && charIndex === textToType.length) {
        isDeleting = true;
        typeSpeed = delayAfterType;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeSpeed = delayAfterErase;
      }

      setTimeout(typeLoop, typeSpeed);
    }

    return setTimeout(typeLoop, 100);
  };

  return { startTyping };
};

export const useSlideText = (slideTextRef) => {
  const startSlideText = () => {
    const slideElement = slideTextRef.current;
    const slideTexts = [
      "fuel your startup ambitions",
      "accelerate your career growth",
      "master coding interviews",
    ];

    let slideIndex = 0;

    function changeText() {
      if (!slideElement) return;
      
      slideElement.classList.remove("visible");

      setTimeout(() => {
        slideElement.textContent = slideTexts[slideIndex];
        slideElement.classList.add("visible");

        slideIndex++;
        if (slideIndex >= slideTexts.length) {
          slideIndex = 0;
        }
      }, 500);
    }

    changeText();
    return setInterval(changeText, 3000);
  };

  return { startSlideText };
};