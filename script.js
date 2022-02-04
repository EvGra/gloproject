'use strict';

const isNumber = function(num){

  return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
}

const appData = {
   title: '',
   screens: '',
   screenPrice: 0,
   rollback: Math.ceil(Math.random() * 100),
   adaptive: true,
   service1: '',
   service2: '',
   allServicePrices: 0,
   fullPrice: 0,
   servicePercentPrice: 0,

   asking: function(){
    appData.title = prompt("Как называется ваш проект?", "Glo");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {

      appData.screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));

    } while (!isNumber(appData.screenPrice))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getRollbackMessage: function(price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getAllServicePrices: function() {

  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1){
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

   do {
    appData.allServicePrices = prompt("Сколько будет стоить?");
  } while (!isNumber(appData.allServicePrices))

    appData.allServicePrices = parseFloat(appData.allServicePrices);

      sum += appData.allServicePrices;
    }
    return sum;
  },

  getFullPrice: function() {
  
  return appData.screenPrice + appData.allServicePrices;

  },

  getTitle: function(){
  
  appData.title = appData.title.trim();

 return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
  },

 getServicePercentPrices: function() {

  return Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));
  },

  logger: function (){
    for(let key in appData){
      console.log(key)
    }
  },

  start: function(){
    appData.asking(),
    appData.getAllServicePrices(),
    appData.getFullPrice(),
    appData.getTitle(),
    appData.getServicePercentPrices(),
    appData.logger()
  }

}


appData.start()



// console.log(screens.split(", "));
// console.log(getRollbackMessage(appData.fullPrice));
// console.log(getServicePercentPrices());
// console.log(typeof(title),
//  typeof(screens),
//  typeof(screenPrice),
//  typeof(rollback),
//  typeof(adaptive),
//  typeof(service1),
//  typeof(service2),
//  typeof(allServicePrices),
//  typeof(fullPrice),
//  typeof(servicePercentPrice)
// );