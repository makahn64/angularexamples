/**
 * Created by mkahn on 5/28/15.
 */

//"app" lives in the global JS namespace.
var app = angular.module("helloApp", []);


app.controller("mainController", function ($scope) {

    //I am hidden from the global namespace and not visible to the DOM
    var localVar = "dude";

    //I am also hidden from the global namespace, but since I am "$scope", I am visible to the DOM
    $scope.name = "John Smith";

    //You can attach a function to the $scope and make it visible to the DOM
    $scope.clicked = function(){
        console.log("I have been clicked");
        $scope.name = $scope.name + '...' + localVar;
    }

    $scope.clear = function(){
        $scope.name = "";
    }

    // Shopping list mini-app
    // There is a bug in here -> FIND IT and fix it

    $scope.shoppingList = [ 'Eggs', 'Bread', 'Butter'];
    $scope.newItem = undefined; //Not strictly necessary

    $scope.addItem = function() {
        $scope.shoppingList.push($scope.newItem);
    }

    $scope.removeItem = function(index){
        $scope.shoppingList = $scope.shoppingList.slice(index, 1);
    }

});