/**
 * Created by mkahn on 4/6/16.
 */

app.controller("screen1Controller", function($scope, $log, $timeout){


    $scope.message = "Wait for it...";
    
    $timeout(function(){
        $scope.message = "Here it is!";
        $log.warn("Here's a pretty error message.");
    }, 5000);


    

});