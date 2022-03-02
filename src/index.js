import timer from './modules/timer'
import toggleMenu from './modules/toggleMenu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import validation from './modules/validationForm'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'

timer('29 october 2022');
toggleMenu();
modal();
scroll();
validation();
tabs();
slider('.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot-active');
calc(100);