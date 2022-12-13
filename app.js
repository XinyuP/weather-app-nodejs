const request = require('postman-request');


// geocoding
// take an address and convert that into a lati/longi coordinate pair

// Address -> Lat/Long -> Weather

// Goal: print the lat/long for Los Angeles
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGlueXVwYW5nIiwiYSI6ImNrdTVuZmN0NjI2bnYyb3BtYWNyYThtaGIifQ.WK5_bWckr1Qup2wd3_49sA&limit=1';

request({ url: geocodeUrl, json: true }, (error, response) => {

    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]

    console.log(response.body)
    console.log("The lat/long of " + response.body.features[0].place_name + " is " + lat + ", " + long)
})




const url =
	'http://api.weatherstack.com/current?access_key=48ff11e343fef3921bb5cb441725bdf2&query=37.8267,%20-122.4233&units=f';


request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
});


// request automatically parse the JSON for us
// we can print a forecast using the response data
// explore some options on the weatherstack api like changing language/units


// json - sets body to JSON representation of value and adds Content-type:
// application / json header.Additionally, parses the response body as JSON.

request({ url: url, json: true }, (error, response, body) => {
    //console.log(response.body.current)

    console.log(body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " Fahrenheit out. It feels like " + body.current.feelslike +" Fahrenheit out.")

});


// forecast: print: "It is currently 9 degrees out. It feels like 5 degrees out."
















