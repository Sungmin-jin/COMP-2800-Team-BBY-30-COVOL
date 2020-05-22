# COVOL
COMP 2800 BBY TEAM 30

* [2020 BCIT BURNABY CST TEAM 30](#2020-bcit-burnaby-cst-team-30)
* [General Information](#general-information)
* [Third party APIs](#third-party-apis)
* [Technologies and Languages](#technologies-and-languages)
* [IDE](#ide)
* [Database Configurations](#database-configurations)
* [Testing](#testing)
* [Content](#content)
* [Quick Start 🚀](#quick-start-🚀)
* [Deploy to Heroku](#deploy-to-heroku)


## 2020 BCIT BURNABY CST TEAM 30
We are a group of term 1 and term 2 BCIT students who are eager to learn new technologies. For this project during the COVID-19 pandemic, we have a vision to flatten this curve by helping people and organizations to find volunteers efficiently. #flattenthecurve

* Anthony Uch @AnthonyUch
* Jason Sungmin Jin @Sungmin-jin
* Justin Payne @JustinPayneCore
* Tony Minseok Kim @tonyminseokkim11

[`Back to top`](#covol)

## General Information
Air Tutor is a web application for students who are not doing well with their classes in remote learning. In Air Tutor, students can request help with their homework and tutors can message these students, eventually scheduling a session where both tutors and students can use voice call and canvas features so that the tutor can better teach the material and the student can better understand it. 

The features of this project include:
* A submission feature utilized by students so they can request help for homework
* A messaging feature utilized by tutors so they can communicate their ability to help with their homework
* A scheduling feature utilized by students so they can schedule sessions with a tutor
* A voice call feature utilized by both students and tutors so that tutors can better teach the material and the student can better understand the material
* A canvas feature utilized by both students and tutors so tutors can visually communicate the material and students can show the thought process of their learning
* A live chat feature utilized by both students and tutors where students can ask quick questions about their homework and tutors can respond in real time
* A rating feature utilized by students where they can rate their tutor after a session; this rating will then be displayed in the tutor’s profile page to highlight their credibility
* A Google sign in feature utilized by both students and tutors where they can easily sign in with their Google accounts 
* A social media share feature utilized by both students and tutors where they can share the link with their friends through Facebook or Twitter

[`Back to top`](#covol)

## Third Party APIs
These are the Third Party APIs required to build our application. This list includes:

* [Facebook](https://developers.facebook.com/) - for sharing to social media
* [Twitter](https://public.twitter.com/) - for sharing to social media
* [MongoDB](https://www.mongodb.com/) - for database, and server side functions
* [React](https://reactjs.org/) - for managing client-server connections for database
* [Node.js](https://nodejs.org/) - for managing server side functions
* [Redux](https://redux.js.org/) - for managing application state and data changing over time
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - for managing to create data with optional signature and/or simply authentications
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - for managing password hashing function
* [Heroku](https://www.heroku.com/) - for deploying our application
* [Material-UI](https://material-ui.com/) - for a React UI framework

[`Back to top`](#covol)

## Technologies and Languages
Technologies that were used for this project:

* HTML
* CSS
* JSX
* JavaScript
* Git

[`Back to top`](#covol)

## IDE
You are allowed to use any IDEs that can modify HTML, CSS, JavaScript. For the most optimized experience, [Visual Studio Code](https://code.visualstudio.com/) is preferred. 

[`Back to top`](#covol)

## Database Configurations
Our project uses [MongoDB](https://www.mongodb.com/) as our database. If you would like access to the database we used for the project, please contact Jason Sungmin Jin at jasonjin1998@gmail.com, sjin32@my.bcit.ca, or tonyminseokkim11@gmail.com to be added as a collaborator.

[`Back to top`](#covol)

## Testing
A collection of our testing can be found [here](https://docs.google.com/spreadsheets/d/1tz3GkC34ZoDInRQ_0ObSe_kfcFMU7N88aj0QLb7R0es/edit#gid=394496370)

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

[`Back to top`](#covol)

## Content
Content of the project folder:

<details>
<summary>Click to view project file structure</summary>

	Top level of project folder: 
	├── .firebaserc							# File that stores FIrebase project aliases
	├── .gitignore              					# Git ignore file
	├── database.rules.json        					# Rules for firebase database
	├── firebase.json              					# File defining Firebase Hosting configurations
	├── firebase.indexes.json       				# File for Firebase indexes
	├── firestore.rules             				# Files for firebase firestore security rules
	├──storage.rules             					# Files for firebase storage security rules

	It has the following subfolders:
	├── .firebase                					# Folder for firebase
	├── .git                     					# Folder for git repo
	├── functions                   				# Server side dynamic contents
	|	└── views						# where the ejs files are
	|		├── pages					# html pages but viewed by ejs
	|		|	/aboutus.ejs				# The about us page when viewed by users
	|		|	/aboutus2.ejs				# The about us page when viewed by non-users
	|		|	/editprofile.ejs			# The page for the user to edit their profile details
	|		|	/faq.ejs				# The FAQ page when viewed by users
	|		|	/faq2.ejs 				# The FAQ page when viewed by non-users
	|		|	/home.ejs 				# The home page, the first thing users see when they log in
	|		|	/index.ejs 				# The landing page, the first thing first-time visitors see 
	|		|	/livechat.ejs 				# The live chat page for students and tutors to talk in real-time
	|		|	/login.ejs 				# The login page for students and tutors to log into their accounts
	|		|	/messages.ejs 				# The messages page for students and tutors to view their message history
	|		|	/messaging.ejs 				# The messaging page for students and tutors to message in real-time
	|		|	/myschedule.ejs 			# The schedule page for students and tutors to view their scheduled sessions	
	|		|	/post.ejs 				# The posts page, where students’ requests are compiled
	|		|	/profile.ejs				# The profile page, where students and tutors can view their own profile	
	|		|	/rating.ejs				# The rating page asking whether or not the tutor gave the student the information they needed, which the student sees after the session
	|		|	/request.ejs 				# The make a request page where the student can specify the details for the topic they need help with and submit it to the posts page
	|		|	/request_confirm.ejs			# The request confirmation page where the student confirms the details of their request
	|		|	/schedule.ejs				# The schedule a session page, where the student can schedule a session with their tutor
	|		|	/schedule_confirm.ejs			# The schedule confirmation page where the student confirms the details of their scheduled session
	|		|	/session.ejs				# The session page, where both the student and tutor attend at the time of their scheduled session
	|		|	/shop.ejs				# The shop page, where users can purchase credits towards their account
	|		|	/signup.ejs				# The sign up page, where users are redirected after authenticating with their google accounts for the first time
	|		|	/viewprofile.ejs			# The view profile page, where users can look at other user profiles.
	|		└── partials					# Reusable EJS partials laid on top of different pages
	|			/countryselector.ejs			# A drop down selector for all available countries. Taken from https://www.technicalkeeda.com  
	|			/favicon.ejs				# The favicon appearing in all tab logos on the browser
	|			/footer.ejs				# The footer that appears on most pages of the application
	|			/languageselector.ejs			# A drop down selector for all available languages. Taken from https://stackoverflow.com by sms247
	|			/navbar.ejs				# The side navigation bar that appears on most pages of the application. Html taken from: https://www.w3schools.com. Image from https://fontawesome.com/
	|			/nonstudentelector.ejs			# Drop down selector for non student information. “Education completed” dropdown taken from https://gist.github.com.
	|			/profileinfo.ejs			# Form and inputs used for general information in developer user registration
	|			/studentselector.ejs			# Drop down selectors for student users.
	|	/ .gitignore						# Git ignore file
	|	/firebase-debug.log					# Firebase debug log
	|	/index.js						# Server file that connects the public and functions folder. EJS configurations
	|	/package.json						# Required metadata for Air Tutor 
	|	/package-lock.json					# Versioned dependencies used for Air Tutor
	├── public                    					# Folder for static contents
	|	├── scripts						# Javascript files
	|	|	/aboutus.js					# js file of functions for aboutus.ejs
	|	|	/draw.js					# js file of drawing functions for session.ejs
	|	|	/editprofile.js					# js file of functions for editprofile.ejs
	|	|	/faq2.js					# js file of functions for faq2.ejs
	|	|	/fbscript.js					# js file that initializes the facebook sdk
	|	|	/firebase.js					# js file that initializes the firebase sdk
	|	|	/firebase-main.js				# js file that contains basic firebase functions
	|	|	/home.js					# js file of functions for home.ejs
	|	|	/index.js					# js file of functions for index.ejs
	|	|	/livechat.js					# js file of functions for livechat.ejs
	|	|	/login.js					# js file of functions for login.ejs
	|	|	/logout.js					# js file of functions for logout feature on navbar
	|	|	/messages.js					# js file of functions for messages.ejs
	|	|	/messaging.js					# js file of functions for messaging.ejs
	|	|	/myschedule.js					# js file of functions for myschedule.ejs
	|	|	/navbar.js					# js file of functions for navigation bar partial in navbar.ejs
	|	|	/plane.js					# js file of functions for easter egg airplane in footer.ejs
	|	|	/post.js					# js file of functions for post.ejs
	|	|	/profile.js					# js file of functions for profile.ejs
	|	|	/rating.js					# js file of functions for rating.ejs
	|	|	/request.js					# js file of functions for request.ejs
	|	|	/request_confirm.js				# js file of functions for request_confirm.ejs
	|	|	/schedule.js					# js file of functions for schedule.ejs
	|	|	/schedule_confirm.js				# js file of functions for schedule_confirm.ejs
	|	|	/session.js					# js file of functions other than drawing for session.ejs
	|	|	/shop.js					# js file of functions for shop.ejs
	|	|	/signup.js					# js file of functions for starting user database information
	|	|	/signup_1.js					# js file containing google signup functions
	|	|	/viewprofile.js					# js file of functions for viewprofile.ejs
	|	├── src							# Image files
	|	|	├── home					# Image files used on home.ejs
	|	|	|	/home-msg.png				# An image for the messaging featured used on the Home page, found on https://fontawesome.com/ and modified
	|	|	|	/home-request.png			# An image for the request feature used on the Home page, found on https://fontawesome.com/ and modified
	|	|	├── index					# Image files used on index.ejs
	|	|		/404.png				# An illustration of a large 404 symbol used on the 404 page, found on https://undraw.co/ 
	|	|		/collaboration-feature.png 		# An illustration of two chat heads and an interface used in the Index page, found on https://undraw.co/
	|	|		/faq.png				# An illustration of a woman with a question used on the FAQ page, found on https://undraw.co/
	|	|		/features-feature.png 			# An illustration of three people with a mobile and desktop and interface, found on https://undraw.co/
	|	|		/header.png				# An illustration of a woman doing work online used on the Index page, found on https://undraw.co/
	|	|		/login.png				# An illustration of four friends chatting with an interface on the background used on the Login page, found on https://undraw.co/
	|	|		/posting-feature.png			# An illustration of a man posting on an interface used on the Index page, found on https://undraw.co/
	|	|		/profile-creation.png			# An illustration of a man accompanied by his own profile in an interface, found on https://undraw.co/
	|	|		/scheduling-feature.png			# An illustration of a girl sorting her schedule with a calendar interface used in the Index age, found on https://undraw.co/
	|	|		/signup.png				# An illustration of a man accompanied by his own profile in an interface used in the Sign up page, found on https://undraw.co/
	|	|		/student.png				# An illustration of a student doing online learning used in the FAQ page, found on https://undraw.co/
	|	|		/teacher.png				# An illustration of a teacher doing online schooling used in the FAQ page, found on https://undraw.co/
	|	|		/testimonial1.jpg			# An image used in the first sample testimonial on the Index page, found on https://unsplash.com/, taken by Štefan Štefančík
	|	|		/testimonial2.jpg			# An image used in the second sample testimonial on the Index page, found on https://unsplash.com/, taken by Michał Parzuchowski
	|	|		/testimonial3.jpg			# An image used in the third sample testimonial on the Index page, found on https://unsplash.com/, taken by Taylor
	|	|	/airplane-logo.png				# An image of a white airplane, inspired by paper airplane logo designed by Janko Smit 	on Instagram
	|	|	/blue-logo.png					# An image of a blue airplane, used in easter egg on footer.ejs, inspired by paper airplane logo designed by Janko Smit 	on Instagram
	|	|	/chris.jpg					# An image of Chris, used in the About us page
	|	|	/favicon.png					# Our favicon image, used for every page
	|	|	/green-logo.png					# An image of a green airplane, inspired by paper airplane logo designed by Janko Smit 	on Instagram
	|	|	/kurt.jpg					# An image of Kurt, used in the About us page
	|	|	/light-blue-logo.png				# An image of a light blue airplane, inspired by paper airplane logo designed by Janko Smit on Instagram
	|	|	/logo.png					# An image of a different white airplane, inspired by paper airplane logo designed by Janko Smit on Instagram
	|	|	/money1.png					# An image of a coin, used in the Shop page, found on https://sergiovado27.blogspot.com/
	|	|	/money2.png					# An image of a few coins, used in the Shop page, found on http://icon-library.com/
	|	|	/money3.png					# An image of a bag of coins, used in the Shop page, found on http://clipart-library.com/
	|	|	/money4.png					# An image of a pile of coins, used in the Shop page, found on https://www.geitu.net/
	|	|	/no.png						# A red no button, used in the Messages page, found on https://imgbin.com/
	|	|	/profile.png					# A default black profile picture, used in Messaging page and Profile page (if user has no uploaded profile picture), found on https://www.flaticon.com/
	|	|	/profile-white.png				# A default white profile picture, used in the Home page (if user has no uploaded profile picture), found on https://www.flaticon.com/ but modified  
	|	|	/rsz_saltbae.jpg				# An image of Dylan, used in the About us page
	|	|	/vicly.jpg					# An image of Vicly, used in the About us page
	|	└── styles						# CSS files
	|		/404.css					# The styling for 404.ejs
	|		/about.css					# The styling for aboutus.ejs
	|		/about2.css					# The styling for aboutus2.ejs
	|		/base.css					# The general styling used for multiple pages
	|		/editprofile.css				# The styling for editprofile.ejs
	|		/faq.css					# The styling for faq.ejs
	|		/faq2.css					# The styling for faq2.ejs
	|		/footer.css					# The styling for footer in partial footer.ejs
	|		/home.css					# The styling for home.ejs
	|		/index.css					# The styling for index.ejs
	|		/livechat.css					# The styling for livechat.ejs
	|		/login.css					# The styling for login.ejs
	|		/messages.css					# The styling for messages.ejs
	|		/messaging.css					# The styling for messaging.ejs
	|		/myschedule.css					# The styling for myschedule.ejs
	|		/navbar.css					# The styling for the side navigation bar
	|		/post.css					# The styling for post.ejs
	|		/profile.css					# The styling for profile.ejs
	|		/rating.css					# The styling for rating.ejs
	|		/request.css					# The styling for request.ejs
	|		/session.css					# The styling for session.ejs
	|		/shop.css					# The styling for shop.ejs
	|		/signup.css					# The styling for signup.ejs
	|	/404.html						# Redirected 404 error page
	
</details>

[`Back to top`](#covol)

## Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

## Deploy to Heroku

If you followed the sensible advice above and included `config/default.json` `and config/production.json` in your .gitignore file, then pushing to Heroku will omit your config files from the push.  
However, Heroku needs these files for a successful build.  
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create a local only branch, lets call it _production_.

```bash
git checkout -b production
```

We can use this branch to deploy from, with our config files.

Add the config file...

```bash
git add -f config/production.json
```

This will track the file in git on this branch only. **DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

Commit...

```bash
git commit -m 'ready to deploy'
```

Create your Heroku project

```bash
heroku create
```

And push the local production branch to the remote heroku master branch.

```bash
git push heroku production:master
```

Now Heroku will have the config it needs to build the project.

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

After deployment you can delete the production branch if you like.

```bash
git checkout master
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your master branch and merge those into your production branch.

```bash
git checkout production
git merge master
```

Once merged you can push to heroku as above and your site will rebuild and be updated.

---

[`Back to top`](#covol)