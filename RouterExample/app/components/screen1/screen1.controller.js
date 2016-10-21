/**
 * Created by mkahn on 4/6/16.
 */

app.controller("screen1Controller", [ '$scope', '$log', '$timeout', '$location', function($scope, $log, $timeout, $location){


    $scope.message = "Wait for it...";
    
    $timeout(function(){
        $scope.message = "Here it is!";
        $log.warn("Here's a pretty error message.");
    }, 5000);


    $scope.goHome = function(){
        $location.path("/");
    }

}]);