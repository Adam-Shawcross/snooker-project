# Snooker Project


## Index
[Brief](#brief)
   * [Solution](#solution)
   
[Architecture](#architecture)
   * [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)
   * [Report](#report)

     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

<a name="brief"></a>
## The Brief

To create a CRUD based web application with use of an API and databases. The application must make use of atleast one table, and be thoroughly tested.

<a name="solution"></a>
### Solution

I decided to create a Snooker player and tournament database to allow access to information about current players, in addition to being able to add and remove both.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/Documentation/InitialERD.png)

The initial plan for the ERD consisted of two tables to ensure simplicity and consistanty. Understanding my own exposure to these technologies and processes i believed it was a fair assesment and prediction of what i could achieve.

#### Delivered solution
![Final ERD](/Documentation/FinalERD.png)

As shown in the end, my expectations were somewhat close to reality as in fact I have both tables functional (delete front end issues). However, in the time given i could not achieve the relational aspect of my databases. 

<a name="testing"></a>
## Testing

JUnit, Mockito and Selenium tests have been used for automated testing. With codacy in use for static testing.

<a name="report"></a>
### Report

Test coverage for the API is at 76%, I have a multitude of selenium tests for the functionality of all buttons and testing CRUD functionality.
![Mockito/JUnit](/Documentation/TestCoverage.PNG)
![Selenium](/Documentation/SeleniumTests.PNG)

Codacy is in use on both front end, and back end both with B and A grades respectively. 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dabab8e56e484860a592f0a29b082e8e)](https://www.codacy.com/manual/Adam-Shawcross/project_API?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Adam-Shawcross/project_API&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2dccfe3aa0744e8aaabe32e0ab825d98)](https://www.codacy.com/manual/Adam-Shawcross/snooker-project?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Adam-Shawcross/snooker-project&amp;utm_campaign=Badge_Grade)



<a name="depl"></a>
## Deployment

I used jenkins to automate my front end deployment, with a webhook to GitHub which was triggered with every push.

This project is able to run both locally and virtually, using the current VM ip and available on localhost if need be. 

![Deployment Pipeline](/Documentation/CIPIpeline.png)
<a name="tech"></a>
### Technologies Used

* MYSQL Database Engine - Database
* Java - Logic
* HTML CSS & Javascript - Front End Development
* Apache - Web server
* Jenkins - CI Server
* Maven - Dependency Management
* [JUnit, Mockito](https://github.com/Adam-Shawcross/project_API) - Standard Testing
* Codacy - Static Testing
* [Selenium](https://github.com/Adam-Shawcross/SoloProject-SeleniumTests) - Automated testing
* [Trello](https://trello.com/b/DGzwV3Ss/snooker-player-database) - Project Tracking
* GCP - Live Environment

<a name="FE"></a>
## Front End Design
### Wireframes Initial
Home Page
![Home Page Wireframe](/Documentation/HomePage.png)
Create Player
![Create Player Wireframe](/Documentation/CreatePage.png)
Table Page
![Player Page Wireframe](/Documentation/Create.png)

### Final Appearance
Home Page
![Home Page Actual Wireframe](/Documentation/HomePageActual.PNG)
Create Player
![Create Player Actual Wireframe](/Documentation/CreatePageActual.PNG)
Table Page
![Table Page Actual Wireframe](/Documentation/TablePageActual.PNG)
<a name="improve"></a>
## Improvements for the Future

In future sprints i would like to refine down my code, so that it hits SOLID principles more effectively and cut down on code duplication. At this point in time delete is temperemental and does not consistantly work on the front end, in future sprints i would absolutely fix this. 

In terms of future developments planned, I have in mind:

* Alerts for incorrect data types entered
* Portals for admins, so only they can change player and tournament data
* A legends table for players whove retired 
* Create your own tournament with players involved
* Relational databases
* Add update as a autofilled modal saving the user having to type out all the data that is staying the same



<a name="auth"></a>
## Authors

Adam Shawcross

