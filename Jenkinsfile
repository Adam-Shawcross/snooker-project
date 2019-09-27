pipeline {
 
   
   agent any
   
   
	stages{

   stage('Cleaning') {

           steps {

	  sh "sudo rm -rf /var/www/html/*"

           }
   }
       stage('Build') {

           steps {

          sh "sudo cp -pf WebDev/*.css"
          sh "sudo cp -rpf WebDev/HomePage/* /var/www/html/"
          sh "sudo cp -rpf WebDev/CreateTournament/* /var/www/html/"
          sh "sudo cp -rpf WebDev/TablePage/* /var/www/html/"
          sh "sudo cp -rpf WebDev/CreatePlayer/* /var/www/html/"

           }

       }

   
   }

   
}
