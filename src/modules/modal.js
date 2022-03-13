import modalAnimate from './modalAnimate'


const modal = (btn, modalHeader, contentModal) => {
  const buttons = document.querySelectorAll(btn),
    modal = document.querySelector(modalHeader),
    modalContent = document.querySelector(contentModal);


// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      if (screen.availWidth >= 768) modalAnimate(300, 0, '.popup', '.popup-content');
      modal.style.display = 'block'
      
    })
  })

// Закрытие модального окна
  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {      
      modalAnimate(300, 1, '.popup', '.popup-content');
    }
  })
}

export default modal