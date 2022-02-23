const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn'),
    modal = document.querySelector('.popup'),
    modalClose = modal.querySelector('.popup-close');

  // Анимация модального окна
  let count = 0;
  
  const modalOpenAnimation = () => {
    count += 4;

    let idModalOpen = requestAnimationFrame(modalOpenAnimation);

    if (count <= 100) modal.style.transform = `translateX(${-100 + count}%)`;
    else {
      count = 0;
      cancelAnimationFrame(idModalOpen);
    }

  }

// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.availWidth >= 768) modalOpenAnimation();
      modal.style.display = 'block';
    })
  })

// Закрытие модального окна
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.style.transform = ``;
  })
}

export default modal