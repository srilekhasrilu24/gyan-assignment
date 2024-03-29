# gyan-assignment
# GitHub-Repository Link
https://github.com/srilekhasrilu24/gyan-assignment.git

# A brief report explaining your choice of tech stack and database, highlighting any particular design decisions and how challenges were addressed.

The chosen tech stack comprises Node.js with Express for backend development, MySQL for database management, and Axios for handling HTTP requests. MySQL offers reliability and scalability for managing relational data, while Express simplifies RESTful API development. Axios facilitates seamless communication with external APIs, addressing challenges related to asynchronous operations and data retrieval.

# Clear instructions on how to set up and run your project, including any prerequisites.

To set up and run the project, ensure Node.js and MySQL are installed. Clone the project, navigate to the directory, and run npm install. Configure MySQL credentials in index.js, then execute node index.js to start the server on port 3012.

# Document your API endpoints, specifying request/response formats and error codes.


 # API Endpoints Documentation:

GET /events/find

Request Format:
Query Parameters:
latitude (number): Latitude coordinate of the user's location.
longitude (number): Longitude coordinate of the user's location.
date (string): Date in YYYY-MM-DD format.
page (optional, number): Page number for pagination (default is 1).
Response Format:
Status Code: 200 OK
   
   {
    "events": [
        {
            "event_name": "string",
            "city_name": "string",
            "date": "string",
            "weather": "string",
            "distance_km": number
        }
    ],
    "page": number,
    "pageSize": 10,
    "totalEvents": number,
    "totalPages": number
}

# Run the Application
   
   npm start

# Database Configuration:

  Update the database configuration in db.js file to connect to your mysql database server.
  create the necessary database tables using sql scripts provided

# install dependencies

 npm install

 # Setting up and running the project:

 # Asynchronous operations handling

In Node.js, asynchronous operations are commonly handled using callbacks, promises, or async/await syntax.

# Input Validation

 Implemented input validation to ensure that all required fields are provided and that latitude and langitude and date


    






