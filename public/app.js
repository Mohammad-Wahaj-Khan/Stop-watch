// console.log("Hello World 1")
// console.log("Hello World 2")
// console.log("Hello World 3")
// 132


// // setTimeout(function(){}, Time in Miliseconds)

// console.log("Hello World 1")
// setTimeout(function(){
// console.log("Hello World 2")
// },1000)
// console.log("Hello World 3")

// setInterval(function(){}, Time in Miliseconds)

// console.log("Hello World 1")
// setInterval(function(){
//     console.log("Hello World 2")
// },1000
// )
// console.log("Hello World 3")


// var counter = 0
// var interval = setInterval(function(){
//     counter++
//     if(counter === 10){
//         clearInterval(interval)
//     }
//     console.log("Hello World")
//     console.log(counter)
// },1000
// )



var minuteElement = document.getElementById("minuteElement")
var secondElement = document.getElementById("secondElement")
var milisecondElement = document.getElementById("milisecondElement")

var minute = 0
var second = 0
var milisecond = 0

var timeInterval;
function timer(){
    console.log(milisecond++)
    milisecondElement.innerHTML = milisecond
    if(milisecond >= 100){
        second++
        secondElement.innerHTML = second
        milisecond = 0
    }
    else if(second >= 60){
        second = 0
        minute++
        minuteElement.innerHTML = minute
    }
}

function startTimer(element){
    timeInterval = setInterval(timer, 10)
    element.innerHTML = "<i class='fa-solid fa-pause'></i>";
    // element.setAttribute("onclick", "stopTimer(this)");
    element.className = "clr"
}
startBtn.style.display = "none"

function stopTimer(){
    clearInterval(timeInterval)
}
function resetTimer(){
    clearInterval(timeInterval)
    minute = 00
    second = 00
    milisecond = 00
    minuteElement.innerHTML = "00"
    secondElement.innerHTML = "00"
    milisecondElement.innerHTML = "00"
}

