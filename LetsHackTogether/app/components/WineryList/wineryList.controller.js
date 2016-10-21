/**
 * Created by mkahn on 6/13/16.
 */

app.controller( "wineryListController", function ( $scope, $log, winexLite ) {

    $log.debug( "wineryListController loaded." );

    $scope.ui = {
        test:    "Hey Dude!",
        loading: true,
        testing: true,
        error:   ""
    };

    winexLite.getVenues()
        .then( function ( wineries ) {
            $log.debug( wineries );
            $scope.ui.wineries = wineries;
            $scope.ui.error = "";
        } )
        .catch( function ( err ) {

            $scope.ui.error = err.toString();

        } )
        .finally( function () {
            $scope.ui.loading = false;

        } );

    $scope.deleteFromList = function ( winery ) {

        _.remove( $scope.ui.wineries, function ( w ) {

            return winery.id == w.id;

        } );
    }

} );