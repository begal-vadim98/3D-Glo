import {animate} from './helpers'

const calc = (price) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = calcBlock.querySelector('.calc-type'),
    calcSquare = calcBlock.querySelector('.calc-square'),
    calcCount = calcBlock.querySelector('.calc-count'),
    calcDay = calcBlock.querySelector('.calc-day'),
    total = document.getElementById('total');
  

    const animateChangeTotal = (value) => {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
            total.textContent =  Math.round(value * progress) ;
        }
      });
    }

    const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcSquareValue = +calcSquare.value;

      let totalValue = +total.textContent;
      let calcCountValue = 1;
      let calcDayValue = 1;

      if(calcCount.value > 1) {
        calcCountValue +=  +calcCount.value / 10;
      }

      if(calcDay.value && calcDay.value < 5) {
        calcDayValue = 2
      } else if(calcDay.value && calcDay.value < 10) {
        calcDayValue = 1.5
      }

      if(calcType.value && calcSquare.value) {
        totalValue =  price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

        animateChangeTotal(totalValue);
        ;
        

      } else totalValue = 0;

       

    }

    calcBlock.addEventListener('input', (e) => {

      if(e.target === calcType ||
        e.target ===  calcSquare ||
        e.target === calcCount||
        e.target ===  calcDay) countCalc();
      
    })
}

export default calc