import { useEffect } from 'react';

export const useCarousel = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Fix: Use 100% logic immediately
    const images = element.querySelectorAll('img');
    if (!images || images.length === 0) return;

    let counter = 0;
    const interval = setInterval(() => {
      counter = (counter + 1) % 3; // Cycles 0, 1, 2
      element.style.transform = `translateX(${-100 * counter}%)`;
    }, 3000);

    return () => clearInterval(interval);
  }, [ref]);
};

export const useTypingAnimation = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const textToType = "Aptitude Guru Hem";
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const typeLoop = () => {
      const currentText = textToType.substring(0, charIndex);
      element.textContent = currentText;

      let speed = isDeleting ? 100 : 150;

      if (!isDeleting && charIndex < textToType.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else if (!isDeleting && charIndex === textToType.length) {
        isDeleting = true;
        speed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        speed = 500; // Pause before restarting
      }
      timer = setTimeout(typeLoop, speed);
    };

    typeLoop();
    return () => clearTimeout(timer);
  }, [ref]);
};

export const useSlideText = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const slideTexts = [
      "fuel your startup ambitions",
      "accelerate your career growth",
      "master coding interviews",
    ];
    let index = 0;

    const changeText = () => {
      element.classList.remove("visible");
      setTimeout(() => {
        element.textContent = slideTexts[index];
        element.classList.add("visible");
        index = (index + 1) % slideTexts.length;
      }, 500);
    };

    changeText();
    const interval = setInterval(changeText, 3000);
    return () => clearInterval(interval);
  }, [ref]);
};