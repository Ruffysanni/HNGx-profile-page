//Get day of the week
const dayOfTheWeek = document.getElementById("currentDayOfTheWeek");
let getToDay = new Date();
let presentDay = getToDay.getDay();
if(presentDay == 1){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else if(presentDay == 2){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else if(presentDay == 3){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else if(presentDay == 4){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else if(presentDay == 5){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else if(presentDay == 6){
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
} else {
    dayOfTheWeek.innerHTML = `Today is Day ${presentDay} of the week.`;
}

//Get current Time in UTC
const getCurrentTIme = document.getElementById("currentUTCTime");
let getUTCTime = new Date();
let currentUTCHour = getUTCTime.getUTCHours();
let currentUTCMinutes = getUTCTime.getUTCMinutes();
let currentUTCSeconds = getUTCTime.getUTCSeconds();
let currentTime = `TIME: ${currentUTCHour}:${currentUTCMinutes}:${currentUTCSeconds} UTC`
getCurrentTIme.innerHTML = currentTime;

