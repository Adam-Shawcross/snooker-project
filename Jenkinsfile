pipeline {
 
   
   agent any
   
   
	stages{

  
       stage('Build') {

           steps {

	  sh "sudo cp -rpf WebDev/styles.css /var/www/html/"
          sh "sudo cp -rpf WebDev/HomePage/* /var/www/html/"

          sh "sudo cp -rpf WebDev/TablePage/* /var/www/html/"
          sh "sudo cp -rpf WebDev/CreatePlayer/* /var/www/html/"

           }

       }

   
   }

   
}