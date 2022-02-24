const validation = () => {

  const validationCalc = () => {

    const input = document.querySelectorAll('.calc-block input');
    input.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/\D+/, "");
      })
    })

  }

  const validationForm = () => {
    const inputTex = [...document.querySelectorAll('form input[placeholder="Ваше сообщение"]'), ...document.querySelectorAll('form input[type=text]')];

    inputTex.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^а-яА-Я\-\ \. \,])+/gi, "")
      })
    })

  }

  const validationFormEmail = () => {
    const inputTex = [...document.querySelectorAll('form input[type=email]')];
    const testEmail = /([^a-zA-Z1-9\@ \- \_ \. \! \* \' \`])+/gi
    console.log(inputTex)
    inputTex.forEach(element => {

      element.addEventListener('input', () => {
        console.log(testEmail.test(element.value))

        element.value = element.value.replace(testEmail, "")
      })
    })

  }
  const validationFormTel = () => {
    const input = document.querySelectorAll('form input[type=tel]');

    input.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^0-9\+ \( \) \-])+/gi, "")
      })
    })

  }

  validationForm();
  validationFormEmail()
  validationFormTel();
  validationCalc();
}

export default validation