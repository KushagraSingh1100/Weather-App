let searchbtn = document.querySelector(".search button");
let image = document.querySelector(".image img");
let weather = document.querySelector(".weather");
let placeText = document.querySelector(".place");
let tempText = document.querySelector(".temp");
let textChange = document.querySelector(".city");
let background = document.querySelector(".video-container video");
let inputField = document.getElementById("query");

let cityName;
let type;
let temp;
let wind;

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    cityName = inputField.value;
    if (cityName === "") return;
    getWeather(cityName);
  }
});

searchbtn.addEventListener("click", () => {
  cityName = inputField.value;
  if (cityName === "") return;
  getWeather(cityName);
});

async function getWeather(city) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=fda8fec7247f4f0ab91202636241305&q=${city}&aqi=yes`
  );
  let data = await response.json();
  console.log(data);
  type = data.current.condition.text;
  temp = data.current.temp_c;
  wind = data.current.wind_kph;
  switch (type) {
    case "Clear" || "Sunny":
      image.src = "assets/sun.png";
      background.src = "assets/sunny_mountain.mp4";
      break;
    case "Sunny":
      image.src = "assets/sun.png";
      background.src = "assets/sunny_mountain.mp4";
      break;

    case "Cloudy":
      image.src = "assets/cloudy.png";
      background.src = "assets/sky.mp4";
      break;

    case "Partly cloudy":
      image.src = "assets/cloudy.png";
      background.src = "assets/sky.mp4";
      break;
    case "Overcast":
      image.src = "assets/cloudy.png";
      background.src = "assets/sky.mp4";
      break;
    case "Freezing fog":
      image.src = "assets/fog.png";
      background.src = "assets/sky.mp4";
      break;
    case "Fog":
      image.src = "assets/fog.png";
      background.src = "assets/sky.mp4";
      break;

    case "Rainy":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Patchy rain possible":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Patchy light rain":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Light rain":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Moderate rain at times":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Moderate rain":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Heavy rain at times":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Moderate or heavy rain shower":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Heavy rain":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;
    case "Light freezing rain":
      image.src = "assets/rain.png";
      background.src = "assets/rain.mp4";
      break;

    case "Thundery outbreaks possible":
      image.src = "assets/storm.png";
      background.src = "assets/thunder-storm.mp4";
      break;
    case "Patchy light rain with thunder":
      image.src = "assets/storm.png";
      background.src = "assets/thunder-storm.mp4";
      break;
    case "Moderate or heavy rain with thunder":
      image.src = "assets/storm.png";
      background.src = "assets/thunder-storm.mp4";
      break;
    case "Patchy light snow with thunder":
      image.src = "assets/storm.png";
      background.src = "assets/thunder-storm.mp4";
      break;
    case "Moderate or heavy snow with thunder":
      image.src = "assets/storm.png";
      background.src = "assets/thunder-storm.mp4";
      break;

    case "Patchy light snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Light snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Patchy moderate snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Moderate snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Patchy heavy snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Heavy snow":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Light snow showers":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;
    case "Moderate or heavy snow showers":
      image.src = "assets/snow.png";
      background.src = "assets/snow.mp4";
      break;

    case "Wind":
      image.src = "assets/wind.png";
      background.src = "assets/sky.mp4";
      break;
    case "Windy":
      image.src = "assets/wind.png";
      break;
    case "Haze":
      image.src = "assets/wind.png";
      break;
    case "Hazy":
      image.src = "assets/wind.png";
      break;
    case "Mist":
      console.log("mist");
      image.src = "assets/wind.png";
      background.src = "assets/sunny_mountain.mp4";
      break;
    default:
      console.log("default");
      background.src = "assets/sunny_mountain.mp4";
  }
  textChange.innerText = "Weather";
  placeText.innerText = `${data.location.name}, ${data.location.country}`;
  placeText.classList.remove("hide");
  weather.innerText = `${type}`;
  tempText.classList.remove("hide");
  tempText.innerHTML = `<img src="assets/hot.png" /> ${temp}° C | <img src="assets/wind_speed.png"/ > ${wind}`;
  return type, temp;
}
