'use strict';


const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const input = document.querySelector('.rollback > .main-controls__range > input');
const range = document.querySelector('.rollback > .main-controls__range > .range-value')

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

const rangeRollback = document.querySelector('#range');
const rangeSpan = document.querySelector('.range-value');

let screens = document.querySelectorAll('.screen');

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   totalCount: 0,
   rollback: 0,
   adaptive: true,
   servicesPercent: {},
   servicesNumber: {},
   ServicePricesPercent: 0,
   ServicePricesNumber: 0,
   fullPrice: 0,
   servicePercentPrice: 0,

   rollbackChange: function(event) {
     appData.screens.length = 0
    rangeSpan.textContent = event.target.value + '%'
    appData.rollback = event.target.valueAsNumber

    if (totalCountRollback.value != 0) {
      
      totalCountRollback.value = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100))
    }
   },

   init: function() {
    appData.addTitle()
    
    startBtn.addEventListener('click',  appData.resutlAddScreen);
    buttonPlus.addEventListener('click', appData.addScreenBlock)
    rangeRollback.addEventListener('input', appData.rollbackChange)
    rangeRollback.addEventListener('change', appData.rollbackChange)
    
   },

    resutlAddScreen: function() {
      if(appData.addScreens() !== true)  alert("НЕ выбран select или колличество экранов");
        
      else  appData.start();
    },

   addTitle: function() {
    document.title = title.textContent
   },

   showResult: function() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.ServicePricesPercent + appData.ServicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.totalCount;
   },

   addScreens: function() {
    appData.screens.length = 0
    let screens = document.querySelectorAll('.screen');

    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      
      appData.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value
      })
    })
    if(appData.screens.find(item => item.price === 0)) {
      return false
    } else return true
   },

   addServices: function(){
    otherItemsPercent.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
   },

   addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen)
   },

  addPrices: function() {

  {for (let screen of appData.screens) {
    appData.screenPrice += +screen.price;
  }
  for (let screen of appData.screens) {
    appData.totalCount += +screen.count;
  }
  for (let key in appData.servicesNumber) {
    appData.ServicePricesNumber += appData.servicesNumber[key];
  }

  for (let key in appData.servicesPercent) {
    appData.ServicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
  }

    appData.fullPrice = +appData.screenPrice + appData.ServicePricesPercent + appData.ServicePricesNumber;

  appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));}
  },

  logger: function (){
    // for(let key in appData){
    //   console.log(key + ":" + appData[key])
    // }
    // console.log(appData.screens);
    // console.log(appData.screenPrice, appData.allServicePrices)
  },

  start: function(){
    appData.addScreens(),
    appData.addServices(),
    appData.addPrices(),
    appData.showResult()
    
  //   appData.logger()
  }

}


appData.init()