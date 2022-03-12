const validate = (list) => {

  let success = true;

  let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
    regPhone = /\d[\d\(\)\ -]{9,11}\d$/,
    regName = /^[а-яА-Я\ /]{2,16}$/,
    regMessage = /[а-яА-Я]{3,}/gi;

  list.forEach(input => {
    input.classList.remove('error');
    input.classList.remove('success');
    
    if ((input.name === 'user_email') && regMail.test(input.value) !== true || 
      (input.name === 'user_phone') && regPhone.test(input.value) !== true ||
      (input.name === 'user_name') && regName.test(input.value) !== true ||
      (input.name === 'user_message') && regMessage.test(input.value) !== true) {

       input.classList.add('error');

      }
    else input.classList.add('success');

    if(!input.classList.contains('success')) success = false;
  })

  return success;
}

export default validate