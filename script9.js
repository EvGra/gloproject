let date = new Date()

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()

let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

let weekDay = date.getDay()

let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

let months = ['Января',' Февраля', 'Марта',' Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let hours;
let mins;
let secs;

if (hour === 1 || hour === 21){
  hours = " час"
} else if (hour > 1 && hour < 5 || hour > 21 && hour < 25){
  hours = "часа"
} else {
  hours = " часов"
}

if (month < 10) {
  month = "0" + month
}

if (day < 10) {
  day = "0" + day
}

if (hour < 10) {
  hour = "0" + hour
}

if (min < 10) {
  min = "0" + min
}

if (sec < 10) {
  sec = "0" + sec
}

function getWeekDay(date) {

  return weekDays[weekDay];
}

function getMonths(date) {

  return months[month];
}

alert("Сегодня " + getWeekDay() + ", " + day + " " + getMonths() + " " + year + " года," + hour + " " + hours + " " + min + " минут " + sec + " секунд \n" + day + "." + month + "." + year + " - " + hour + ":" + min + ":" + sec); 
        
setInterval(refreshPage, 1000);
function refreshPage() {
    window.location.reload();
}