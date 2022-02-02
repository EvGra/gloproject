'use strict';

let title;
let screens;
let screenPrice;
let rollback = Math.ceil(Math.random() * 100);
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function(num){

  return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
}


const asking = function(){
  title = prompt("Как называется ваш проект?", "Glo");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

   while (!isNumber(screenPrice)){

    screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));

   } 
  
   
   //screenPrice = parseFloat(screenPrice);

  adaptive = confirm("Нужен ли адаптив на сайте?");
}

asking()

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

const getRollbackMessage = function(price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

const getAllServicePrices = function() {

  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1){
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

   do {
    allServicePrices = prompt("Сколько будет стоить?");
  } while (!isNumber(allServicePrices))

  allServicePrices = parseFloat(allServicePrices);

    sum += allServicePrices;
   }
  return sum;
}

function getFullPrice() {
  
  return screenPrice + allServicePrices;

}

const getTitle = function(){
  
  title = title.trim();

 return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

const getServicePercentPrices = function() {

  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
getTitle()
servicePercentPrice = getServicePercentPrices()


console.log(screens.split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());
console.log(typeof(title),
 typeof(screens),
 typeof(screenPrice),
 typeof(rollback),
 typeof(adaptive),
 typeof(service1),
 typeof(service2),
 typeof(allServicePrices),
 typeof(fullPrice),
 typeof(servicePercentPrice)
);