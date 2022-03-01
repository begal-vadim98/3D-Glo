const toggleMenu = () => {
  const  menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  document.addEventListener('click', ({ target }) =>
    (target.closest('.menu') || target.matches('.close-btn, menu a') || 
    (menu.classList.contains('active-menu') && !target.closest('menu'))) &&
    handleMenu());
}

export default toggleMenu