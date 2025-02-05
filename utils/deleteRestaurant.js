const Restaurant = require("../models/restaurant.model")

// Function to delete a Restaurant by ID
async function deleteRestaurantById(restaurantId){
  try{
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    return deletedRestaurant;
  } catch(error){
     console.error(error);
  }
}

module.exports = { deleteRestaurantById }