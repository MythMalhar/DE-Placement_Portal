# DE-PLACEMENT_PORTAL
## Description
This is portal for helping the TPO(Training and placement operation) coodinators in uniform distribution. It includes various features which makes the work of TPO codrdinators more handy, quick and efficient.Purpose of making this web app is to minimize the randomness of data collection, storing and handling it manually.Rather this web app allows the coordinators to collect, see and handle the information about the students all togather at on one platform.

## Features
1. Table view of all the enrolled students.
2. TPO coordinator can update or make changes in the status of students process flagpoints.
3. students are able to raise query for uniforms.
4. students can also track their individual status for unifroms.
5. Payment includation.(in future versions).

## Installation Guide
1. Download the code.
2. Go to client folder and run "npm i" command in terminal.
3. Go to server folder and run "npm i" commant in terminal.
4. create a .env file in the root folder.
5. set enviornment variables in .env file as :
   MONGO = mongodb+srv://Bhavy:8nDIvEr442Qaw0zq@placement-portal.3hekduf.mongodb.net/placement-portal?retryWrites=true&w=majority
   JWT_SECRET_KEY = mysecretkey
   USER = `your gmail here which has app password`
   PASS = `your app password here`

   note : use your mail account in "USER" env variable, from which you want to send mails.
           First you need to create app password to start the mail service.(of the same mail account you used)
6. Now move to server folder in terminal and run "npm start" command.
7. Now go to client folder and run "npm start" command.
