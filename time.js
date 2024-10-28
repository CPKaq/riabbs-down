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
}

// 文档加载完成后启动计时器
window.onload = function() {  
    calculateDelta();
    setInterval(calculateDelta, 500);
    console.log("置き去れ無数の朝を蹴散らして　消されたキミを回帰に探し");
    console.log("繰り出せ無頭の亡霊と化して　全てはキミの帰還に咲く");
};  
