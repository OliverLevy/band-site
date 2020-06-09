# Project 1 - Band Site API

## Overview
- The url for the API is `https://project-1-api.herokuapp.com/`
- On the `/comments` route, the comments array contains three default comments
- **Note:** This API has a temporary memory. Occasionally the API will reset removing all stored comments (except for the three default comments)

## Authentication
- To register with the API and get a key, make a GET request to `/register`
    - You can do this with the browser and you only need to do it once. Store the key in a global variable in your website.
- You must append `?api_key=<your_api_key_here>` to each of your API request URLs (except for `/register`)

## Routes

### `GET /register`
- Returns an object containing a unique API key

#### Response Body Example
```json
{
    "api_key": "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
}
```

### `GET /comments`
- Returns an array of comments
- Comments may be regularly cleared by the server
- Timestamp is in ms since epoch

#### Response Body Example
```json
[
    {
        "name": "Nigel",
        "comment": "This is a cool site",
        "id": 1,
        "likes": 0,
        "timestamp": 1530716269495
    }
]
```

### `GET /showdates`
- Returns an array of showtime objects.

#### Response Body Example
```json
[
  {
    "id": 0,
    "date": "MON 21 MAY",
    "place": "Montebello Rockfest",
    "location": "Montebello, QC, Canada"
  },
  {
    "id": 1,
    "date": "SAT JUN 16",
    "place": "Coral Sky Ampitheater",
    "location": "West Palm Beach, FL, United States"
  }
]
```

### `POST /comments`
- Creates a new comment
- Will return a 400 error code if both 'name' and 'comment' are not included
- If successful, it will return the `comment` JSON object that was created

#### Required Request Headers
```Content-Type: application/json```

#### POST Body Example
```json
{
	"name": "Nigel",
	"comment": "What a cool site"
}
```

#### Response Body Example
```json
{
    "name": "Nigel",
    "comment": "What a cool site",
    "id": 0,
    "likes": 0,
    "timestamp": 1530744795832
}
```

## Diving Deeper
**Note:** The following endpoints are not required to satisfy the assignment requirements:

### `PUT /comments/:id/like`
- Increments the like counter of the comment specified by `:id`
  - swap `:id` for the id of the element you want to like
- No POST body expected
- Will return a 404 if no comment with that ID is found.
- If successful, it will return the `comment` JSON object that you just liked
- *This endpoint is not required to satisfy the assignment requirements*

#### Response Body Example
```json
{
    "name": "Nigel",
    "comment": "What a cool site",
    "id": 0,
    "likes": 1,
    "timestamp": 1530744795832
}
```

### `DELETE /comments/:id`
- Deletes the comment specified by `:id`. 
  - Swap `:id` for the id of the element you want to delete
- If successful, it will return the `comment` JSON object that you just deleted
- *This endpoint is not required to satisfy the assignment requirements*

#### Response Body Example
```json
{
    "name": "Nigel",
    "comment": "What a cool site",
    "id": 0,
    "likes": 0,
    "timestamp": 1530744795832
}
```

## Deployment
- Node engine fixed to 8.11.x
- npm package versions fixed for stability
- The profile defines how to start the server