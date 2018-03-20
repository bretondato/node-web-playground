var Chart  = require('chart.js');
var express = require('express');
var router = express.Router();
var {Device} = require('../models/device');
const geocode = require('../location/location');
const wearther = require('../weather/weather');
/*
var ctx = "myChart";

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
*/


router.get('/', function(req, res, next) {

    var dataPage = 'Data Page'

    geocode.geocodeAddress('09715120', function (errorMessage, results) {
        if (errorMessage){
            console.log(errorMessage);
        }else {
            //console.log(JSON.stringify(results, undefined, 2));
            loc = results.address;

            wearther.getWeather(results.latitude, results.longitude, function (errorMessage, wResults) {
                if (errorMessage){
                    console.log(errorMessage);
                }else {
                    //console.log(JSON.stringify(wResults, undefined, 2));
                    temp = 'The currently Temperature is ' + wResults.temperature;
                }
            })
        }
    });

    res.render('dataPage', { pageTitle: dataPage,location: loc ,temperature: temp });
});


module.exports = router;