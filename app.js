const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveAway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 8, 10, 17, 30, 0);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate()
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();
let day = weekdays[futureDate.getDay()];

giveAway.textContent = `My birthday is in ${day}, ${date} ${month} ${year} ${hours}:${minutes}`;

//futureTime in ms

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s;
    //1hr = 60m
    // 1d = 24hrs

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate the calues
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set array values

    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadLine.innerHTML = `
            <h4 class="exprired">Sorry this page has expired </h4>
        `
    }

}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
