const cal = document.querySelector("#date");
const clock = document.querySelector("#clock");

function nowTime() {
    const today = new Date();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const hours= String(today.getHours()).padStart(2,"0");
    const minutes=String(today.getMinutes()).padStart(2,"0");
    const seconds=String(today.getSeconds()).padStart(2,"0");
    cal.innerText = `${month}월 ${date}일`;
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

nowTime();
setInterval(nowTime,1000);