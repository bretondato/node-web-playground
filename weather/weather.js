// Forecast.io key : c2defe7793cb0deee3ab927ac5fe1238

const request = require('request');

var fToc = function (fahTemperature){
    return (fahTemperature - 32) * (5/9);
};

var getWeather = function (lat, lng, callback) {

    request({
        url: 'https://api.darksky.net/forecast/c2defe7793cb0deee3ab927ac5fe1238/'+ lat +','+ lng,
        json: true
    }, function (error, response, body){
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: fToc(body.currently.temperature),
                apperentTemperature: fToc(body.currently.apperentTemperature)
            });
        }else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;