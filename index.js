const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

//HARD-CODED WEATHER DATA
const weatherData = [
    {
        city: 'Nairobi',
        temperature: 30.4,
        himidity: 60,
        wind_speed: 12.3,
        description: 'Cloudy'
    },
    {
        city: 'Mombasa',
        temperature: 36.4,
        himidity: 70,
        wind_speed: 20.2,
        description: 'Sunny'
    },
    {
        city: 'Kisumu',
        temperature: 28.4,
        himidity: 50,
        wind_speed: 15.3,
        description: 'Rainy'
    },
    {
        city: 'Nakuru',
        temperature: 26.4,
        himidity: 40,
        wind_speed: 10.2,
        description: 'Overcast'
    },
    {
        city: 'Eldoret',
        temperature: 32.4,
        himidity: 60,
        wind_speed: 18.3,
        description: 'Cloudy'
    },
    {
        city: 'Kisii',
        temperature: 29.4,
        himidity: 55,
        wind_speed: 16.2,
        description: 'Sunny'
    },
    {
        city: 'Bungoma',
        temperature: 29.4,
        himidity: 55,
        wind_speed: 16.2,
        description: 'Sunny'
    }
];

// Endpoint to get weather data for a specific city
app.get('/', (req, res)=>{
    const {city} = req.query;

    if (city){
        const cityWeather = weatherData.find((w) => w.city.toLowerCase() === city.toLowerCase());

        if (cityWeather){
            return res.json(cityWeather);
        } else{
            return res.status(404).json({error: 'City not found'});
        }       
        
    }

    res.json(weatherData);

});

//Start the server
app.listen(PORT, () => {
    console.log(`Weather api is running at http://localhost:${PORT}`);
});