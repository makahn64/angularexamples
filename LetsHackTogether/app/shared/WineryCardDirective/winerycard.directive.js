/**
 * Created by mkahn on 6/14/16.
 */

app.directive( 'wineryCard', function ($log) {
    return {
        scope:       {
            winery: "=",
            remove: "="
            },
        link:        function ( scope, elem, attr ) {

            scope.ui = { testing: false, highlighted: parseInt(attr.highlight) };

            scope.delete = function(){
                $log.debug("Wack: "+scope.winery.name);
                scope.remove(scope.winery);
            }

        },
        templateUrl: 'app/shared/WineryCardDirective/winerycard.template.html'
    };
} );

app.directive( 'ogMedia', function(winexLite){
    return {
        restrict: 'A',
        link:   function (scope, elem, attr){
            
            var mediaUrl = winexLite.getMediaUrlForId(attr.mediaId);
            attr.$set( 'src', mediaUrl );


        }
    
    }

})