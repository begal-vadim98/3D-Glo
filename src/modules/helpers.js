const animate = ({timing, draw, duration}) => {

  let start = performance.now();
  
  requestAnimationFrame(function animate(time) {

    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) timeFraction = 1;

    // if (timeFraction === 1) timeFraction = 0;
  
    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);


    draw(progress); // отрисовать её
  
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

    
  
  });
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}


function linear(timeFraction) {
  return timeFraction;
}

let bounceEaseInOut = makeEaseOut(linear);

export  {animate, bounceEaseInOut}