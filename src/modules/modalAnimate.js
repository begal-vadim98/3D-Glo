import {animate, bounceEaseInOut} from './helpers'

const modalAnimate = (duration, time, modalHeader, contentModal) => {

  const modal = document.querySelector(modalHeader),
    modalContent = document.querySelector(contentModal);

  animate({
   duration: duration,
   timing: bounceEaseInOut,
   draw: function(progress) {

     let linear = Math.abs(time - progress);

       modal.style.opacity =  linear;
       modalContent.style.opacity = linear;
       
       if(+modal.style.opacity === 0 ) modal.style.display = 'none';
   
     }
     });
  
 }

export default modalAnimate