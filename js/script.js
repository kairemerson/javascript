var segundo = 0
var minuto = 0
var hora = 0
var cron
var delay = 1000

function start(){
    cron = setInterval(()=>{
        timer()
        console.log("start");
    },delay)
}

function pause(){
    console.log("pause");
}

function stop(){
    console.log("stop");
}

function timer(){
    var format = "00:00:11"
    document.querySelector(".display").innerHTML = format
}
