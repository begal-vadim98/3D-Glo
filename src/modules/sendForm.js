const sendForm = ({
  formId,
  someElem = []
}) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement('div');
  const doubleBounce1 = document.createElement('div');
  const doubleBounce2 = document.createElement('div');

  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Мы с вами свяжемся';

  const validate = (list) => {

    let success = true;

    let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
      regPhone = /\d[\d\(\)\ -]{12,12}\d$/,
      regName = /^[а-яА-Я\ /]{2,16}$/;

    list.forEach(input => {

      if ((input.name === 'user_email') && regMail.test(input.value) !== true) {

        input.classList.add('error');

      } else if ((input.name === 'user_phone') && regPhone.test(input.value) !== true) {

        input.classList.add('error');

      } else if (input.name === 'user_name' && regName.test(input.value) !== true) {

        input.classList.add('error');

      } else if (input.value === "") {

        input.classList.add('error');

      } else input.classList.add('success');

      if(!input.classList.contains('success')) success = false;
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



    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);


      if (elem.type === 'block' && +element.textContent > 0) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input' && +element.value > 0) formBody[elem.id] = element.value;
    })

    if (validate(formElements)) {

      statusBlock.textContent = "";
      statusBlock.classList.add('sk-double-bounce');

      doubleBounce1.classList.add('sk-child', 'sk-double-bounce-1');
      doubleBounce2.classList.add('sk-child', 'sk-double-bounce-2');

      form.append(statusBlock);
      statusBlock.append(doubleBounce1, doubleBounce2);

      sendData(formBody)
        .then(data => {

          statusBlock.classList.remove('sk-double-bounce');
          doubleBounce1.classList.remove('sk-child', 'sk-double-bounce-1');
          doubleBounce2.classList.remove('sk-child', 'sk-double-bounce-2');
          // statusBlock.style.color = 'white';
          statusBlock.textContent = successText;

          setTimeout(() => form.removeChild(statusBlock), 1500);

          formElements.forEach(input => {

            input.value = "";
            input.classList.remove('error');
            input.classList.remove('success');

          });
        })
        .catch(error => statusBlock.textContent = errorText);

    }

  }

  try {

    if (!form) throw new Error('Форма не найдена');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

    })
  } catch (error) {
    console.log(error.message)
  }
}

export default sendForm