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
![Initial ERD](/folder/file.png)

The initial plan for the ERD consisted of two tables to ensure simplicity and consistanty. Understanding my own exposure to these technologies and processes i believed it was a fair assesment and prediction of what i could achieve.

#### Delivered solution
![Final ERD](/Documentation/ERD_Final.jpg)

As shown in the end my expectations were somewhat close to reality as in fact I hhave both tables functional (delte front end issues). However, in the time given i could not achieve the relational aspect of my databses. 

<a name="testing"></a>
## Testing

JUnit, Mockito and Selenium tests have been used for automated testing. With codacy in use for static testing.

<a name="report"></a>
### Report

Test coverage for the API is at ...., I have a multitude of selenium tests for the functionality of all buttons and testing CRUD functionality.
Codacy is in use on both front end, back end and sleenium testing with grades of B, A and A respectively.

<a name="depl"></a>
## Deployment

I used jenkins to automate my front end deployment, with a webhook to GitHub which was triggered with every push.

This project is able to run both locally and virtually, using the current VM ip and available on localhost if need be. 

![Deployment Pipeline](/folder/file.png)
<a name="tech"></a>
### Technologies Used

* MYSQL Database Engine - Database
* Java - Logic
* HTML CSS & Javascript - Front End Development
* Apache - Web server
* Jenkins - CI Server
* Maven - Dependency Management
* JUnit, Mockito - Standard Testing
* Codacy - Static Testing

* [Trello](https://trello.com/b/DGzwV3Ss/snooker-player-database) - Project Tracking
* GCP - Live Environment

<a name="FE"></a>
## Front End Design
### Wireframes
Home Page
![Home Page Wireframe](/folder/filename.png)
Create Player
![Create Player Wireframe]()
Table Page
![Table Page Wireframe](/folder/filename.png)

### Final Appearance

<a name="improve"></a>
## Improvements for the Future

Currently, IDs are required to update poses and routines, and to add or remove poses from routines. In my next sprint, I would like to create buttons in the front end which allow this functionality without the need for IDs, which would allow the object IDs to be hidden from the user.

In later sprints, I would also like create a health-benefit entity which would have a many to many relationship with poses, so that users can create routines based on their focus for their practice. After this, I would add the capability to create different user accounts. At this point, I would remove the functionality for the user to add and remove poses themselves in the front end. These would instead be hard coded into the database, which the user could manipulate only for adding and removing them from their own routines.


At this point in time delete is temperemental and does not consistantly work on the front end, in future sprints i would absolutely fix this. 

In terms of future developments planned, I have in mind:

* Alerts for incorrect data types entered
* Portals for admins, so only they can change player and tournament data
* A legends table for players whove retired 
* Create your own tournament with players involved
* Relational databases



<a name="auth"></a>
## Authors

Adam Shawcross

