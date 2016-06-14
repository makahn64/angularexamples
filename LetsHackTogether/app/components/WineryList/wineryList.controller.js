/**
 * Created by mkahn on 6/13/16.
 */

app.controller( "wineryListController", function ( $scope, $log, winexLite ) {

    $log.debug("wineryListController loaded.");
    
    $scope.ui = { test: "Hey Dude!", loading: true };
    
    winexLite.getVenues()
        .then( function(wineries){
            $log.debug(wineries);
            $scope.ui.wineries = wineries;
            $scope.ui.loading = false;
        })
        .catch( function(err){
        
            $scope.error("Oh shit: "+err.toString());
            $scope.ui.error = err.toString();
            
        });

});