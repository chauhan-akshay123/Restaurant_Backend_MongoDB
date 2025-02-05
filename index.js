const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.model");
const { createRestaurant } = require("./utils/createRestaurant");
const { readAllRestaurants, readRestaurantByName, readRestaurantByNumber, readRestaurantByDelivery, readRestaurantByCuisine, readRestaurantByReservation, readRestaurantByLocation } = require("./utils/readRestaurant");
const { updateRestaurantById } = require("./utils/updateRestaurants");
const { deleteRestaurantById } = require("./utils/deleteRestaurant");

const express = require("express");
const app = express();

initializeDatabase();

app.use(express.json());

// Endpoint to create a restaurant
app.post("/restaurants", async (req, res) => {
 try{
   const savedRestaurant = await createRestaurant(req.body);
   res.status(201).json({ message: "Restaurant added successfully", savedRestaurant });
 } catch(error){
    res.status(500).json({ message: "Error in creatig a restaurant", error: error.message });
 }
});

// Endpoint to read all restaurants
app.get("/restaurants", async (req, res) => {
    try{
      const restaurants = await readAllRestaurants();  
      if(restaurants.length === 0){
        return res.status(404).json({ message: "Restaurants not found" });
      }
      res.status(200).json(restaurants);    
    } catch(error){
        res.status(500).json({ message: "Error fetching all the restaurants", error: error.message });
    }
});

// Endpoint to fetch a restaurant by name
app.get("/restaurants/:restaurantName", async (req, res) => {
    try {
      const { restaurantName } = req.params;  
      const restaurant = await readRestaurantByName(restaurantName); 

      if (!restaurant || restaurant.length === 0) {
        return res.status(404).json({ message: "No restaurant found." });
      }
      res.status(200).json(restaurant);  
    } catch (error) {
      res.status(500).json({ message: "Error in fetching the restaurant", error: error.message });
    }
  });

// Endpoint to fetch a restaurant by Phone Number
app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
    try{
      const { phoneNumber } = req.params;
      const restaurant = await readRestaurantByNumber(phoneNumber);

      if(!restaurant || restaurant.length === 0){
         return res.status(404).json({ message: "No restaurant found." });
      }
      res.status(200).json(restaurant);
    } catch(error){
        res.status(500).json({ message: "Error in fetching a restaurant", error: error.message });
    }
});

// Endpoint to fetch a restaurant by cuisine 
app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
    try{
      const { cuisineName } = req.params;
      const restaurant = await readRestaurantByCuisine(cuisineName);  
 
      if(!restaurant || restaurant.length === 0){
         return res.status(404).json({ message: "No restaurant found." });
      }
      res.status(200).json(restaurant);
    } catch(error){
       res.status(500).json({ message: "Error in fetching a restaurant", error: error.message });
    }
});

// Endpoint to fetch a restaurant by location
app.get("/restaurants/location/:location", async (req, res) => {
   try{
     const { location } = req.params;
     const restaurant = await readRestaurantByLocation(location);

     if(!restaurant || restaurant.length === 0){
        return res.status(404).json({ message: "No restaurants found." });
     }
     res.status(200).json(restaurant);
   } catch(error){
      res.status(500).json({ message: "Error in fetching a resttaurant", error: error.message });
   }
});

// Endpoint to update a restaurant
app.put("/restaurants/update/:restaurantId", async (req, res) => {
    try{
      const { restaurantId } = req.params;
      const dataToUpdate = req.body;
      const updatedRestaurant = await updateRestaurantById(restaurantId, dataToUpdate);  
      if(!updatedRestaurant){
        return res.status(404).json({ message: "Restaurant not found by this ID" });
      }
      res.status(200).json({ message: "Restaurant updated successfully.", restaurant: updatedRestaurant });
    } catch(error){
       res.status(500).json({ message: "Error in updating the restaurant", error: error.message }); 
    }
});

// Endpoint to delete a restaurant 
app.delete("/restaurants/:restaurantId", async (req, res) => {
  try{
    const { restaurantId } = req.params;
    const deletedRestaurant = await deleteRestaurantById(restaurantId)
    if(!deletedRestaurant){
       return res.status(404).json({ message: "No restaurant Found." });
    }
    res.status(200).json({ message: "Restaurant deleted successfully"});
  } catch(error){
     res.status(500).json({ message: "Error in deleting the restaurant", error: error.message });
  } 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});
