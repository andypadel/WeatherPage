function todayWeather() {
	city = document.getElementById("mySearch").value;
	console.log(city);
	$.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&APPID=a25d8c40d302f4a26254a9a92a9f8115",
		success: function (json_weather) {
			data = json_weather;
			var weather = data;
			console.log("weather", weather);
			createWeatherDisplay(data);
		},
		
		error: function (json) {
			alert("Location not found. Please check entry is spelt correctly.");
		}
	});
};

function forecastWeather(){
	city = document.getElementById("mySearch").value;
	console.log(city);
	$.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=metric&APPID=a25d8c40d302f4a26254a9a92a9f8115",
		success: function (json_forecast) {
			data2 = json_forecast;
			var forecast = data2.list[8];
			console.log("forecast", forecast);
			createTomorrowDisplay();
		},
		error: function (json) {
			alert("Location not found. Please check entry is spelt correctly.");
		}
	});
};

$(document).ready(function () {
//	createDate();
	document.getElementById("mySearch").addEventListener("keydown", function(event) {
		if (event.which==13){
			todayWeather();
		}
})
});
//})

function createWeatherTable(data) {
	var wTable = document.getElementById("wTable");
	document.getElementById("wTable").innerHTML = "";

	var sunriseTime = new Date(data.sys["sunrise"] * 1000);
	var sunriseHours = sunriseTime.getHours();
	var sunriseMinutes = "0" + sunriseTime.getMinutes();
	var sunriseSeconds = "0" + sunriseTime.getSeconds();

	var sunsetTime = new Date(data.sys["sunset"] * 1000);
	var sunsetHours = sunsetTime.getHours();
	var sunsetMinutes = "0" + sunsetTime.getMinutes();
	var sunsetSeconds = "0" + sunsetTime.getSeconds();
	
	var cityName = data.name;
	var country = data.sys["country"];
	var currentTemp = data.main["temp"];
	var maxTemp = data.main["temp_max"];
	var minTemp = data.main["temp_min"];
	var humidity = data.main["humidity"];
	var formattedSunsetTime = sunsetHours + ':' + sunsetMinutes.substr(-2);
	var formattedSunriseTime = sunriseHours + ':' + sunriseMinutes.substr(-2);

	var row = document.createElement("tr");
	
	var cityNameCell = document.createElement("td");
	var countryCell = document.createElement("td");
	var currentTempCell = document.createElement("td");
	var maxTempCell = document.createElement("td");
	var minTempCell = document.createElement("td");
	var humidityCell = document.createElement("td");
	var sunriseCell = document.createElement("td");
	var sunsetCell = document.createElement("td");
	
	cityNameCell.append(cityName);
	countryCell.append(country);
	currentTempCell.append(currentTemp);
	maxTempCell.append(maxTemp);
	minTempCell.append(minTemp);
	humidityCell.append(humidity);
	sunriseCell.append(formattedSunriseTime);
	sunsetCell.append(formattedSunsetTime);

	row.append(cityNameCell);
	row.append(countryCell);
	row.append(currentTempCell);
	row.append(maxTempCell);
	row.append(minTempCell);
	row.append(humidityCell);
	row.append(sunriseCell);
	row.append(sunsetCell);

	wTable.append(row);


}

