/**
 * Created by mkahn on 6/5/16.
 */

app.factory("winexLite", function($http, $log){

    service = {};

    var serverEndpoint = "http://192.241.228.100:1338";
    var apiRev = "/api/v1/";
    var apiEndpoint = serverEndpoint + apiRev;

    var serverStatus = { reachable: false, lastError: undefined };

    $log.info( "Winex.service starting up." );

    service.getVenues = function(){

        return $http.get(apiEndpoint+'venue')
            .then( function(data){
                serverStatus = { reachable: true, lastError: undefined };
                return data.data;
            })
            .catch( function(err){
                serverStatus = { reachable: false, lastError: err };
                throw err;
            })
    
    }
    
    
    service.hello = function(){
        $log.debug("Howdy from Ourglass!");
    }

    // xservice.getLogoUrl = function()

    return service;
    
});