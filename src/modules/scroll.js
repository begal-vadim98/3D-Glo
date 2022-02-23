const scroll = () => {
  const links = document.querySelectorAll('ul>li>a'),
    linkFullSpecifications = document.querySelector('main > a');

  const newArray = [...links, linkFullSpecifications];

  newArray.forEach( (element)  => {

    element.addEventListener('click', (event) => {
      event.preventDefault();

      const id = element.getAttribute('href').substring(1)
      const section = document.getElementById(id);

       section.scrollIntoView({block: "start", behavior: "smooth"});
    })

  });
}

export default scroll