Building on Yesterday
---------------------

* Take the SimpleDirective example and make the lists sort alphabetically. The only changes allowed are to the html template.
* Add a filter text field to the listWithAdd directive that allows filtering of the list. Make the filter text field hide and show
  via an attribute in the directive like: <list-with-add show-filter list="list1" title-color='#ffee00'></...>. You will be 
  changing the code for the link function in the directive and the template.
* This page might help, but GOOGLE IT: http://www.programming-free.com/2013/10/exploring-angularjs-built-in-filters.html

When that's done, we move on to the FactoryExample.


FACTORY EXAMPLE
---------------

MK to explain:
* Service, factory usage for business logic. Typical pattern for service. Diff between service, factory (not much).
* Multiple sibling controllers.
* Simple communication between controllers. Methods of chatting between controllers.
* Some basic CSS. Making stuff prettier.



To Do On Your Own
-----------------

* Have each of the list directives sort alphabetically by making changes from earlier. Don't bother with the filters unless you want to.
* Modify the CSS to have the well class divs line up in columns, not one on top of the other. It is a 1 line change.
* Modify spyController to change the message whenever the _dataModel object is modified in listService. There are lots of ways to solve
  this one, but I want you to focus in on the model (listService) letting clients (controllers) know only if they are interested in 
  changes. You will need to modify 2 js files to make this work. Hint: check out $rootScope, $on, $watch, $emit, $broadcast.
* Extra credit. Once you have the above working, make the popup into a real popup. It only shows when there is a new message and its
  position is always 50px down from top, 50px over from left, it has a light green background and a drop shadow. It disappears after
  5 seconds. Look at setTimeout and $timeout and try to understand why you never use setTimeout in Angular.
  
  