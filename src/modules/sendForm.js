const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement('div'),
    loadText = 'Загрузка...',
    errorText = 'Ошибка...',
    successText = 'Спасибо! Мы с вами свяжемся';
  
  const validate = (list) => {

    let success = true;

    let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

    list.forEach(input => {
      if(input.name === 'user_email') success = regMail.test(input.value)
      if(input.value === "") success = false;
    })
    
    return success;
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((response) => response.json())
  }
  
  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};
    
    statusBlock.textContent = loadText;
    form.append(statusBlock);
    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      console.log(element)

      if(elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if(elem.type === 'input') formBody[elem.id] = element.value;
    })

    if(validate(formElements)) {
      console.log(validate(formElements));
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => input.value = "");
        })
        .catch(error => statusBlock.textContent = errorText);

    } else alert('Данные не валидны!');

  }

  try {

    if(!form) throw new  Error('Форма не найдена');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      submitForm();
      
    })
  } catch(error) {
    console.log(error.message)
  } 
  }
  
export default sendForm