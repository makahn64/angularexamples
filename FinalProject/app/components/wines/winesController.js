/**
 * Created by mkahn on 6/1/15.
 */


app.controller("winesController", function ($scope) {

    console.log("Loading winesController");
    $scope.$parent.getWines();

});