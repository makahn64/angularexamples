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

//HOMEWORK: Make this sort alphabetically. Hint: it's very little work

app.directive('listWithTitle', function () {
    return {
        scope: {
            list: "="
        },
        template: '<h3>{{list.title}}</h3><ul><li ng-repeat="item in list.items">{{item}}</li></ul>'
    };
});


//HOMEWORK: There's a bug in the directive below. Fix it.

app.directive('listWithAdd', function () {
    return {
        scope: {
            list: "="
        },
        link: function(scope, elem, attr){

            scope.add = function(){
                scope.list.push(scope.newItem);
            }

        },
        templateUrl: 'listwithadd.template.html'
    };
});