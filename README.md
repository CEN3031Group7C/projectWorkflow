UF Transportation Safety Center

CEN3031 Group 7C
	Erica Weber
	Jose Rafael Diaz 
	Grant Montgomery 
	Andrew Zhang
	Kyle Schneider
	Lucas Sanders 
	
Deployed site: https://cen3031app.herokuapp.com/

This repository holds the development code for the Web App created for the UF Transportation Safety Center during the Fall semester of 2017. 

The Transportation Safety Center is an organization which was established in 2015 and is housed with the Technology and Transfer Center (T2 Center) at the University of Florida. 

The TSC resides under the umbrella of the University of Florida Transportation Institute (UFTI). The focus of TSC is on safety-related research, training, and outreach that has increased over the past five years as the FDOT has affirmed its commitment to reducing the number of highway crashes which result in fatalities and serious injuries in the state.

This Web App was created to establish a central site for members of the TSC to keep track of their projects, current customers to be able to view their project updates, and potential customers to gain information about the TSC, view the different types of projects that have been conducted, and to view and register for training classes hosted by the T2 Center throughout the state. 

As a user, this app contains the following features:

* A Home Page with:
	* A twitter widget to display in real time tweets with the hashtag "Rural Safety" (hashtag can be changed to display tweets with a different hashtag within code in modules/core/client/views/home.client.view.html)
	* A carousel of sliding images related to the Transportation Safety Center, UF, and road safety (images can be changed through image links in the code within modules/core/client/controllers/home.client.controller.js)
	* An About Us textbox which holds static information in 2 paragraphs (can be edited within the code at modules/core/client/views/home.client.view.html) 
	* ![Home Page](/img/1.png?raw=true "Optional Title")
* An About Us Page with:
	* Static information and photo (can be edited at modules/aboutus/client/views/list-aboutus.client.view.html)
	* ![About Us Page](/img/2.png?raw=true "Optional Title")

* A Contact Us Page with:
	* Static information and photo (can be edited at modules/contactus/client/views/list-contactus.client.view.html)
	* ![Contact Us Page](/img/3.png?raw=true "Optional Title")

* A Resources Page with:
	* Static information and links based on category (can be edited at modules/resources/client/views/list-resources.client.view.html)
	* ![Resources Page](/img/4.png?raw=true "Optional Title")

* A Trainings Page with:
	* A google calendar to display all of the upcoming training classes hosted by the TSC with time, date, and location (populated through google account with credentials given in the documentation associated with this WebApp) 
	* A register now button to redirect to the sign up page for these classes (link can be edited from moodules/trainings/client/views/list-trainings.client.view.html)
	* ![Training Page](/img/5.png?raw=true "Optional Title")

* A Projects Page with:
	* A google map with filtering options to display all projects and detailed information about each project upon click on the marker in info windows. These projects can be filtered through the "filter" button to display completed, in progress, proposed, intersection, curve, and pavement marking projects. 
	* Any information in the code regarding these UI features (to edit info windows or map) are found at modules/userprojects/client/views/project-map.client.view.html 
	* Any information in the code regarding the filtering functionality/marker display and backend is found at modules/userprojects/client/controllers/map-userprojects.client.controller.js 
	* ![project1 Page](/img/6.png?raw=true "Optional Title")
	* ![project2 Page](/img/7.png?raw=true "Optional Title")
	* ![project3 Page](/img/8.png?raw=true "Optional Title")

As a client (logged in with a user account- can sign up with signup/sign in links in navbar), this app contains the following added features:

* A User Page with:
	* Ability to view details about each project, including the project that you associate with in a list format with detailed information 

As an admin (logged in with an admin account- can sign up with signup/sign in links in navbar), this app contains the following added features:

* An Admin Page with:
	* Ability to view details about each project, in a list format with detailed information by category of project to keep track of all projects
	* Ability to edit each project that is listed upon viewing details
	* Ability to add a new project with any information/photo 
	* Ability to edit the status of other user accounts 
	* ![Admin Page1](/img/9.png?raw=true "Optional Title")
	* ![Admin Page2](/img/10.png?raw=true "Optional Title")
	* ![Admin Page3](/img/11.png?raw=true "Optional Title")
	* ![Admin Page4](/img/12.png?raw=true "Optional Title")
	* ![Admin Page5](/img/13.png?raw=true "Optional Title")
	* ![Admin Page6](/img/14.png?raw=true "Optional Title")
	* ![Admin Page7](/img/15.png?raw=true "Optional Title")

APIS/Attributes:
	- In this project, we used twitter timeline, google map API key, google calendar, and bootstrap. 

Database:

We are using a Mongo database for the web app. It is located at mlab.com. The capacity is 500mb and it is currently using 16mb. This is the free sandbox database available with mlab. 
If you want to change out the database, you will need to set “uri” with the new database connection value.  
You can update this value in your web app in config/env/development.js - https://github.com/CEN3031Group7C/projectWorkflow/blob/master/config/env/development.js

Description of Deployment:

The TSC website is deployed through Heroku. Heroku uses automatic deployment and the website is updated based on what is on the master branch of the projectWorkflow github. Any changes to the master branch on the projectWorkflow github will be reflected on the heroku app and subsequently at cen3031app.herokuapp.com. Otherwise, to make changes, create a branch, add the appropriate changes, and merge the branch into the master branch of the projectWorkflow github. The changes should then be reflected automatically on the webpage. For more information, please read 4.3 ( General Instructions for your deployment). 
Deployment Link
Live Web Application URL - cen3031app.herokuapp.com
GitHub (Code Repository) - https://github.com/CEN3031Group7C/projectWorkflow
Web Server Hosting Provider - Heroku <dashboard.heroku.com>
To initiate transfer
API Keys
Google Maps API Key: AIzaSyA35fx5-G1qvTKr6SRhPv9q5pLen84nwp0
We recommend you generate a new key here. 

This web application was built using MEAN.js Version 0.5.0 <http://meanjs.org> which uses Node,js Version 6.9.2, Express Version 4.15.2, Angular Version 1.5.0.

To deploy this project locally, install the above versons of MEANSTACK and the project can be run using "npm start" while inside the desired repository. Navigate to localhost:3000 and the application will appear locally on your machine. 

General Instructions for your deployment:

Your web app is deployed using Heroku. See above for relevant links and login information. Your deployment is currently setup to pull for the GitHub repository. To deploy from a different repository, fork the above github repository, and change the app connected to GitHub in the heroku dashboard to your new forked repository. 

There are two branches to this GitHub Repositiory: Master and Development. Development holds all the code that we are still working on. Master is what is currently deployed on your website.

If you have someone continue development. They should work on the Development branch and push to the Master when they have tested their code and know it won’t break the deployed site.

The Heroku is setup to automatically deploy what is on the master branch. Therefore, any changes made to the master branch will automatically be reflected in cen3031app.herokuapp.com. If you don’t want automatic deployment, you can change this by going into the heroku dashboard (dashboard.heroku.com), clicking on the project, deploy, and then clicking “Disable automatic deploys”. 







