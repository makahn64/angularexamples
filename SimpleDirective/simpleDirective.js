/**
 * Created by mkahn on 5/28/15.
 */

//"app" lives in the global JS namespace.
var app = angular.module("directiveApp", []);


// Remember talking about dependency injection...the $scope is injected here
app.controller("mainController", function ($scope) {

    // You can add properties to an existing Javascript object (in this case $scope) just by defining them.
    // Pretty sweet!
    
    // Let's add 3 new properties ( list1, list2, list3 ) which are themselves objects.
    
    // This is a Javascript "object literal". Google it. :)
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
        items: ['Mad Men', 'Game of Thrones', 'The Wire', 'Billions']
    }


});




