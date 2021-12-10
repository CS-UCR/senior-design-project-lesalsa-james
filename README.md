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

