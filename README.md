## Category: Project 
## Link 
* Link: https://foodapp-aa238.web.app/home Mobile view also available :) 
* Demo: https://youtu.be/7MGAUufEvWY
## Framework 
  * Angular, Observable services, Ionic
## What is the project
  * Implement food nutrition track hybrid web app. User can track their 4 type of nutrition and total calories(gCal) input within particular calendar day in year.
## Core Functionality
  * Construct dynamic HashMap calendar that store actual measured objects for effective items retrieval and modification
  1. Food object has specific record of its 4 nutrition type and calories
  2. dayPack HashMap object, that has keys hashed for specific days to food[] and count how many foods
  3. total_intake class performer. When specific day of dayPack picked, has function instance  to calculate total input of 4 type nutrition and calories.
  4. MonthDays class account for calendar object within a Month
      * consist of 2  instance: specific month and days[]
      * true_cal initialized as MonthDays[] (using alogirthm to generate each month consist of 28,30 or 31 days)
      * Also have MonthDay class (day instance only), that has Monthday object initialized as MonthDay[]. When specific month picked in calendar, true_cal transfer days[] into Monthday. Monthday displayed on calendar as 2D array.
   
## Step to reproduce
### npm package
- install npm package, if your local machine don't have it yet. https://nodejs.org/en/download
  - use "npm -v" to check your machine has npm 

### Download and run in development
1. Download the file in VSCode
2. Open Terminal, use command "npm i"
3. command "npm run start"

