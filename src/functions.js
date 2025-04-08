function hello(name){
    return(`hello ${name}`);
}

function feetTOacre (feet){
    const acre = feet / 43560;
    return acre;
}

function mowTime(length, width, time){
    const totalTime = (length*width)*time;
    return totalTime;
}

function airQuality(aqi) {
    if (aqi >= 0 && aqi <= 50) {
      return "Good";
    } else if (aqi <= 100) {
      return "Moderate";
    } else if (aqi <= 150) {
      return "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
      return "Unhealthy";
    } else if (aqi <= 300) {
      return "Very Unhealthy";
    } else {
      return "Hazardous";
    }
  }

  function yee_ha(number) {
    const divisibleBy3 = number % 3 === 0;
    const divisibleBy7 = number % 7 === 0;
  
    if (divisibleBy3 && divisibleBy7) {
      return "Yee Ha";
    } else if (divisibleBy3) {
      return "Yee";
    } else if (divisibleBy7) {
      return "Ha";
    } else {
      return "Nada";
    }
  }

  function slope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;
    if (run === 0) {
      return Infinity;
    }
    return rise / run;
  }

export {hello, feetTOacre, mowTime, airQuality, yee_ha, slope}

