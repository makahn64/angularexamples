/**
 * Created by mkahn on 6/1/15.
 */

var app = angular.module("finalApp", ['ngRoute', 'ngA8API2.service']);

app.run( function(a8API){

    // Overplay A8 instance
    a8API.setSiteOrigin('http://162.243.133.57:1337/api/v2');

});