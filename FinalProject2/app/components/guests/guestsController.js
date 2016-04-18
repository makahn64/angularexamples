/**
 * Created by mkahn on 4/18/16.
 */

app.controller('guestsController', function( $scope, a8API){


    $scope.guests = [];
    
    a8API.getResource('guest')
        .then( function(data){
            $scope.guests = data;
        })
        .catch( function(err){
            // TOAST and error
        })
        

});