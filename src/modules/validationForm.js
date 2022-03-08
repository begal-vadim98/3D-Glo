const validation = () => {

  const validationCalc = () => {

    const input = document.querySelectorAll('.calc-block input');
    input.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/\D+/, "");
      })
    })

  }

  const validationFormMessage = () => {
    const inputTex = document.querySelectorAll('form input[name="user_message"]');
 
    inputTex.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^а-яА-Я0-9\-\ \. \,])+/gi, "")
      })
    })
  }

  const validationFormName = () => {
    const inputTex = document.querySelectorAll('form input[name="user_name"]');
  
    inputTex.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^а-яА-Я\ \,])+/gi, "")
      })
    })
  }

  const validationFormEmail = () => {
    const inputTex = [...document.querySelectorAll('form input[type=email]')];
    
    const testEmail = /([^a-zA-Z1-9\@ \- \_ \. \! \* \' \`])+/gi;

    let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    inputTex.forEach(element => {

      element.addEventListener('input', () => {
        element.value = element.value.replace(testEmail, "")

      })
    })

  }
  
  const validationFormTel = () => {
    const input = document.querySelectorAll('form input[type=tel]');
    
    input.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^0-9\+ \( \) \-])+/gi, "");
      })
    })

  }

  validationFormMessage();
  validationFormName();
  validationFormEmail()
  validationFormTel();
  validationCalc();
}

export default validation