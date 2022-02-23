const menu = () => {
  const menuBtn = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = menu.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li>a');


  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  menuBtn.addEventListener('click',  handleMenu);

  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach(element => element.addEventListener('click', handleMenu));


}

export default menu