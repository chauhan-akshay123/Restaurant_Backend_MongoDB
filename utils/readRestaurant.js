 const Restaurant = require("../models/restaurant.model");

 // Function to fetch all restaurants
 async function readAllRestaurants(){
    try{
      const allRestaurants = await Restaurant.find();
      return allRestaurants
    } catch(error){
        console.error(error);
    }
 }

 // Function to fetch a restaurant by its name
 async function readRestaurantByName(restaurantName){
    try{
      const restaurant = await Restaurant.find({ name: restaurantName });  
      return restaurant;
    } catch(error){
        console.error(error);
    }
 }

 // Function to fetch restaurant offering reservations
 async function readRestaurantByReservation(){
    try{
      const restaurants = await Restaurant.find({ reservationsNeeded: true });  
      return restaurants;
    } catch(error){
        console.error(error);
    }
 }

 // Function to fetch restaurants offering delivery
 async function readRestaurantByDelivery(){
    try{
      const restaurants = await Restaurant.find({ isDeliveryAvailable: true });  
      return restaurants;
    } catch(error){
       console.error(error); 
    }
 }

 // Function to fetch a restaurant by Phone Number
 async function readRestaurantByNumber(number){
    try{
      const restaurant = await Restaurant.find({ phoneNumber: number })  
      return restaurant
    } catch(error){
       console.error(error); 
    }
 }

 // Function to fetch a restaurant by cuisine
 async function readRestaurantByCuisine(data){
    try{
      const restaurants = await Restaurant.find({ cuisine: data });  
      return restaurants; 
    } catch(error){
        console.error(error);
    }
 }

 // Function to fetch a restaurant by location
 async function readRestaurantByLocation(location){
    try{
      const restaurant = await Restaurant.find({ location: location });  
      return restaurant;
    } catch(error){
       console.error(error); 
    }
 }

module.exports = { readAllRestaurants, readRestaurantByName, readRestaurantByNumber, readRestaurantByDelivery, readRestaurantByCuisine, readRestaurantByReservation, readRestaurantByLocation }
