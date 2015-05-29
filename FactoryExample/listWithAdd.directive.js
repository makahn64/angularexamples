/**
 * Created by mkahn on 5/28/15.
 */

app.directive('listWithAdd', function () {
    return {
        scope: {
            list: "="
        },
        link: function(scope, elem, attr){

            scope.titleColor = "#000000";

            if (attr.titleColor!==undefined){
                console.log("I got a color! "+ attr.titleColor);
                scope.titleColor = attr.titleColor;

            }

            scope.add = function(){
                scope.list.items.push(scope.newItem);
            }



        },
        templateUrl: 'listwithadd.template.html'
    };
});