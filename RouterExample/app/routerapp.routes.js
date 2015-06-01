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


        .when('/screen1', {

                  templateUrl: 'app/components/screen1/screen1.partial.html',
                  controller: 'screen1Controller'
              })


        .otherwise({
                       templateUrl: 'app/components/error/error.partial.html'

                   })
});





