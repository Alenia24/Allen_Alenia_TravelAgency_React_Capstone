# Solara's Escapes  Application 
A full stack travel agency web application, that allows users to browse and book trips, leave reviews. Admin can manage trips by creating, editing and deleting trips.

## Technologies
- React
- JavaScript
- Express
- Mongoose
- MongoDB

## User Roles
### Users:
- Users can register.
- Users can login.
- Users can browse all trips.
- Users can view details of a single trip.
- Users can book a trip.
- Users can view reviews for trips.

### Admins:
- Admins can register.
- Admins can login.
- Admins can create trips.
- Admins can edit trips.
- Admins can delete trips.

 ## Authentication
Authentication is handled by bycrypt and JWT.<br>
Routes are protected based on user roles.

## Trip Images Upload
Multer and Multer Storage Cloudinary handle image processing.
Images are uploaded and managed with Cloudinary.

# How to get environemt variables
### 1. MongoDD
1. Log in or sign up for [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) account.
2. Create a cluster
3. Under Connect, copy your connection string

### 2. Cloudinary
1. Log in or sign up for [Cloudinary](https://cloudinary.com/) account.
2. Go to dashboard and copy:
   - Cloud name
   - API Key
   - API Secret
     
### 3. JWT Secret Keys
Gnerate JWT secret keys in the terminal (Execute twice to get to keys for access token and refresh token then copy and paste respectfully into .env file)
``` bash
require('crypto').randomBytes(64).toString('hex')
```

# Installation

## 1. Clone the repository
``` bash
git clone https://github.com/Alenia24/Allen_Alenia_TravelAgency_Express_Capstone.git
cd Allen_Alenia_TravelAgency_Express_Capstone
npm i
```

## 2. Create a .env file to store environment variables
``` bash
MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ACCESS_TOKEN_SECRET=your_jwt_access_key
REFRESH_TOKEN_SECRET=your_jwt_refresh_key
```
## 3. Run the application
``` bash
nodemon server.js
```
# API Endpoints
## Trips
| Method        | Endpoint       |    Description             |
| ------------- |:--------------:| --------------------------:|
| GET           | /trips         | 	  Get all trips           |
| GET           | /trips/:id     | 	  Get a single trip by id |
| POST          | /trips         |  	 Create a new trip       |
| PUT           | /trips/:id     |    Update a trip           |
| DELETE        | /trips/:id     |    Delete a trip           |

## Bookings
| Method        | Endpoint       |    Description                     |
| ------------- |:--------------:| ----------------------------------:|
| POST          | /bookings/:id  |  	 Create a new booking for a trip |

## Reviews
| Method        | Endpoint       |    Description                     |
| ------------- |:--------------:| ----------------------------------:|
| POST          | /reviews/:id   |  	 Create a new review for a trip  |

## Authorization
| Method        | Endpoint       |    Description                     |
| ------------- |:--------------:| ----------------------------------:|
| POST          | /auth/register |  	 Register a user                 |
| POST          | /auth/login    |  	 Login a user                    |
| POST          | /auth/logout   |  	 Logout a user                   |

## Key Notes for admin use for creating, editing, and deleting trips
1. When logging in copy access token return
2. Under headers,
 - key = authorization
 - value = Bearer acess token given at login
3. Under body use form data
4. Key for creating, and editing trip imageURL must be image 


# Usage
Designed to be paired with [solara's escape backend](https://github.com/Alenia24/Allen_Alenia_TravelAgency_React_Capstone)<br>
Live [link](https://solaraescapes.onrender.com)

# Contact
[Linkedln](https://www.linkedin.com/in/aleniaallen/)

