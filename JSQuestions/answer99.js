
let min=50;
let max=100;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
alert(Math.floor(Math.random() * (max - min) ) + min);
alert("please reload this page if u want to generate another random number.")