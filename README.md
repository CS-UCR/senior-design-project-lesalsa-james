[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5819898&assignment_repo_type=AssignmentRepo)
# CS178A-B-Template

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [How To Run](#how-to-run)
- [Diagrams](#diagrams)
- [Dependencies](#dependencies)

## Overview
Basically, we will be creating a web application that allows gamers (the main type of users for this application) to connect. Similar to something like Tinder, but for games and meeting new friends. Our project would have features such as logging in, profiles saved, and categories for people to make friends with similar interests. Some categories we have in mind are games the user plays/is looking to play, wanting to play competitively or casually, and type of music. We would create a “matching” aspect for users based on selections and filter applicants based on that. 
  Our matching algorithm would be based on the data we retrieve from each user using the Steam API which returns info such as games played and the total hours played on each game. With this data, we plan to create a recommender system to match different players. Of course, different categories will be weighted accordingly; for instance, a player’s games would be weighted more than a user’s other hobbies. As of now, we have slight knowledge of K-nearest-neighbor recommender systems but we aim to research other recommender systems such as collaborative filtering. 
Then we would have a chatting function for users to connect. Though still subject to change, we are planning to use technologies such as Javascript, HTML, CSS, Node.js, React.js, and Express.js to build our application. We currently are using EJS, and PSQL for our database. However we do plan on switching over to MongoDB.
	Our project is important in allowing users and gamers to be able to connect with each other. We feel that the quality of games is often affected by teammates, and the ability to find teammates before queuing up in a game can overall help benefit the quality of games. In addition, our project will allow people looking for friends or others with similar interests, and be able to connect through the online community.


## Team
[Alex Chen](https://github.com/achen163)

[Sabrina Carlos](https://github.com/sabroops)

[Steven Nguyen](https://github.com/steven-nguyen22)
  
	
## Usage
Demo: <Link to youtube video>

<Screenshot of application>

## How To Run
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to run our project 
1. Download an IDE (Visual Studio Code)

2. Command line: git clone https://github.com/CS-UCR/senior-design-project-lesalsa-james.git (in IDE terminal) 
	
3. Command line: npm install express (installing dependency) 
	
4. Command line: cd mern/server
	
5. Command line: npm start 
	
6. Open web browser, enter url: http://127.0.0.1:8000/

## Diagrams

Sequence Diagram
![Sequence Diagram](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/Gamersonly%20Sequence%20Diagram.jpg) 
Frontend Structure
	
Home Page
![Home Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Home.png)
Loading/Buffering page
![Buffering page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Loading.png)
Login
![Login Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Login.png)
Profile
![Profile page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Profile_v1.png)
Chat Page
![Chat Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Chat.png)


Overall System Diagram
![Overall System Diagram](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/System%20Diagram.jpg) 

## Dependencies
Install Node Package Manager (npm). [Helpful Documentation](https://www.npmjs.com/get-npm)
	
## Accomplished Tasks
1. This quarter we mainly focused on planning our project and visualising how it will all come together through our various design documents and diagrams which can be found in our group's folder on Google Drive.
	
2. A lot of our planning also consisted of research we had to do on new tools and technologies that we weren't familiar with to implement them in our project. 
	
3. Setting up our codebase with all the dependencies and technologies we researched was another task we accomplished before we began coding. 
	
4. Coding as a group we were able to setup our homepage, login page, and sign up page. We also made progress on implementing our live chatting feature but there are still a couple bugs we have to work out before it runs smoothly. 

## Future Plans 
1. Over the break we plan to finish our live chatting feature which has already been implemented. However, there are still bugs at the time and we need to troubleshoot them before the feature works correctly. 
	
2. We plan to integrate the Steam API to allow us to gather data from individual users and the games they play. We are also looking into using the Riot API for additional data but only if time permits. 
	
3. Additionally, we also plan to add the matching and friends feature which allows users to friend other individuals, see their online status, and select match making filters to find other gamers. 
	
4. Our recommendation system is another feature that will be added eventually which encompasses the last 3 features. Using the data from the Steam API and matching making filters, we will build a system that connects gamers to other individuals that share similar qualities. 
	
5. Testing and deployment will also be a main topic we will focus on towards the end of next quarter. We plan to test everything to make sure that our web application is running smoothly and we are thinking of deploying our application using Heroku. 
