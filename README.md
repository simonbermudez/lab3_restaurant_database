# lab3_restaurant_database
NodeJS + Express + MongoDB + mongoose application for Full Stack Development COMP 3133 George Brown College

    1. Create NodeJS project having name lab3_restaurant_database

    2. Install required modules to work with express and mongoose

    3. Create Restaurant Schema in your project to perform mongoDB/mongoose query operations

    4. Create REST API to return all restaurant details
        • Select all the columns

        http://localhost:3000/restaurants

    5. Create REST API to return all restaurant details by cuisine
        • Select all the columns

            http://localhost:3000/restaurants/cuisine/Japanese
            http://localhost:3000/restaurants/cuisine/Bakery
            http://localhost:3000/restaurants/cuisine/Italian

    6. Create REST API to return the 
        • The selected columns must include id, cuisines, name, city, resturant_id
        • The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.

            http://localhost:3000/restaurants?sortBy=ASC
            http://localhost:3000/restaurants?sortBy=DESC

    7. Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
        • The selected columns must include cuisines, name and city, but exclude id
        • The sorting order must be Ascending Order on the name

            http://localhost:3000/restaurants/Delicatessen