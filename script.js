'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let  rollback = Math.ceil(Math.random() * 100);
let adaptive = !!prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

let getRollbackMessage = function(price) {
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

let getAllServicePrices = function() {

  return servicePrice1 + servicePrice2;
}

allServicePrices = getAllServicePrices()

function getFullPrice() {
  return screenPrice + allServicePrices;

}

fullPrice = getFullPrice()

let getTitle = function(){
  title = title.trim();

 return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

getTitle()

let getServicePercentPrices = function() {

  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

servicePercentPrice = getServicePercentPrices()


console.log(screens.split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());
