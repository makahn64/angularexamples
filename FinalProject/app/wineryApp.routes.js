/**
 * Created by mkahn on 6/1/15.
 */

app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page

        // localhost:8080/mycoolapp/#/scren34


        .when('/', {

                  templateUrl: 'app/components/home/home.partial.html'

              })


        .when('/wineries', {

                  templateUrl: 'app/components/wineries/wineries.partial.html',
                  controller: 'wineriesController'
              })

        .when('/wines', {

                  templateUrl: 'app/components/wines/wines.partial.html',
                  controller: 'winesController'
              })

        .when('/todo', {

                  templateUrl: 'app/components/todo/todo.partial.html',
                  controller: 'todoController'
              })


        .otherwise({
                       templateUrl: 'app/components/error/error.partial.html'

                   })
});





