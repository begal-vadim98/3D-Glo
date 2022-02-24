import helpers from './helpers'


const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn'),
    modal = document.querySelector('.popup'),
    modalContent = document.querySelector('.popup-content'),
    modalClose = modal.querySelector('.popup-close');

  const modalOpenAnimation = (duration) => {
   helpers.animate({
    duration: duration,
    timing: function linear(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      modal.style.opacity = progress ;
      modalContent.style.opacity = 0;
    }
  },  setTimeout(() => {
        helpers.animate({

          duration: duration,
          timing: function linear(timeFraction) {
            return timeFraction;
          },

          draw: function(progress) {
            modalContent.style.opacity = progress  ;
          }
        })
  }, duration));

  }

 

// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.availWidth >= 768) modalOpenAnimation(300);
      modal.style.display = 'block';
    })
  })

// Закрытие модального окна
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.opacity = ``;
    modalContent.style.opacity = ``;
  })


}

export default modal