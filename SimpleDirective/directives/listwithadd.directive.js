/**
 * Created by mkahn on 3/30/16.
 */

//HOMEWORK: There's a bug in the directive below. Fix it.

app.directive( 'listWithAdd', function () {
    return {
        scope:       {
            list: "="
        },
        link:  function ( scope, elem, attr ) {

            scope.titleColor = "#000000";

            if ( attr.titleColor !== undefined ) {
                console.log( "I got a color! " + attr.titleColor );
                scope.titleColor = attr.titleColor;

            }

            scope.add = function () {
                scope.list.items.push( scope.newItem );
                scope.newItem = "";
            }


        },
        templateUrl: 'directives/listwithadd.template.html'
    };
} );