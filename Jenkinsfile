pipeline {
 
   
   agent any
   
   
	stages{

   stage('Cleaning') {

           steps {

	  sh "sudo rm -rf /var/www/html/"
        //   sh "sudo cp -rpf WebDev/HomePage/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/CreateTournament/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/TablePage/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/CreatePlayer/* /var/www/html/"

           }
       stage('Build') {

           steps {

	  sh "sudo cp -rpf WebDev/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/HomePage/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/CreateTournament/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/TablePage/* /var/www/html/"
        //   sh "sudo cp -rpf WebDev/CreatePlayer/* /var/www/html/"

           }

       }

   
   }

   
}