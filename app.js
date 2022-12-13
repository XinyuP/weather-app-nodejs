const request = require('postman-request');

const url =
	'http://api.weatherstack.com/current?access_key=48ff11e343fef3921bb5cb441725bdf2&query=37.8267,%20-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)

});
