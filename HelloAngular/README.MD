HELLO ANGULAR
=============

Welcome to your first Angular tutorial. You should have already done some reading, maybe watched a few YouTubes about
AngularJS. As you may have noticed, there are lots of different code styles for Angular (and JS in general). You will
be using my preferences :).

You can also visit the Google Drive bookshelf to read some books about Angular (ask Mitch where it is).

OK, let's get started. First thing to do is make sure you have an environment set up for doing easy web development. 
You'll be learning a critical skill in this section: using Google and StackOverflow. These are a programmer's two
best friends.

On to the dev environment...

WEBSERVER SETUP
===============

You will need a webserver set up and running on your system. 

Ubuntu
------

*TL;DR*

1. Get or make sure LAMP is installed.
2. Make a logical link from `/var/www/html/dev` to your HTML/JS development folder in your home directory. Your version
   of Apache2 may use a docroot of `/var/www/htdocs`. If you have let this up right, you should be able to access these
   projects through `http:\\localhost\dev\angularexamples\HelloAngular` for example.


*Detail*

Ubuntu boxes may or may not have the LAMP stack installed.

You can find this out easily enough by doing a `ps aux | grep apache` in a temrinal window. You should see two entries 
if Apache (the webserver part of LAMP) is running. One entry is for Apache2, the other for the `grep` you ran. If you 
only see the `grep` entry, you need to install and get running LAMP.

You can also got to `http:\\localhost` or `http:\\127.0.0.1` and see if you get a webpage. This is not entirely
reliable since we have seen times when the server is running, but some clever person has put a forced redirect page
in the `docroot`.

At this point you may be confused about `grep`, `ps`, pipe `|`, `localhost` etc. If only there were some place you could
search for info on these things...

OK, so if you need to install LAMP (Linux Apache MySQL PHP) then Google how to do this for Ubuntu and do it.

Make a logical link from `/var/www/html/dev` to your HTML/JS development folder in your home directory. Your version
of Apache2 may use a docroot of `/var/www/htdocs`.  Don't know how to use the `ln -s` command? Google it.
   
If you have let this up right, you should be able to access these projects through 
`http:\\localhost\dev\angularexamples\HelloAngular` for example.
   
Mac
---

On the Mac we use MAMP. Download it, install it. You are done. Almost. You will need to set the HTTP port to 80 in settings.
That's it.

The docroot for MAMP is `/Applications/MAMP/htdocs`. Make a logical link as mentioned above to your `Developer` folder.

Windows
-------

1. Reformat your hard drive.
2. Install Ubuntu. Continue as above.



 PROJECT SETUP
 =============
 
 Have a Google hangout with Mitch on setting up the project in Webstorm.
 
 
 