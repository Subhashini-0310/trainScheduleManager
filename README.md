# Train Station Management Dashboard
This project provides a web-based application for managing train station activities, including real-time train arrival and departure updates, platform allocation, waiting queue management, and historical reports on departed trains.

# Features
=> CSV upload for bulk train scheduling

=> Dynamic platform allocation based on priority.

# Getting Started:

Installation
1. Clone the Repository:

git clone <repository_url>
cd <repository_name>


2. Install Dependencies: Run the following command to install all dependencies.

npm install


3. Running the Application
To start the development server, use:

npm start
This will launch the application on http://localhost:3000.


# CSV Format
To upload a train schedule, you need to use a CSV file with the following format:

Train Name	Train Number	Arrival Time	Departure Time	Platform Number	Priority
Express Train	101	10:00	10:30	1	P1
Local Train	202	10:15	10:45	2	P2
Regional Train	303	11:00	11:30	3	P1
Fast Train	404	11:15	11:45	4	P3
Cargo Train	505	12:00	12:30	5	P2
