var segundo = 0
var minuto = 0
var hora = 0
var cron
var delay = 1000
var addInterval = 0

function start(){
    if(addInterval == 0){
        cron = setInterval(()=>{
            timer()
        },delay)
        addInterval = 1
    }
}

function pause(){
    clearInterval(cron)
    addInterval = 0
}

function stop(){
    clearInterval(cron)
    addInterval = 0
    hora = 0 
    minuto = 0
    segundo = 0
    document.querySelector(".display").innerHTML = "00 : 00 : 00"
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
