const Restaurant = require("../models/restaurant.model");

// Function to update a restaurant by ID
async function updateRestaurantById(restaurantId, dataToUpdate){
    try{
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, dataToUpdate, { new: true });  
      return updatedRestaurant; 
    } catch(error){
        console.error(error);
    }
}

module.exports = { updateRestaurantById };

