# Restaurant Backend API

A RESTful API for managing restaurant data, built with **Node.js**, **Express**, and **MongoDB**.

## Features

- Create, read, update, and delete restaurant information
- Search restaurants by name, cuisine, location, and phone number
- Comprehensive restaurant details including ratings, menu URLs, and photos
- Built with modern web technologies

## Project Setup

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure MongoDB connection
   - Ensure MongoDB is running locally or in the cloud
   - Update the connection string in `db.connect.js`

4. Start the server
   ```bash
   node server.js
   ```

The server will be available at `http://localhost:3000`.

## API Endpoints

### Create Restaurant
- **POST** `/restaurants`
- Creates a new restaurant entry
```json
{
  "name": "The Spicy Grill",
  "cuisine": ["Indian", "Mediterranean"],
  "location": "Downtown, New York",
  "rating": 4.5,
  "website": "https://spicygrill.com",
  "phoneNumber": 1234567890,
  "openHours": "10:00 AM - 10:00 PM",
  "priceRange": "$$ (11-30)",
  "reservationsNeeded": true,
  "isDeliveryAvailable": true,
  "menuUrl": "https://spicygrill.com/menu",
  "photos": [
    "https://spicygrill.com/photo1.jpg",
    "https://spicygrill.com/photo2.jpg"
  ]
}
```

### Get Restaurants
- **GET** `/restaurants` - Get all restaurants
- **GET** `/restaurants/:restaurantName` - Get restaurant by name
- **GET** `/restaurants/directory/:phoneNumber` - Get restaurant by phone number
- **GET** `/restaurants/cuisine/:cuisineName` - Get restaurants by cuisine
- **GET** `/restaurants/location/:location` - Get restaurants by location

### Update Restaurant
- **PUT** `/restaurants/update/:restaurantId`
- Updates an existing restaurant
```json
{
  "name": "The New Spicy Grill",
  "rating": 4.8
}
```

### Delete Restaurant
- **DELETE** `/restaurants/:restaurantId`
- Removes a restaurant from the database

## Data Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | Yes | Name of the restaurant |
| cuisine | Array | No | List of cuisines served |
| location | String | Yes | Restaurant location |
| rating | Number | No | Rating (0 to 5) |
| website | String | No | Restaurant website |
| phoneNumber | Number | Yes | Contact number |
| openHours | String | No | Operating hours |
| priceRange | String | No | Price range of dishes |
| reservationsNeeded | Boolean | No | Whether reservations are required |
| isDeliveryAvailable | Boolean | No | Whether delivery is available |
| menuUrl | String | Yes | Link to the menu |
| photos | Array | No | List of photo URLs |

## Example API Requests

### Create a Restaurant
```bash
curl -X POST http://localhost:3000/restaurants \
  -H "Content-Type: application/json" \
  -d '{
    "name": "The Spicy Grill",
    "cuisine": ["Indian"],
    "location": "Downtown"
  }'
```

### Get All Restaurants
```bash
curl http://localhost:3000/restaurants
```

### Get Restaurant by Name
```bash
curl http://localhost:3000/restaurants/The%20Spicy%20Grill
```

### Update Restaurant
```bash
curl -X PUT http://localhost:3000/restaurants/update/640c3e77f1a4 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "The New Spicy Grill",
    "rating": 4.8
  }'
```

### Delete Restaurant
```bash
curl -X DELETE http://localhost:3000/restaurants/640c3e77f1a4
```

## Response Examples

### Successful Creation
```json
{
  "message": "Restaurant added successfully",
  "savedRestaurant": {
    "name": "The Spicy Grill",
    "cuisine": ["Indian"],
    "location": "Downtown",
    "rating": 4.5
  }
}
```

### Get Restaurant
```json
{
  "_id": "640c3e77f1a4",
  "name": "The Spicy Grill",
  "cuisine": ["Indian"],
  "location": "Downtown, New York",
  "rating": 4.5
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
