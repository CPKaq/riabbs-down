// 2024年9月10日上午8点
const targetDate = new Date('2024-09-10T08:00:00+08:00');

// DOM
const DOMdays = document.getElementById('digit-days');
const DOMhours = document.getElementById('digit-hours');
const DOMminutes = document.getElementById('digit-minutes');
const DOMseconds = document.getElementById('digit-seconds'); 
  
// 计算时间差
function calculateDelta() {  
    const delta = new Date() - targetDate;
  
    const days = Math.floor(delta / 86400000);
    const hours = Math.floor((delta % 86400000) / 3600000);
    const minutes = Math.floor((delta % 3600000) / 60000);
    const seconds = Math.floor((delta % 60000) / 1000);

    DOMdays.innerText = days;
    DOMhours.innerText = hours;
    DOMminutes.innerText = minutes;
    DOMseconds.innerText = seconds;

    return [days, hours, minutes, seconds];
}

setInterval(calculateDelta, 500);

// 初次调用  
calculateDelta();