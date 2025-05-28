import { useState } from "react"
import axios from "axios"

function weather()
{

    const [city,setcity]=useState("")
    const [weather,Setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    function getWeather()
    {
        var WeatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b1dd50b75b35665a7b37d192f6c8ba1`)
         
        //https://api.openweathermap.org/data/2.5/weather?q=london&appid=9b1dd50b75b35665a7b37d192f6c8ba1 , https://home.openweathermap.org/api_keys (just that link)

        WeatherData.then(function(success)
    {
        console.log(success.data)
        Setweather(success.data.weather[0].main)
        setdesc(success.data.weather[0].description)
        settemp(success.data.main.temp)

    })
    }
    return(
        <div className="flex justify-center items-center ">
            <div className="bg-slate-500 rounded-lg p-5 w-80 text-center">
                <h1 className="text-white font-bold text-3xl mb-5">🌥️Weather Report</h1>
                <p className="text-white text-lg mb-3">I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className="rounded-md p-2 border-black mb-3 mt-2" placeholder="Enter the city..."/>
                <br/>
                <button onClick={getWeather} className="bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-700 mt-2">Get Report</button>
                <div className="mt-5 text-center">
                    <h1 className="text-yellow-50 mb-1"><b>☁️Weather : </b>{weather}</h1> 
                    <p className="text-yellow-50 mb-1"><b>🌡️Temperature : </b>{temp}</p>                  
                    <p className="text-yellow-50 mb-1"><b>🆘Description : </b>{desc}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default weather

