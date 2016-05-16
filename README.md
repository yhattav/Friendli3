# Blabber
A stupid application for posting stupid things
The application includes a little of everything we've learned during the course, HTML, CSS, JS, jQuery, Sails Server and Database.

So let's start developing!

# Step 1 - Preperations
- Create a [new sails app](https://github.com/web-development-course/HelloWorld), connect it to GitHub and Heroku
- Install the frameworks we use [Bootstrap](http://getbootstrap.com), [lodash](https://lodash.com/docs), [animate.css](https://daneden.github.io/animate.css/), [font awesome](https://fortawesome.github.io/Font-Awesome/) and [jQuery](https://jquery.com/)
- Create the blabs api `sails generate api blabs`
- Create, in the views folder, a folder names `blabs` and in it a file named `find.ejs` and `findOne.ejs`

# Step 2 - Basic Layout
- Start with the `homepage.ejs` file
- Create a basic html with a redirection button to /blabs (without the email)
- Next, edit the `find.ejs` file (reachable via /blabs)
- Create the html for the app, use bootstrap components and create a static version of the app

# Step 3 - Add functionality
- Connect the `add blab` button to the api and make it create a new blab (leave the email for now)
- Connect the list to the `data` object and make it display all the blabs
- Add a `delete` button and connect it to the api and the list

# Step 4 - Connect to a Database
- Follow the instructions in our [Sails lesson](https://docs.google.com/presentation/d/1Wo5SncGzJbYi3YNfZSmVSnFUkmojhcTK7OCNzecgAJs/edit?usp=sharing) and connect the app to mongo DB. 

# Step 5 - Display the user's e-mail and picture
- Add the input box the the homepage
- Make the homepage button redirect to `/blabs?email=[EMAIL_FROM_INPUT]`
- Add a hidden input to the 'new blab' form with the email from the url
- Display the email of the creator of each blab
- To display the profile picture we'll use [Gravatar](https://en.gravatar.com/) - create an account if you don't have one.
- To display the gravatar of the blab creator, just add an img tag with the src `http://email2pic.herokuapp.com/gravatar/[EMAIL_OF_CREATOR]`

# Step 6 - Add social buttons
- Create a `upvote` button with a counter. 
- Save the upvotes counter on the blab and make the button add 1 to the count.
- Create a `share` button
- Connect the share button to facebook sharer (search google how to do that)

# Step 7 - Start Blabbing!
- If you've reached here you're a real programmer, be proud!
