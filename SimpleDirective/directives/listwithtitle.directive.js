/**
 * Created by mkahn on 3/30/16.
 */

//HOMEWORK: Make this sort alphabetically. Hint: it's very little work

app.directive( 'listWithTitle', function () {
    return {
        scope:    {
            list: "="
        },
        templateUrl: 'directives/listwithtitle.template.html'
    };
} );