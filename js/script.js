var segundo = 0
var minuto = 0
var hora = 0
var cron
var delay = 1000

function start(){
    cron = setInterval(()=>{
        timer()
    },delay)
}

function pause(){
    clearInterval(cron)
}

function stop(){
    clearInterval(cron)
    console.log("stop");
}

function timer(){
    segundo++
    if(segundo == 60){
        segundo = 0
        minuto++
        if(minuto == 60){
            minuto = 0
            hora++
        }
    }
    var formatada = `
    ${(hora < 10 ? "0" + hora : hora)} : ${(minuto < 10 ? "0" + minuto : minuto)} : ${(segundo < 10 ? "0" + segundo : segundo)}`
    document.querySelector(".display").innerHTML = formatada
}
