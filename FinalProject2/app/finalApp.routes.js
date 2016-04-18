/**
 * Created by mkahn on 6/1/15.
 */


// TODO switch this to UI-Router

app.config( function ( $routeProvider ) {
    $routeProvider

    // route for the home page

    // localhost:8080/mycoolapp/#/scren34


        .when( '/', {

            templateUrl: 'app/components/home/home.partial.html'

        } )
        
        .when( '/guests', {
        
            templateUrl: 'app/components/guests/guests.partial.html',
            controller: 'guestsController'
        })

        .otherwise( {
            templateUrl: 'app/components/error/error.partial.html'

        } )
} );





