ANGULAR DIRECTIVES
==================

Angular directives let you write your own html elements. Let's say you find yourself creating the same HTML with an
image, a title, and a horizontal line over and over again. Maybe it looks like this:


    <div>
        <img src="pics/somepic.jpg" />
        <h1>My Title</h1>
        <hr>
    </div>
    
Wouldn't it be awseome if we could create our own tag like:

    <pic-with-title src="pics/somepic.jpg" title="My Title"></pic-with-title>
    
Well, you guessed it. Angular lets you do exactly this, and a ton more, with directives.

Have a look at the SimpleDirective project. A lot is similar to Hello Angular, but look at the line where we 
use the new html tag we invented:

    <list-with-title list="list1"></list-with-title>
    
This directive is defined in the cleverly named `listwithtitle.directive.js`. That naming convention isn't required,
but it makes it easy to see what's going on.  Now, let's go through it on Google hangout and figure out how it works.

TASKS
-----

1. Modify the `listwithtitle.directive.js` so that the title is blue and that each list item is numbered instead
of bulleted. Hint: $index and look into <li> styling.

2. Modify the same directive to sort alphabetically A-Z.

3. Modify the same directive to remove the template from the Javascript, and instead reference an external template
file. Hint: Google `templateUrl` in Angular directives.


NEXT UP: Let's Encapsulate Some Functionality in the Directive
--------------------------------------------------------------

Directives are a lot more useful when you encapsulate functionality into the directive itself. Let's have a Google 
Hangout and go through `list-with-add`.

Now that you understand how that works, add some more functionality to `list-with-add`:

1. Add the ability to delete an entry.
2. Add a button that changes the sort order from A-Z to Z-A and back. The button that does this should also change
to indicate the change.
3. Make both of the above functions optional and only show if the attibute `show-remove` and/or `show-sort` are set.


LET'S MAKE IT A LITTLE PRETTIER
-------------------------------

Well, we have an app, but it's kinda ugly. Styling web pages is best done using CSS stylesheets which define how 
elements are styled. CSS and HTML layout can be tricky to learn, and tricky to get right even once you know how
to do it! Thankfully, there are lots of pre-built CSS frameworks to make our stuff pretty without a lot of work
by us. Let's use one of the most famous (if not *the* most famous): Twitter Bootstrap.

http://getbootstrap.com/

To get started, include the bootstap CSS ONLY (do not include the Javascript, it conflicts with Angular). Use the CDN
link:

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
    integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

Wrap each directive from this lesson in a PANEL component. You can find how to do it in the Bootstrap docs.

What else changed when you included Bootstrap?

