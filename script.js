'use strict';

const isNumber = function(num){

  return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
}

const isString = function(str){

  return !parseInt(str);
}

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   rollback: 10,
   adaptive: true,
   services: [],
   allServicePrices: 0,
   fullPrice: 0,
   servicePercentPrice: 0,

   asking: function(){

    appData.title = "";

     do {

      appData.title = prompt("Как называется ваш проект?", "Glo");

    } while (!isString(appData.title))

    for (let i = 0; i < 2; i++) {

      let name;
      let price = 0;

        do {

          name = prompt("Какие типы экранов нужно разработать?");

        } while (!isString(name))

      do {

        price = parseFloat(prompt("Сколько будет стоить данная работа?"));

      } while (!isNumber(price))

      appData.screens.push({id: i, name: name, price: price})

    }

    for (let i = 0; i < 2; i++) {

      let name;
      let price = 0;

        do {

          name = prompt("Какой дополнительный тип услуги нужен?");

        } while (!isString(name))

        do {

          price = parseFloat(prompt("Сколько будет стоить?"));

        } while (!isNumber(price))

    appData.services.push({id: i, name: name, price: price})

  }

  for (let i = 0; i < appData.services.length; i++) {
  let tableHeaders = Object.keys(appData.services[i]);
  let newLink = {};

  for (let j = 0; j < tableHeaders.length; j++) {
    let linkKey = tableHeaders[j];
    let formattedStr = linkKey.replace(/name/g, 'name ' + i);
    newLink[formattedStr] = appData.services[i][linkKey];
  }
  appData.services[i] = newLink;
}

    
  console.log(appData.services)

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function() {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }

    appData.screens.reduce(function(sum, item) {
      appData.screenPrice += item.price
    }, 0); 
    // console.log(appData.screenPrice)

    for (let service of appData.services) {
      appData.allServicePrices += service.price;
    }
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

  getFullPrice: function() {
  
  appData.fullPrice = +appData.screenPrice + appData.allServicePrices;

  },

  getTitle: function(){

  appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },

 getServicePercentPrices: function() {

  appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));
  },

  logger: function (){
    // for(let key in appData){
    //   console.log(key + ":" + appData[key])
    // }
    console.log(appData.screens);
    console.log(appData.screenPrice, appData.allServicePrices)
  },

  start: function(){
    appData.asking(),
    appData.addPrices(),
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