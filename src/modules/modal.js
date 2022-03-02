import helpers from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn'),
    modal = document.querySelector('.popup'),
    modalContent = document.querySelector('.popup-content');

  const modalOpenAnimation = (duration) => {
   helpers({
    duration: duration,
    timing: function linear(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      modal.style.opacity = progress ;
      modalContent.style.opacity = 0;
      if(progress === 1) {

      helpers({

      duration: duration,
      timing: function linear(timeFraction) {
        return timeFraction;
      },

      draw: function (progress) {
        modalContent.style.opacity = progress;
      }
      })
      }
      }
      });
  }

 

// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.availWidth >= 768) modalOpenAnimation(300);
      modal.style.display = 'block';
    })
  })

// Закрытие модального окна

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
      modal.style.opacity = ``;
      modalContent.style.opacity = ``;
    }
  })
}

export default modal