var weatherContainer=document.getElementById('weatherContainer')


//console.log(weatherContainer,cityName)

// async function
var apikey="68efa0885519a6f01d76917c463ada68" 
// 
async function getWeatherData(){
    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)

    weatherContainer.innerHTML=`
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${cityName}</h5>
          <p class="card-text m-0 "><small class="text-muted">Temperature-${res.main.temp}°K</small></p>
          <p class="card-text m-0"><small class="text-muted">Feels Like-${res.main.feels_like}</small></p>
          <p class="card-text m-0"><small class="text-muted">Description-${res.weather[0].description}</small></p>
          <p class="card-text m-0"><small class="text-muted">Wind Deg-${res.wind.deg}°</small></p>
        </div>
      </div>
    </div>
    
    `
}
//getWeatherData()


