let a;
let date;
let time;
const option = {
    weekday: 'long',
    years: 'numeric',
    month: 'long',
    day: 'numeric',
};

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, option);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = "Current Time " + time;
    document.getElementById('day').innerHTML = " on " + date;
}, 1000);