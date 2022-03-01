const slider = (sliderBox, slide, slideActive = 'slide-active', dotActive = 'dot-active') => {
  const sliderBlock = document.querySelector(sliderBox),
    slides = document.querySelectorAll(slide),
    dots = [];

  let currentSlide = 0,
    interval = 0,
    timerInterval = 2000;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    currentSlide++;

    if (currentSlide >= slides.length) currentSlide = 0;

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  const createDot = () => {
    const dotsBox = document.querySelector('.portfolio-dots');

    for (let i = 0; i <= slides.length - 1; i++) {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      dotsBox.append(dot);
      dots.push(dot);
    }
    dots[0].classList.add(dotActive);
  }

  if (!sliderBlock, !slides[0]) return;

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) currentSlide = index;
      })
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  });

  sliderBlock.addEventListener('mouseenter', (e) => {

    if (e.target.matches('.dot, .portfolio-btn')) stopSlide();

  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {

    if (e.target.matches('.dot, .portfolio-btn')) startSlide(timerInterval);

  }, true)

  createDot();
  startSlide(timerInterval);
}

export default slider