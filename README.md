[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5819898&assignment_repo_type=AssignmentRepo)
# CS178A-B-Template

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [How To Run](#how-to-run)
- [Diagrams](#diagrams)
- [Dependencies](#dependencies)

## Overview
Basically, we will be creating a web application that allows gamers (the main type of users for this application) to connect. Similar to something like Tinder, but for games and meeting new friends. Our project would have features such as logging in, profiles saved, and categories for people to add friends with similar interests and chat. Some categories we have in mind are games the user plays/is looking to play, wanting to play competitively or casually, and type of music. We would create a "filtering" aspect for users based on selections and filter applicants based on that. Then we would have a chatting function for users to connect, allowing them to chat normally or also live chat. 
Though still subject to change, we are currently using technologies such as Javascript, HTML, CSS, Node.js, React.js, and Express.js to build our application. For our frontend, we are also using Chakra UI, a React Component to help us style our webpages. Last quarter we were using PSQL but have made the switch over to MongoDB this quarter.
	Our project is important in allowing users and gamers to be able to connect with each other. We feel that the quality of games is often affected by teammates, and the ability to find teammates before queuing up in a game can overall help benefit the quality of games. In addition, our project will allow people looking for friends or others with similar interests, and be able to connect through the online community.


## Team
[Alex Chen](https://github.com/achen163)

[Sabrina Carlos](https://github.com/sabroops)

[Steven Nguyen](https://github.com/steven-nguyen22)
  
	
## Usage
Demo: <Link to youtube video>

<Screenshot of application>


## How to run our project 
1. Download an IDE (Visual Studio Code)

2. Command line: git clone https://github.com/CS-UCR/senior-design-project-lesalsa-james.git (in IDE terminal) 
	
3. Command line: cd mern/server
	
4. Command line: npm install (installing dependency) 
	
5. Make a .env file with the contents:
 
	PORT=5000
	MONGO_URI=mongodb+srv://gamersonly:lesalsajames@cluster0.iirer.mongodb.net/Gamersonly?retryWrites=true&w=majority
	JWT_SECRET = lesalsajames
	
6. Command line: cd mern/client (in a new terminal)
	
7. Command line: npm install
	
8. Command line: npm start 
	

## Diagrams

Sequence Diagram
![Sequence Diagram](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/Gamersonly%20Sequence%20Diagram.jpg) 
Frontend Structure
	
Mocked Up Home Page
![Home Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Home.png)
Mocked Up Loading/Buffering page
![Buffering page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Loading.png)
Mocked up Login
![Login Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Login.png)
Mocked up Profile
![Profile page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Profile_v1.png)
Mocked up Chat Page
![Chat Page](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/LeSalsa%20Gamers_Chat.png)


Overall System Diagram
![Overall System Diagram](https://github.com/CS-UCR/senior-design-project-lesalsa-james/blob/main/images/System%20Diagram.jpg) 

	
## Accomplished Tasks
1. This quarter we mainly focused on planning our project and visualising how it will all come together through our various design documents and diagrams which can be found in our group's folder on Google Drive.
	
2. A lot of our planning also consisted of research we had to do on new tools and technologies that we weren't familiar with to implement them in our project. 
	
3. Setting up our codebase with all the dependencies and technologies we researched was another task we accomplished before we began coding. 
	
4. Coding as a group we were able to setup our homepage, login page, and sign up page. We also made progress on implementing our live chatting feature but there are still a couple bugs we have to work out before it runs smoothly. 

5. We implemented React to our homepage and login/signup page.
	
6. Have our Edit Profile Page working.

7. Worked on Creating a Chat, and Creating a Group Chat.

## Future Plans 
1. Currently finishing up our connection of backend and frontend for our chatting.
	
2. We will be working on allowing users to edit other parts of their profile as well. 
	
3. Additionally, we also plan to add the filtering and friends feature which allows users to friend other individuals and chat with those friended individuals.
	
5. Testing and deployment will also be a focus on towards the end of the quarter. We plan to test everything to make sure that our web application is running smoothly and we are thinking of deploying our application using Heroku. 
