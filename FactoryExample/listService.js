

app.factory('listService', function(){

    //Create empty object to start
    var service = {};

    var _dataModel = {

        tvShows: {
            title: "TV Shows I Like (key: tvShows)",
            items: ["Game of Thrones", "Mad Men", "Breaking Bad", "The Simpsons"]
        },

        onTheHall: {
            title: "Folks on the Hall (key: onTheHall)",
            items: ["John", "Katie", "Rajesh", "Hank", "Brianne"]
        },

        movies: {
            title: "Movies About College (key: movies)",
            items: ["Pitch Perfect", "Animal House", "Accepted", "Good Will Hunting"]
        }
    }

    //Add rather useless method...
    service.echo = function(message){
        console.log("Echo: "+message);
    }

    //Let's prove this is pass by reference (note to self)
    //Is this safe? What happens if 'listName' is not in _dataModel??
    service.getList = function(listName){
        return _dataModel[listName];
    }

    service.addList = function(newListName, newListTitle, newListItems){
        // what to do? How to test?
    }

    service.addItem = function(listName, newItem){
        _dataModel[listName].items.push(newItem);
    }

    //Rewrite this using lodash.js
    service.removeItem = function(listName, itemToRemove){

        var rval;
        var idx = _dataModel[listName].items.indexOf(itemToRemove);

        if ( idx > -1 ){
            rval = _dataModel[listName].items.slice(idx, 1);
        }

        return rval;
    }

    return service;

});