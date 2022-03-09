import {animate, bounceEaseInOut} from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn'),
    modal = document.querySelector('.popup'),
    modalContent = document.querySelector('.popup-content');

  const modalOpenAnimation = (duration, time) => {
   animate({
    duration: duration,
    timing: bounceEaseInOut,
    draw: function(progress) {

      let linear = Math.abs(time - progress);

        modal.style.opacity =  linear;
        modalContent.style.opacity = linear;
        
        if(+modal.style.opacity === 0 ) modal.style.display = 'none';
    
      }
      });
  }
 
 

// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.availWidth >= 768) modalOpenAnimation(300, 0);
      modal.style.display = 'block';
    
    })
  })

// Закрытие модального окна

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modalOpenAnimation(300, 1);
    }
  })
}

export default modal