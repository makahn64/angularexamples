/**
 * Created by mkahn on 3/30/16.
 */

//HOMEWORK: Make this sort alphabetically. Hint: it's very little work

app.directive( 'listWithTitle', function () {
    return {
        scope:    {
            list: "="
        },
        template: '<h3 style="color: blue">{{list.title}}</h3><ul><li ng-repeat="item in list.items">{{$index}}&nbsp;{{item}}</li></ul>'
    };
} );