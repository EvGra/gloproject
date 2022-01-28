let title = "GloAcademy";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = Math.ceil(Math.random() * 100);
let fullPrice = 1000;
let adaptive = true;


console.log(typeof(title));

console.log(typeof(fullPrice));

console.log(typeof(adaptive));

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");

console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 10000));
