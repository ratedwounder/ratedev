const cities = {
    2643743: 'London',
    2968815: 'Paris',
    6359304: 'Madrid',
    703448: 'Kyiv',
  };

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "fe2e44b31b2b10e20ef1f001debfee3f"
}

let select = document.createElement('select');
    document.querySelector('.out').insertBefore(select, document.querySelector('.weather'));
    select.classList.add('city-list');

for (let id in cities) {
    select.innerHTML += `<option value="${[id]}">${cities[id]}</option>`;
  }

function getWeather() {
    const city = document.querySelector('.city-list').value;
    fetch(`${param.url}weather?id=${city}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data); 
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}&deg;`;
    document.querySelector('.description').textContent = data.weather[0]['description'];
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} m / sec`;
}

getWeather(); 
document.querySelector('.city-list').onchange = getWeather;