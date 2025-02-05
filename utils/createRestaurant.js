const Restaurant = require("../models/restaurant.model");

// Function to create a restaurant
async function createRestaurant(newRestaurant){
   try{
    const restaurant = new Restaurant(newRestaurant);
    const savedRestaurant = await restaurant.save();
    return savedRestaurant;
   } catch(error){
      console.error(error);
   } 
}

module.exports = { createRestaurant };