function createWeatherDisplay(data) {
	document.getElementById("wDisplay").innerHTML = " ";

	var sunriseTime = new Date(data.sys["sunrise"] * 1000);
	var sunriseHours = sunriseTime.getHours();
	var sunriseMinutes = "0" + sunriseTime.getMinutes();
	var sunriseSeconds = "0" + sunriseTime.getSeconds();

	var sunsetTime = new Date(data.sys["sunset"] * 1000);
	var sunsetHours = sunsetTime.getHours();
	var sunsetMinutes = "0" + sunsetTime.getMinutes();
	var sunsetSeconds = "0" + sunsetTime.getSeconds();
	
	var buttonW = document.createElement("button");
	var buttonF = document.createElement("button");
	
	var wBoxDiv3a = document.createElement("div");
	var boxH = document.createElement("h3");
	
	wBoxDiv3a.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3a.setAttribute("id", "wBox1");
	boxH.setAttribute("id", "locationP");
	
	document.getElementById("wDisplay").append(wBoxDiv3a);
	document.getElementById("wBox1").append(boxH);
	
	var wBoxDiv4 = document.createElement("div");
	var wGC = document.createElement("div");
	var wImg = document.createElement("img");
	var wSpan = document.createElement("span");
	
	wBoxDiv4.setAttribute("class", "col-md-4");
	wBoxDiv4.setAttribute("id", "weatherDiv");
	wGC.setAttribute("class", "wGC");
	wGC.setAttribute("id", "wGC");
	wImg.setAttribute("id", "weatherImg");
	wSpan.setAttribute("id", "weatherSpan");
	
	document.getElementById("wDisplay").append(wBoxDiv4);
	document.getElementById("weatherDiv").append(wGC);
	document.getElementById("wGC").append(wImg);
	document.getElementById("wGC").append(wSpan);
	
	var BoxDiv12a = document.createElement("div");
	var BoxDiv12b = document.createElement("div");
	var wBoxDiv3b = document.createElement("div");
	var wBoxDiv3c = document.createElement("div");
	var wBoxDiv3d = document.createElement("div");
	var wBoxDiv3e = document.createElement("div");
	var wBoxDiv6a = document.createElement("div");
	var wBoxDiv6b = document.createElement("div");
	var boxHa = document.createElement("h3");
	var boxHb = document.createElement("h3");
	var boxHc = document.createElement("h3");
	var boxHd = document.createElement("h3");
	var boxHe = document.createElement("h3");
	var boxHf = document.createElement("h3");
	var pa = document.createElement("p");
	var pb = document.createElement("p");
	var pc = document.createElement("p");
	var pd = document.createElement("p");
	var pe = document.createElement("p");
	var pf = document.createElement("p");
	
	BoxDiv12a.setAttribute("class", "col-md-12");
	BoxDiv12a.setAttribute("id", "4divGP");
	
	wBoxDiv3b.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3b.setAttribute("id", "cTempDiv");
	boxHa.setAttribute("id", "cTempH");
	boxHa.innerHTML = "Current temp.";
	pa.setAttribute("class", "wP");
	pa.setAttribute("id", "cTempP");

	document.getElementById("wDisplay").append(BoxDiv12a);
	document.getElementById("4divGP").append(wBoxDiv3b);
	document.getElementById("cTempDiv").append(boxHa);
	document.getElementById("cTempDiv").append(pa);
	
	wBoxDiv3c.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3c.setAttribute("id", "maxTempDiv");
	boxHb.setAttribute("id", "maxTempH");
	boxHb.innerHTML = "Max. temp.";
	pb.setAttribute("class", "wP");
	pb.setAttribute("id", "maxTempP");
	
	document.getElementById("4divGP").append(wBoxDiv3c);
	document.getElementById("maxTempDiv").append(boxHb);
	document.getElementById("maxTempDiv").append(pb);

	wBoxDiv3d.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3d.setAttribute("id", "minTempDiv");
	boxHc.setAttribute("id", "minTempH");
	boxHc.innerHTML = "Min. temp.";
	pc.setAttribute("class", "wP");
	pc.setAttribute("id", "minTempP");

	document.getElementById("4divGP").append(wBoxDiv3d);
	document.getElementById("minTempDiv").append(boxHc);
	document.getElementById("minTempDiv").append(pc);
	
	wBoxDiv3e.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3e.setAttribute("id", "humidityDiv");
	boxHd.setAttribute("id", "humidityH");
	boxHd.innerHTML = "Humidity";
	pd.setAttribute("class", "wP");
	pd.setAttribute("id", "humidityP");

	document.getElementById("4divGP").append(wBoxDiv3e);
	document.getElementById("humidityDiv").append(boxHd);
	document.getElementById("humidityDiv").append(pd);
	
	
	BoxDiv12b.setAttribute("class", "col-md-12");
	BoxDiv12b.setAttribute("id", "2divGP");
	
	wBoxDiv6a.setAttribute("class", "col-md-6 wBox");
	wBoxDiv6a.setAttribute("id", "sunriseDiv");
	boxHe.setAttribute("id", "sunriseH");
	boxHe.innerHTML = "Sunrise &#40;GMT+1&#41;";
	pe.setAttribute("class", "wP");
	pe.setAttribute("id", "sunriseP");

	document.getElementById("wDisplay").append(BoxDiv12b);
	document.getElementById("2divGP").append(wBoxDiv6a);
	document.getElementById("sunriseDiv").append(boxHe);
	document.getElementById("sunriseDiv").append(pe);
	
	wBoxDiv6b.setAttribute("class", "col-md-6 wBox");
	wBoxDiv6b.setAttribute("id", "sunsetDiv");
	boxHf.setAttribute("id", "sunsetH");
	boxHf.innerHTML = "Sunset &#40;GMT+1&#41;";
	pf.setAttribute("class", "wP");
	pf.setAttribute("id", "sunsetP");

	document.getElementById("2divGP").append(wBoxDiv6b);
	document.getElementById("sunsetDiv").append(boxHf);
	document.getElementById("sunsetDiv").append(pf);
	
	
	var cityName = data.name;
	var country = data.sys["country"];
	var weatherType = data.weather[0]["description"];
	var weatherLogo = data.weather[0]["icon"];
	var weatherIcon = document.getElementById("weatherImg");
	var currentTemp = data.main["temp"];
	var maxTemp = data.main["temp_max"];
	var minTemp = data.main["temp_min"];
	var humidity = data.main["humidity"];
	var formattedSunsetTime = sunsetHours + ':' + sunsetMinutes.substr(-2);
	var formattedSunriseTime = sunriseHours + ':' + sunriseMinutes.substr(-2);
	
	document.getElementById("button-div").innerHTML = " ";
	buttonW.innerHTML = "Today's Weather";
	buttonF.innerHTML = "Weather in 24h";
	buttonW.setAttribute("type", "submit");
	buttonW.setAttribute("onclick", "todayWeather()")
	buttonW.setAttribute("class","buttonW");
	buttonF.setAttribute("type", "submit");
	buttonF.setAttribute("onclick", "forecastWeather()");
	buttonF.setAttribute("class","buttonF");
	document.getElementById("button-div").append(buttonW, buttonF);
	
	document.getElementById("weatherSpan").innerHTML = weatherType;
	weatherIcon.setAttribute ("src", "http://openweathermap.org/img/w/" + weatherLogo + ".png");
	document.getElementById("locationP").innerHTML = cityName + ", " + country;
	document.getElementById("cTempP").innerHTML = currentTemp + "&deg;C";
	document.getElementById("maxTempP").innerHTML = maxTemp + "&deg;C";
	document.getElementById("minTempP").innerHTML = minTemp + "&deg;C";
	document.getElementById("humidityP").innerHTML = humidity + "&#37;";
	document.getElementById("sunriseP").innerHTML = formattedSunriseTime;
	document.getElementById("sunsetP").innerHTML = formattedSunsetTime;
}

