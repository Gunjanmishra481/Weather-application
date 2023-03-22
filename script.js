const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '042e799f55msh76dcf4182b36b9ep1cb2f9jsn7691ad93d01b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp2
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity2
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed2
		wind_degrees.innerHTML = response.wind_degress
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})
getweather("Chennai")