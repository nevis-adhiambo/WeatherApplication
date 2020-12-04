const api = {
    key: "805c59105220a88e737ec3a5f6db8449",
    base: "https://api.openweathermap.org/data/2.5/"
        //api.openweathermap.org/data/2.5/
}
const searchbox = document.querySelector('.searchbox');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}


function getResults() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchbox.value + ' &units=metric&appid=805c59105220a88e737ec3a5f6db8449')
        .then(weather => {
            return weather.json()
        }).then(displayResults)

    .catch(err => alert("Wrong city name!"))
}

function displayResults(weather) {
    console.log(weather);


    //getting the city
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    //getting the date

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    //temp

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    console.log(temp);

    let weatherEl = document.querySelector('.current .weather');
    weatherEl.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `&{Math.round()weather.main.temp_min}°C / &{Math.round()weather.main.temp_max}°C`;

}
//date function
function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonths()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}