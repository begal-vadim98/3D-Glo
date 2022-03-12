import validate from './validate'

const validation = (formMessege, formName, formEmail, formTell, invalidClass = 'invalid', validClass = 'valid' ) => {

  const  regPhone = /[^0-9]/,
    regEmail = /[^a-zA-Z\d@-_.!*'`]/gi,
    regMessege = /([^а-яА-Я0-9?!-., ])+/gi,
    regName = /([^а-яА-Я. ])+/gi;

const forInputValid = (reg, elem) => {
  const inputTex = document.querySelectorAll(`form input[name=${elem}]`);

  inputTex.forEach(element => {

    element.addEventListener('input', () => {
      element.value = element.value.replace(reg, "");
      if (element.classList.contains(invalidClass) || element.classList.contains(validClass))
        validate([element]);
    })

    element.addEventListener('blur', () => {
      if(element.name === 'user_name' && element.value) element.value = element.value[0].toUpperCase() + (element.value).slice(1);
    })

    element.addEventListener('invalid', event => {
      event.preventDefault();
      validate([event.target]);
    });
  })

}

  const validationCalc = () => {

    const input = document.querySelectorAll('.calc-block input');
    input.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/\D+/, "");
      })
    })

  }

    
    
 

  const validationFormTel = () => {

    
    function maskPhone(selector, masked = '+7 (__) --') { const elems = document.querySelectorAll(selector);

      function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
        let i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = newValue.indexOf("_");
        if (i != -1) {
          newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
          function (a) {
            return "\\d{1," + a.length + "}";
          }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = newValue;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      
      }
      
      for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
      }
      }
    maskPhone('form input[type=tel]', '+7__________');
     
  }
  

 
  try {
    forInputValid(regMessege, formMessege);
    forInputValid(regName, formName);
    forInputValid(regEmail, formEmail);
    forInputValid(regPhone, formTell);
    validationFormTel();
    validationCalc();

  } catch (error) {
    console.log(error.message)
  }

}

export default validation