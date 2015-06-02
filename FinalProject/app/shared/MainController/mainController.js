/**
 * Created by mkahn on 6/1/15.
 */

app.controller("mainController", function ($scope, $http) {


    console.log("mainController has been loaded.");

    $scope.getWines = function () {

        //Documentation: https://docs.angularjs.org/api/ng/service/$http
        $http.get('http://www.xplorious.com/wineryxplorer/wino/wines_since/0')
            .success(function (data, status, headers, config) {

                         $scope.wines = data;

                     })
            .error(function (data, status, headers, config) {

                         $rootScope.$broadcast('REST_FAILURE', {data: data, status: status});
                         $scope.wines = [];

                     });

    }

    $scope.getWineries = function () {

        //Documentation: https://docs.angularjs.org/api/ng/service/$http
        $http.get('http://www.xplorious.com/wineryxplorer/wino/wineries_since/0')
            .success(function (data, status, headers, config) {

                         $scope.wineries = data;

                     })
            .error(function (data, status, headers, config) {

                         $rootScope.$broadcast('REST_FAILURE', {data: data, status: status});
                         $scope.wineries = [];

                     });

    }


});
