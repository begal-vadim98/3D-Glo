import {animate} from './helpers'

const calc = (price) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = calcBlock.querySelector('.calc-type'),
    calcSquare = calcBlock.querySelector('.calc-square'),
    calcCount = calcBlock.querySelector('.calc-count'),
    calcDay = calcBlock.querySelector('.calc-day'),
    total = document.getElementById('total');
  

    const animateChangeTotal = () => {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.style.opacity = progress;
        }
      });
    }

    const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcSquareValue = +calcSquare.value;

      let totalValue = 0;
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
        totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      } else totalValue = 0;

      total.textContent = Math.round(totalValue);
      if(totalValue > 0) animateChangeTotal();
    }

    calcBlock.addEventListener('input', (e) => {

      if(e.target === calcType ||
        e.target ===  calcSquare ||
        e.target === calcCount||
        e.target ===  calcDay) countCalc();
      
    })
}

export default calc