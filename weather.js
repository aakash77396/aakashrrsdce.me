async function fetchData(city) {

    cityName.innerHTML=city;

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            temp.innerHTML = result_obj.temp
            temp2.innerHTML = result_obj.temp
            humidity.innerHTML = result_obj.humidity
            humidity2.innerHTML = result_obj.humidity
            min_temp.innerHTML = result_obj.min_temp
            max_temp.innerHTML = result_obj.max_temp
            wind_speed.innerHTML = result_obj.wind_speed
            wind_speed2.innerHTML = result_obj.wind_speed
            wind_degrees.innerHTML = result_obj.wind_degrees
            sunrise.innerHTML = result_obj.sunrise
            sunset.innerHTML = result_obj.sunset
            feels_like.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})

fetchData("Delhi");
// ..................................................................
async function fetchData1() {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            tempD.innerHTML = result_obj.temp
            humidityD.innerHTML = result_obj.humidity
            min_tempD.innerHTML = result_obj.min_temp
            max_tempD.innerHTML = result_obj.max_temp
            wind_speedD.innerHTML = result_obj.wind_speed
            wind_degreesD.innerHTML = result_obj.wind_degrees
            sunriseD.innerHTML = result_obj.sunrise
            sunsetD.innerHTML = result_obj.sunset
            feels_likeD.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})
fetchData1();

async function fetchData2() {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            tempP.innerHTML = result_obj.temp
            humidityP.innerHTML = result_obj.humidity
            min_tempP.innerHTML = result_obj.min_temp
            max_tempP.innerHTML = result_obj.max_temp
            wind_speedP.innerHTML = result_obj.wind_speed
            wind_degreesP.innerHTML = result_obj.wind_degrees
            sunriseP.innerHTML = result_obj.sunrise
            sunsetP.innerHTML = result_obj.sunset
            feels_likeP.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})
fetchData2();

async function fetchData3() {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gaya';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            tempG.innerHTML = result_obj.temp
            humidityG.innerHTML = result_obj.humidity
            min_tempG.innerHTML = result_obj.min_temp
            max_tempG.innerHTML = result_obj.max_temp
            wind_speedG.innerHTML = result_obj.wind_speed
            wind_degreesG.innerHTML = result_obj.wind_degrees
            sunriseG.innerHTML = result_obj.sunrise
            sunsetG.innerHTML = result_obj.sunset
            feels_likeG.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})
fetchData3();

async function fetchData4() {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            tempB.innerHTML = result_obj.temp
            humidityB.innerHTML = result_obj.humidity
            min_tempB.innerHTML = result_obj.min_temp
            max_tempB.innerHTML = result_obj.max_temp
            wind_speedB.innerHTML = result_obj.wind_speed
            wind_degreesB.innerHTML = result_obj.wind_degrees
            sunriseB.innerHTML = result_obj.sunrise
            sunsetB.innerHTML = result_obj.sunset
            feels_likeB.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})
fetchData4();

async function fetchData5() {

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Begusarai';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '442677452dmsh3047a7b3bfd4c2fp1fd9c7jsne5846798a328',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // result gives value in string ....... using JSON.parse() we convert it in Object.
        const result_obj = JSON.parse(result);
            // cloud_pct.innerHTML = result_obj.cloud_pct
            tempBgs.innerHTML = result_obj.temp
            humidityBgs.innerHTML = result_obj.humidity
            min_tempBgs.innerHTML = result_obj.min_temp
            max_tempBgs.innerHTML = result_obj.max_temp
            wind_speedBgs.innerHTML = result_obj.wind_speed
            wind_degreesBgs.innerHTML = result_obj.wind_degrees
            sunriseBgs.innerHTML = result_obj.sunrise
            sunsetBgs.innerHTML = result_obj.sunset
            feels_likeBgs.innerHTML = result_obj.feels_like

       
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click",function(e){
    e.preventDefault();
    fetchData(city.value)
})
fetchData5();
