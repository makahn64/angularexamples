/**
 * Created by mkahn on 6/1/15.
 */


app.controller("todoController", function ($scope) {


    function saveModel() {
        localStorage.setItem('todos', JSON.stringify($scope.model));
    }

    $scope.getPercentage = function () {

        var numberOfCheckboxes = 0;
        var numberDone = 0;

        // Google iterate over object properties to learn why this weirdness is needed
        for (var property in $scope.model) {
            if ($scope.model.hasOwnProperty(property)) {
                numberOfCheckboxes++;
                if ($scope.model[property]===true){
                    numberDone++;
                }
            }
        }

        return 100*(numberDone/numberOfCheckboxes)+"%";

    }

    $scope.$watch('model', function (newVal) {
        saveModel();
    }, true);

    var modelString = localStorage.getItem('todos');
    if (modelString == 'null') {
        $scope.model = {
            http1: false,
            http2: false,
            http3: false,
            http4: false,
            des1: false,
            des2: false,
            des3: false,
            other1: false,
            other2: false,
            other3: false
        }
        saveModel();
    } else {
        $scope.model = JSON.parse(modelString);
    }

});