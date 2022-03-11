const validation = () => {


  let regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
      regPhone = /\d[\d\(\)\ -]{16,18}\d$/,
      regName = /^[а-яА-Я\ /]{2,16}$/;

const toggleClass = (elem, removaClass, addClass) => {
  elem.classList.remove(removaClass);
  elem.classList.add(addClass);
}

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
        element.classList.remove('error');
        element.classList.remove('success');
      })
    })
  }

  const validationFormName = () => {
    const inputTex = document.querySelectorAll('form input[name="user_name"]');
    
    
    inputTex.forEach(element => {
      element.addEventListener('input', () => {
        element.value = element.value.replace(/([^а-яА-Я.])+/gi, "");
        if (regName.test(element.value) === true && element.classList.contains('error')) toggleClass(element,'error', 'success')
        if (regName.test(element.value) !== true && element.classList.contains('success')) element.addEventListener('invalid', toggleClass(element,'success', 'error'));

      })

    })
  }

  const validationFormEmail = () => {
    const inputTex = [...document.querySelectorAll('form input[type=email]')];

    inputTex.forEach(element => {

      element.addEventListener('input', () => {
        element.value = element.value.replace(/[^A-Z0-9@.-_]/gi, "");
        if (regMail.test(element.value) === true && element.classList.contains('error')) toggleClass(element,'error', 'success')
        if (regMail.test(element.value) !== true && element.classList.contains('success')) element.addEventListener('invalid', toggleClass(element,'success', 'error'));
      
      })
    })

  }
  
  const validationFormTel = () => {
    const inputTex = document.querySelectorAll('form input[name="user_phone"]');
  
    inputTex.forEach(element => {
      element.addEventListener('input', () => {
       if (regPhone.test(element.value) === true && element.classList.contains('error')) toggleClass(element,'error', 'success')
        if (regPhone.test(element.value) !== true && element.classList.contains('success')) element.addEventListener('invalid', toggleClass(element,'success', 'error'));
      })
    })
    
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
    maskPhone('form input[type=tel]', '+7 (___)-___-__-__');
     
  }
  

  validationFormMessage();
  validationFormName();
  validationFormEmail()
  validationFormTel();
  validationCalc();

}

export default validation