# Solara's Escapes  Application 
A full stack travel agency web application, that allows users to browse and book trips, leave reviews. Admin can manage trips by creating, editing and deleting trips.

## Technologies
- React
- JavaScript
- Express
- Mongoose
- MongoDB
- Bcrypt
- Multer
- Cloudinary

## User Stories
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

# Installation

## 1. Clone the repository
``` bash
git clone https://github.com/Alenia24/Allen_Alenia_TravelAgency_React_Capstone.git
cd Allen_Alenia_TravelAgency_React_Capstone
```

## 3. Run the application
``` bash
npm run dev
```

# Usage
You can view [solara's escape backend](https://github.com/Alenia24/Allen_Alenia_TravelAgency_Express_Capstone) repository<br>
You can view [solara's escape frontend](https://github.com/Alenia24/Allen_Alenia_TravelAgency_React_Capstone) repository<br>

# Deployed Live Link
[Solara's Escape](https://solaraescapes.onrender.com)

# About Me
[Linkedln](https://www.linkedin.com/in/aleniaallen/)

# Resources
- [JWT Authentication Tutorial - Node.js](https://www.youtube.com/watch?v=mbsmsi7l3r4&t=882s)
- [Build Node.js User Authentication - Password Login](https://www.youtube.com/watch?v=Ud5xKCYQTjM&t=2s)
- [Save Token inLocalStorage & autologout user when token is expired in React Redux App - ReactJS](https://www.youtube.com/watch?v=ocMDaaWr-NE)
- [How to refrence the objectId from one collection/ schema to another?](https://www.mongodb.com/community/forums/t/how-to-reference-the-objectid-from-one-collection-schema-to-another/203108)
- [Creating Protected Routes With React Router V6](https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c)
- [How to log-out user from app using ReactJS ?](https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/)

# Future Plans
## 1. Create User Dasboard to give users the ability to:
  - View Booked Trip
  - Cancel Trips
  - Update account information
## 2. Integrate Payment using stripe, etc
  - Give users the ability to complete booking with by payment.
## 3. Application wide
  - Allow users to search for a trip by name.
  - Sort trips by price, date, etc.
## 4. Authentication
 - I used local storage to store tokens, role. I hope to use a different approach, as I have learnt that local storage is vulnerable to attacks.

# What I've learned through the development of the application
Before developing this application I had no prior experience with authentication. The process of verification and managing access was overwhelming. I read documentations, and watched countless youtube videos. I was able to have an understanding about the step by step process as to how authentication works.
I learned that:
- bcrypt is used to hash passwords so they are not stored directly in the database as plain text.
