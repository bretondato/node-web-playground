const request = require('request');

var geocodeAddress = function (address, callback) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + '&key=AIzaSyBvfNA645bS3kxr9oSg2A8PVo4dYopucAo'

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        //console.log(JSON.stringify(body, undefined, 2));

        if(error){
            callback('Unable to connect with Google servers');
        }else if (body.status === 'ZERO_RESULTS'){
            callback('Unable to find this address');
        }else if (body.status === 'OK'){
            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;