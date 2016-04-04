/**
 * Created by mkahn on 3/30/16.
 */

//HOMEWORK: Make this sort alphabetically. Hint: it's very little work

app.directive( 'listWithTitle', function () {
    return {
        scope:    {
            list: "="
        },
        template: '<h3>{{list.title}}</h3><ul><li ng-repeat="item in list.items">{{item}}</li></ul>'
    };
} );


app.directive( 'thisIsStupid', function(){

    return {
        template: '<h1>This is really Stupid</h1>'
    }

});