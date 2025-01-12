
`# BiteBD FoodSuggestionApp

A food suggestion app to help users discover new and exciting dishes based on their preferences. This project is designed to offer an easy and engaging way to explore food options, powered by various algorithms to match users' tastes.

## Features

- **Food Suggestions**: Get food recommendations based on user preferences, location, and seasonality.
- **Filter Options**: Filter dishes by categories such as cuisine, ingredients, and dietary preferences (e.g., vegetarian, vegan, gluten-free).
- **User Feedback**: Rate dishes and provide feedback to improve future suggestions.
- **User Profiles**: Create and manage personal profiles to save favorite dishes and get personalized recommendations.
- **Search Functionality**: Easily search for specific dishes or ingredients.
- **Responsive UI**: The app has a responsive design to provide a seamless experience across devices.

## Technologies Used

- **Frontend**: React (with hooks and context API)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **APIs**: Food APIs (for retrieving dish data and suggestions)

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/nurahmed123/BiteBD_FoodSuggestionApp.git
cd BiteBD_FoodSuggestionApp` 
```
### 2. Install Dependencies

#### Backend

1.  Navigate to the backend directory:

bash

Copy code

`cd backend` 

2.  Install the necessary dependencies:
``` bash
npm install` 
```
#### Frontend

1.  Navigate to the frontend directory:

```bash
`cd frontend` 
```
2.  Install the necessary dependencies:

```bash
npm install` 
```
### 3. Environment Variables

Create a `.env` file in both the backend and frontend directories, and add the necessary environment variables.

For backend:

- makefile
- 
```json
PORT=5000
DB_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret` 
```
For frontend:
```bash
REACT_APP_API_URL=http://localhost:5000` 
```
### 4. Run the Application

#### Backend

Start the backend server:

```bash
npm run dev` 
```
#### Frontend

```bash
npm start
```
The app should now be running at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Usage

-   Open the app in your browser (`http://localhost:3000`).
-   Sign up or log in to get personalized food suggestions.
-   Use the filters to narrow down your food preferences.
-   Rate dishes after trying them to improve recommendations.
-   Save your favorite dishes to your profile.

## Contributing

If you want to contribute to this project, feel free to open issues or submit pull requests. Please ensure that your code follows the existing coding standards and includes relevant tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

-   Food APIs used for suggestions.
-   Tailwind CSS for responsive design.
-   Express.js for the backend API.
