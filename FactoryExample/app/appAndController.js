/**
 * Created by mkahn on 5/28/15.
 */

//"app" lives in the global JS namespace.
var app = angular.module("directiveApp", []);


app.controller("mainController", function ($scope, listService) {

    $scope.controllerName = "CtrlOne";

    $scope.list1 = listService.getList('tvShows');
    $scope.list2 = listService.getList('onTheHall');
    $scope.list3 = listService.getList('movies');


});


//NOTICE THE DEPENDENCY INJECTION!!-------------------VVVVV
app.controller("secondController", function ($scope, listService, $rootScope) {

    $scope.controllerName = "CtrlTwo";

    $scope.addThruService = function(){
        listService.addItem($scope.targetList, $scope.newItem);

        $rootScope.$broadcast("SOMEMSG", $scope.newItem);

    }

});


//NOTICE THE DEPENDENCY INJECTION!!-------------------VVVVV
app.controller("spyController", function ($scope, listService) {

    $scope.controllerName = "Popup!";

    $scope.message = "No message";

    $scope.$on("SOMEMSG", function(event, arg){
        console.log("Got a msg");
    })

});



