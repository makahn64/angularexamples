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