function createDate(){
	var todayDate = new Date();
	var dd = todayDate.getDate();
	var mm = todayDate.getMonth()+1;
	var yyyy = todayDate.getFullYear();
	if(dd<10){
		dd='0'+dd;
	}
	if(mm<10){
		mm='0'+mm;
	}
	todayDate = dd + "." + mm + "." + yyyy;
	document.getElementById("date").innerHTML = todayDate;
}

function createTomorrowDisplay(){
	
	document.getElementById("wDisplay").innerHTML = " ";

	var sunriseTime = new Date(data.sys["sunrise"] * 1000);
	var sunriseHours = sunriseTime.getHours();
	var sunriseMinutes = "0" + sunriseTime.getMinutes();
	var sunriseSeconds = "0" + sunriseTime.getSeconds();

	var sunsetTime = new Date(data.sys["sunset"] * 1000);
	var sunsetHours = sunsetTime.getHours();
	var sunsetMinutes = "0" + sunsetTime.getMinutes();
	var sunsetSeconds = "0" + sunsetTime.getSeconds();
	
	var buttonW = document.createElement("button");
	var buttonF = document.createElement("button");
	
	var wBoxDiv3a = document.createElement("div");
	var boxH = document.createElement("h3");
	
	wBoxDiv3a.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3a.setAttribute("id", "wBox1");
	boxH.setAttribute("id", "locationP");
	
	document.getElementById("wDisplay").append(wBoxDiv3a);
	document.getElementById("wBox1").append(boxH);
	
	var wBoxDiv4 = document.createElement("div");
	var wGC = document.createElement("div");
	var wImg = document.createElement("img");
	var wSpan = document.createElement("span");
	
	wBoxDiv4.setAttribute("class", "col-md-4");
	wBoxDiv4.setAttribute("id", "weatherDiv");
	wGC.setAttribute("class", "wGC");
	wGC.setAttribute("id", "wGC");
	wImg.setAttribute("id", "weatherImg");
	wSpan.setAttribute("id", "weatherSpan");
	
	document.getElementById("wDisplay").append(wBoxDiv4);
	document.getElementById("weatherDiv").append(wGC);
	document.getElementById("wGC").append(wImg);
	document.getElementById("wGC").append(wSpan);
	
	var BoxDiv12a = document.createElement("div");
	var BoxDiv12b = document.createElement("div");
	var wBoxDiv3b = document.createElement("div");
	var wBoxDiv3c = document.createElement("div");
	var wBoxDiv3d = document.createElement("div");
	var wBoxDiv3e = document.createElement("div");
	var wBoxDiv6a = document.createElement("div");
	var wBoxDiv6b = document.createElement("div");
	var boxHa = document.createElement("h3");
	var boxHb = document.createElement("h3");
	var boxHc = document.createElement("h3");
	var boxHd = document.createElement("h3");
	var boxHe = document.createElement("h3");
	var boxHf = document.createElement("h3");
	var pa = document.createElement("p");
	var pb = document.createElement("p");
	var pc = document.createElement("p");
	var pd = document.createElement("p");
	var pe = document.createElement("p");
	var pf = document.createElement("p");
	
	BoxDiv12a.setAttribute("class", "col-md-12");
	BoxDiv12a.setAttribute("id", "4divGP");
	
	wBoxDiv3b.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3b.setAttribute("id", "cTempDiv");
	boxHa.setAttribute("id", "cTempH");
	boxHa.innerHTML = "Current temp.";
	pa.setAttribute("class", "wP");
	pa.setAttribute("id", "cTempP");

	document.getElementById("wDisplay").append(BoxDiv12a);
	document.getElementById("4divGP").append(wBoxDiv3b);
	document.getElementById("cTempDiv").append(boxHa);
	document.getElementById("cTempDiv").append(pa);
	
	wBoxDiv3c.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3c.setAttribute("id", "maxTempDiv");
	boxHb.setAttribute("id", "maxTempH");
	boxHb.innerHTML = "Max. temp.";
	pb.setAttribute("class", "wP");
	pb.setAttribute("id", "maxTempP");
	
	document.getElementById("4divGP").append(wBoxDiv3c);
	document.getElementById("maxTempDiv").append(boxHb);
	document.getElementById("maxTempDiv").append(pb);

	wBoxDiv3d.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3d.setAttribute("id", "minTempDiv");
	boxHc.setAttribute("id", "minTempH");
	boxHc.innerHTML = "Min. temp.";
	pc.setAttribute("class", "wP");
	pc.setAttribute("id", "minTempP");

	document.getElementById("4divGP").append(wBoxDiv3d);
	document.getElementById("minTempDiv").append(boxHc);
	document.getElementById("minTempDiv").append(pc);
	
	wBoxDiv3e.setAttribute("class", "col-md-3 wBox");
	wBoxDiv3e.setAttribute("id", "humidityDiv");
	boxHd.setAttribute("id", "humidityH");
	boxHd.innerHTML = "Humidity";
	pd.setAttribute("class", "wP");
	pd.setAttribute("id", "humidityP");

	document.getElementById("4divGP").append(wBoxDiv3e);
	document.getElementById("humidityDiv").append(boxHd);
	document.getElementById("humidityDiv").append(pd);
	
	
	BoxDiv12b.setAttribute("class", "col-md-12");
	BoxDiv12b.setAttribute("id", "2divGP");
	
	wBoxDiv6a.setAttribute("class", "col-md-6 wBox");
	wBoxDiv6a.setAttribute("id", "sunriseDiv");
	boxHe.setAttribute("id", "sunriseH");
	boxHe.innerHTML = "Sunrise &#40;GMT+1&#41;";
	pe.setAttribute("class", "wP");
	pe.setAttribute("id", "sunriseP");

	document.getElementById("wDisplay").append(BoxDiv12b);
	document.getElementById("2divGP").append(wBoxDiv6a);
	document.getElementById("sunriseDiv").append(boxHe);
	document.getElementById("sunriseDiv").append(pe);
	
	wBoxDiv6b.setAttribute("class", "col-md-6 wBox");
	wBoxDiv6b.setAttribute("id", "sunsetDiv");
	boxHf.setAttribute("id", "sunsetH");
	boxHf.innerHTML = "Sunset &#40;GMT+1&#41;";
	pf.setAttribute("class", "wP");
	pf.setAttribute("id", "sunsetP");

	document.getElementById("2divGP").append(wBoxDiv6b);
	document.getElementById("sunsetDiv").append(boxHf);
	document.getElementById("sunsetDiv").append(pf);
	
	
	var cityName = data.name;
	var country = data.sys["country"];
	var weatherType = data2.list[8].weather[0]["description"];
	var weatherLogo = data2.list[8].weather[0]["icon"];
	var weatherIcon = document.getElementById("weatherImg");
	var currentTemp = data2.list[8].main["temp"];
	var maxTemp = data2.list[8].main["temp_max"];
	var minTemp = data2.list[8].main["temp_min"];
	var humidity = data2.list[8].main["humidity"];
	var formattedSunsetTime = sunsetHours + ':' + sunsetMinutes.substr(-2);
	var formattedSunriseTime = sunriseHours + ':' + sunriseMinutes.substr(-2);
	
	document.getElementById("button-div").innerHTML = " ";
	buttonW.innerHTML = "Today's Weather";
	buttonF.innerHTML = "Weather in 24h";
	buttonW.setAttribute("type", "submit");
	buttonW.setAttribute("onclick", "todayWeather()")
	buttonW.setAttribute("class","buttonW");
	buttonF.setAttribute("type", "submit");
	buttonF.setAttribute("onclick", "forecastWeather()");
	buttonF.setAttribute("class","buttonF");
	document.getElementById("button-div").append(buttonW, buttonF);
	
	document.getElementById("weatherSpan").innerHTML = weatherType;
	weatherIcon.setAttribute ("src", "http://openweathermap.org/img/w/" + weatherLogo + ".png");
	document.getElementById("locationP").innerHTML = cityName + ", " + country;
	document.getElementById("cTempP").innerHTML = currentTemp + "&deg;C";
	document.getElementById("maxTempP").innerHTML = maxTemp + "&deg;C";
	document.getElementById("minTempP").innerHTML = minTemp + "&deg;C";
	document.getElementById("humidityP").innerHTML = humidity + "&#37;";
	document.getElementById("sunriseP").innerHTML = formattedSunriseTime;
	document.getElementById("sunsetP").innerHTML = formattedSunsetTime;
}
