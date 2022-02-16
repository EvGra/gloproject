'use strict';


const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

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
    this.screens.length = 0
    rangeSpan.textContent = event.target.value + '%'
    this.rollback = event.target.valueAsNumber

    if (totalCountRollback.value != 0) {
      totalCountRollback.value = Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100))
    }
   },

   disabled: function() {
    startBtn.style.display = "none";
    resetBtn.style.display = "flex";
    buttonPlus.disabled = true;

    const select = document.querySelectorAll('select')
    const input = document.querySelectorAll('input[type=text]')

    select.forEach((item, select) => {
      item.disabled = true;
    });

    input.forEach((item, input) => {
      item.disabled = true;
    });
    
    resetBtn.addEventListener('click', this.reset.bind(this))
   },

   init: function() {
    this.addTitle()
    
    startBtn.addEventListener('click',  this.resutlAddScreen.bind(this));
    buttonPlus.addEventListener('click', this.addScreenBlock)
    rangeRollback.addEventListener('input', this.rollbackChange.bind(this))
    rangeRollback.addEventListener('change', this.rollbackChange.bind(this))
    
   },

    resutlAddScreen: function() {
      if(this.addScreens() !== true)  alert("НЕ выбран select или колличество экранов");
        
      else  this.start();
    },

   addTitle: function() {
    document.title = title.textContent
   },

   showResult: function() {
    total.value = this.screenPrice;
    totalCountOther.value = this.ServicePricesPercent + this.ServicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.totalCount;

    if (totalCountRollback.value != 0){
      this.disabled()
    }
   },

   deleteResult: function() {
    rangeRollback.value = 0;
    rangeSpan.textContent = 0;
    total.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    totalCount.value = 0;

    startBtn.style.display = "flex";
    resetBtn.style.display = "none";
    buttonPlus.disabled = false;
   },

   clearScreens: function() {
    const select = document.querySelectorAll('select')
    const input = document.querySelectorAll('.screen input[type=text]')
    const check = document.querySelectorAll('input[type=checkbox]')

    select.forEach((item, i, arr) => {
      for (i = 1; i < arr.length; i++){
        arr[i].remove()
      }
    })

    input.forEach((item, i, arr) => {
      for (i = 1; i < arr.length; i++){
        arr[i].remove()
      }
    })

    select.forEach((item) => {
      item.disabled = false;
      item.selectedIndex = 0
    })

    input.forEach((item) => {
      item.disabled = false;
      item.value = ''
    })

    check.forEach((item) => {
      item.checked = false;
    })
   
   },

   addScreens: function() {
    this.screens.length = 0
    let screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      
      this.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value
      })
    })
    if(this.screens.find(item => item.price === 0)) {
      return false
    } else return true
   },

   addServices: function(){
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })
   },

   addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen)
   },

  addPrices: function() {

  {for (let screen of this.screens) {
    this.screenPrice += +screen.price;
  }
  for (let screen of this.screens) {
    this.totalCount += +screen.count;
  }
  for (let key in this.servicesNumber) {
    this.ServicePricesNumber += this.servicesNumber[key];
  }

  for (let key in this.servicesPercent) {
    this.ServicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
  }

    this.fullPrice = +this.screenPrice + this.ServicePricesPercent + this.ServicePricesNumber;

  this.servicePercentPrice = Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100));}
  },

  start: function () {
    this.addScreens.bind(this)(),
    this.addServices(),
    this.addPrices(),
    this.showResult()
  },

  reset: function () {
    this.deleteResult(),
    this.clearScreens()
  }

}


appData.init()