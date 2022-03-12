import timer from './modules/timer'
import toggleMenu from './modules/toggleMenu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import validation from './modules/validationForm'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('30 april 2022');
toggleMenu();
modal();
scroll();
validation('user_message', 'user_name', 'user_email', 'user_phone',  'error', 'success');
tabs();
slider('.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot-active');
calc(100);
sendForm({
  formId: 'form1', 
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});

sendForm({
  formId: 'form2', 
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});

sendForm({
  formId: 'form3'
});