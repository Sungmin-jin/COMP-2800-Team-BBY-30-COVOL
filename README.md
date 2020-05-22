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
* [Quick Start](#quick-start)
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

	COVOL - Folder Contents

	│   .gitignore					# Git ignore file
	│   README.md					# README file
	│   server.js					# server.js (app.js) to run the server
	│
	├───client
	│   ├───public
	│   │       android-chrome-192x192.png					#favicon android chrome 192x192 size
	│   │       android-chrome-512x512.png					#favicon android chrome 512x512 size
	│   │       apple-touch-icon.png						#favicon for apple
	│   │       browserconfig.xml							#browser config xml file
	│   │       favicon 2.ico								#regular favicon 2
	│   │       favicon-16x16.png							#regular favicon 16x16 size
	│   │       favicon-32x32.png							#regular favicon 32x32 size
	│   │       favicon.ico									#regular favicon 
	│   │       index.html									#index file to render React root component
	│   │       logo192 2.png								#COVOL logo 2 192x192 size
	│   │       logo192.png									#COVOL logo 192x192 size
	│   │       logo512 2.png								#COVOL logo 2 512x512 size
	│   │       logo512.png									#COVOL logo  512x512 size
	│   │       manifest.json								#manifest json file regarding React
	│   │       mstile-150x150.png							#COVOL logo 150x150 size
	│   │       safari-pinned-tab.svg						#COVOL logo for safari
	│   │       style.css									#default style of the application for index.html
	│   │
	│   └───src
	│       │   App.css					#default style of the application for app.js
	│       │   App.js					#Combining and rendering all the React components that our team created
	│       │   index.js				#to actually render app.js into index.html
	│       │   store.js				#to manage Redux, changing states
	│       │
	│       ├───actions
	│       │       alert.js					#alert action functions
	│       │       auth.js						#contains and exporting functions to process authentications
	│       │       post.js						#contains and exporting functions to process posting
	│       │       profile.js					#contains and exporting functions to display profile information
	│       │       types.js					#contains a types of system alerting and exports it as a const value
	│       │
	│       ├───components
	│       │   │   AboutUs.js					#About us page
	│       │   │   Alert.js					#to warn users that something has gone wrong with user credentials
	│       │   │   Footer.js					#single Footer component
	│       │   │   Heading.js					#single Header component
	│       │   │   Home.js						#Home page
	│       │   │   LandingPage.js					#Landing page
	│       │   │   ManagementPage.js					#Managing volunteer listings page
	│       │   │   ResponsiveNav.js					#Top responsive navigation bar
	│       │   │
	│       │   ├───auth
	│       │   │       Login.js					#Login page
	│       │   │       Register.js					#Register page
	│       │   │
	│       │   ├───dashboard
	│       │   │       Dashboard.js					#Dashboard page
	│       │   │       DashboardAction.js					#for dashboard page's button actions
	│       │   │       Education.js					#Education component in the dashboard page
	│       │   │       Experience.js					#Experience component in the dashboard page
	│       │   │
	│       │   ├───layout
	│       │   │       spinner.gif					#Spinner image or icon
	│       │   │       Spinner.js					#Spinner will be displayed when loading taking long
	│       │   │
	│       │   ├───post
	│       │   │       Info.js						#Information component
	│       │   │       Post.js						#User post card with information
	│       │   │       ShowPost.js					#To show a post card
	│       │   │
	│       │   ├───post-form
	│       │   │       PostForm.js					#Form field page for posts
	│       │   │
	│       │   ├───posts
	│       │   │       CreatedPostItem.js					#Combined Post card component that is created by users
	│       │   │       CreatedPosts.js					#A single Post card component
	│       │   │       PostItem.js					#PostItem component
	│       │   │       Posts.js					#Post component
	│       │   │
	│       │   ├───profile
	│       │   │       Profile.js					#Profile page
	│       │   │       ProfileAbout.js					#Profile about of a user component
	│       │   │       ProfileEducation.js					#Profile education of a user component
	│       │   │       ProfileExperience.js					#Profile experience of a user component
	│       │   │       ProfileTop.js					#Profile top component
	│       │   │
	│       │   ├───Profile-form
	│       │   │       AddEducation.js					#Adding education form field component
	│       │   │       AddExperience.js					#Adding experience form field component
	│       │   │       CreateProfile.js					#Creating profile form field component
	│       │   │       EditProfile.js					#Editing profile form field component
	│       │   │
	│       │   ├───profiles
	│       │   │       ProfileItem.js					#Profile items in profile page (volunteer listings page)
	│       │   │       Profiles.js					#Profile in profile page (volunteer listings page)
	│       │   │
	│       │   └───routing
	│       │           PrivateRoute.js					#Routing of the application for private pages
	│       │
	│       ├───image
	│       │       anthony.jpg					#Anthony picture
	│       │       jason.jpg					#Jason picture
	│       │       justin.jpg					#Justin picture
	│       │       logo.png					#Logo - Covol
	│       │       placeholder.png					#Placeholder picture
	│       │       profilepic.jpg					#Profile picture
	│       │       tony.jpg					#Tony picture
	│       │       volunteer.jpg					#Volunteer picture
	│       │
	│       ├───reducers
	│       │       alert.js					#Alert object reducers to monitor states chaning
	│       │       auth.js					#Authentication object reducers to monitor states chaning
	│       │       index.js					#Index object reducers to monitor states chaning
	│       │       post.js					#Post object reducers to monitor states chaning
	│       │       profile.js					#Profile object reducers to monitor states chaning
	│       │
	│       ├───styles
	│       │       AboutUs.css					#About us page style
	│       │       CreatedPosts.css					#Created posts page style
	│       │       Footer.css					#Footer component style
	│       │       Heading.css					#Heading component style
	│       │       Home.css					#Home page style
	│       │       Info.css					#Information component style
	│       │       LandingPage.css					#Landing page style
	│       │       Login.css					#Login page style
	│       │       ManagementPage.css					#Managing volunteer lists page style
	│       │       Post.css					#Post component style
	│       │       Register.css					#Register page style
	│       │
	│       └───utils
	│               setAuthToken.js					#To help setting authentication tokens into session storage
	│
	├───middleware
	│       auth.js					#To assist the authentication process as a middleware
	│
	├───models
	│       Post.js					#Post card database schema
	│       Profile.js					#User Profile database schema 
	│       User.js					#User database schema
	│
	└───routes
		└───api
				auth.js					#Authentication API
				posts.js					#Post card API
				profile.js					#Profile API
				users.js					#Users API
	
</details>

[`Back to top`](#covol)

## Quick Start

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