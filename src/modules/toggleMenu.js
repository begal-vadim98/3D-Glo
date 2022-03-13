const toggleMenu = () => {
  const  menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

 
  document.addEventListener('click', (e) => {
    const target = e.target;
    
    if(target.closest('.menu') || target.matches('.close-btn, menu a') || 
    (menu.classList.contains('active-menu') && !target.closest('menu'))) {
      e.preventDefault();
      handleMenu();
    } 

  });

}

export default toggleMenu