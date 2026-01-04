const monthEl = document.getElementById("month-name");
const dayEL = document.getElementById("day-name");
const numberEl = document.getElementById("day-number");
const yearEl = document.getElementById("day-year");

const day = new Date();
const month = day.getMonth();
monthEl.innerText = day.toLocaleString("en",{
    month:"long"
}) 

const dayname = day.getDay();
dayEL.innerText = day.toLocaleString("en",{
    weekday:"long"
})

const number = day.getDate();
numberEl.innerText = number;

