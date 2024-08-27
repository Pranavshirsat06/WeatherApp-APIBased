const apiKey = "8ab61f0a50c351c91c40689291f814cc"; // Replace with your actual API key
const link = `https://api.openweathermap.org/data/2.5/weather?lat=19.03642&lon=72.85947&appid=${apiKey}`;
//For any new  city just change longitude and latitude in above link.
var req = new XMLHttpRequest();
req.open("GET", link, true);
req.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById("Weather").innerHTML = obj.weather[0].description;
  document.getElementById("location").innerHTML = obj.name;
  document.getElementById("temp").innerHTML = Math.round(
    obj.main.temp - 273.15
  );
  document.getElementById("icon").src =
    "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
  if (req.status >= 200 && req.status < 400) {
    var temp = obj.main.temp;
  } else {
    console.log("Not available");
  }
};
req.send();
