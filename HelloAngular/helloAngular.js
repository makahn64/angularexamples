/**
 * Created by mkahn on 5/28/15.
 */

//"app" lives in the global JS namespace.
var app = angular.module("helloApp", []);

app.controller( "divController", function ( $scope, $log ) {

   $log.debug("loading divController");

    $scope.clear = function(){
        $log.debug("Clear in the child scope");
        $scope.$parent.clear();
    }

});


app.controller("mainController", function ($scope) {

    //I am hidden from the global namespace and not visible to the DOM
    var localVar = "dude";

    $scope.localVar = localVar + " hey now!";

    //I am also hidden from the global namespace, but since I am "$scope", I am visible to the DOM
    $scope.name = "John Smith Jr.";

    // Some more variables, also visible in the DOM.
    $scope.shoppingList = [ 'Eggs', 'Bread', 'Butter', 'Lettuce', 'Beer' ];


    var myObj = {

        topVal: 100,
        nestObj: {
            stackOfCups: 20,
            sayHi: function(){ 
                console.log("hi!")
                }

        }

    }


    $scope.newItem = undefined; //Not strictly necessary, it's undefined by default in JS.

    //You can attach a function to the $scope and make it visible to the DOM
    $scope.clicked = function(){
        console.log("I have been clicked");
        //$scope.name = $scope.name + '...' + localVar;
    }

    $scope.clear = function(){
        $scope.name = "";
    }


    $scope.addItem = function() {
        // Add an item to the shopping list
    }

    $scope.removeItem = function(index){
        // Delete an item from the shopping list
    }


});