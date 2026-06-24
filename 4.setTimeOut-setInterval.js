const timeOut = setTimeout(() => {
    console.log("Result after 2 sec")
}, 2000)

// Cancel it before it runs:
clearTimeout(timeOut);

//setInterval
const timeInterval = setInterval(() => {
    console.log("repeat after 2 sec")
}, 2000)

// Cancel it after an interval:
setTimeout(() => {
    clearInterval(timeInterval)
}, 6000)
