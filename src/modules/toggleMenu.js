const toggleMenu = () => {
  const  menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  document.addEventListener('click', (e) => {
    if(e.target.closest('.menu') || 
    e.target.matches('menu ul>li>a') || 
    e.target.classList.contains('close-btn') || 
    (menu.classList.contains('active-menu') && !e.target.closest('menu')) ) handleMenu();
  })

}

export default toggleMenu