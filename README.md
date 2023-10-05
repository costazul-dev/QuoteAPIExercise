# Quote API: My Implementation

## Introduction
I successfully built a back-end application that serves quotes about computers, coding, and technology. Below, I've provided an overview of the tasks I completed and the methodologies I employed to fulfill the project requirements from Codecademy.

## Tasks Completed

### 1. Prerequisites
- Made sure to have the knowledge acquired from the Express Routes and Express Routers lessons from the Learn Express curriculum.

### 2. Utilizing the Starter Code
- Used the provided `server.js` as the base.
- Leveraged the `quotes` array and the `getRandomElement()` function that was already provided.

### 3. Server Initialization
- Ensured the server was listening on the designated PORT variable.
- Successfully loaded the blue Quote API site on `localhost:4001`.

### 4. Implemented `GET /api/quotes/random` Route
- Built a route that fetches and returns a random quote from the `quotes` array.

```json
{
  "quote": {
    "person": "sample person",
    "quote": "sample quote"
  }
}
```

### 4. Implemented `GET /api/quotes/random` Route
- Built a route that fetches and returns a random quote from the `quotes` array.
-- Returns all quotes if no query parameters are present.
-- Returns quotes from a specific person if the person attribute is provided in the query string.

```json
{
  "quotes": [
    {
      "person": "sample person",
      "quote": "sample quote"
    },
    ...
  ]
}
```

### 5. Added `POST /api/quotes` Route
- Created a route for adding new quotes to our dataset.
- Ensured that both quote and person attributes exist in the query string, otherwise, it responds with a 400 status.
- When successfully added, the API responds with:

```json
{
  "quote": {
    "person": "new person",
    "quote": "new quote"
  }
}
```

## Conclusion

Throughout this project, I honed my skills in building Express.js web APIs, handling different types of requests, and structuring response data. I enjoyed the challenge of constructing the routes based on the project's requirements and am excited to tackle more complex back-end tasks in the future.