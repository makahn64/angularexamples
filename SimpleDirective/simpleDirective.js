/**
 * Created by mkahn on 5/28/15.
 */

//"app" lives in the global JS namespace.
var app = angular.module("directiveApp", []);


app.controller("mainController", function ($scope) {


    $scope.list1 = {
        title: 'Guys on the Hall',
        items: ['Steve', 'John', 'Frank', 'Bob']
    }

    $scope.list2 = {
        title: 'Girls on the Hall',
        items: ['Jane', 'Janette', 'Krissy', 'Allison']
    }

    $scope.list3 = {
        title: 'TV Shows I Like',
        items: ['Mad Men', 'Game of Thrones', 'The Wire', 'Falling Skies']
    }


});




