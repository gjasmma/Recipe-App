Recipe Sharer App by GJA-SMMA
Description
The Recipe Sharer App allows users to share, discover, and save their favorite recipes. Whether you're a beginner cook or a professional chef, this app provides a platform to post your recipes, add ingredients, instructions, and even upload images. Users can explore recipes from others, rate them, and organize them into categories like "Breakfast," "Dinner," "Desserts," and more.

Key Features:
Create and Share Recipes: Users can post their own recipes with ingredients, cooking steps, and images.

Recipe Categories: Organize recipes by categories like breakfast, lunch, dinner, etc.

Recipe Search: Search for recipes by ingredients, name, or category.

User Authentication: Secure login and registration with JWT-based authentication.

Rate and Review: Users can rate and leave reviews on recipes shared by others.

Save Favorite Recipes: Mark recipes as favorites for quick access.

Tech Stack
Frontend: HTML, CSS, JavaScript (for the frontend logic and dynamic behavior)

Backend: Python (Flask/Django) or Node.js (Express)

Database: MongoDB or PostgreSQL

Authentication: JSON Web Tokens (JWT) for secure login

Image Upload: Cloud storage service (like Cloudinary or local server)

Libraries/Tools:

Flask/Django: Backend framework for API routing and logic.

SQLAlchemy/Django ORM: For database management and models.

JWT: For managing user authentication.

Bootstrap (optional): For frontend styling.

Jinja2 (optional): For dynamic HTML rendering.

Installation

# On Windows
python -m venv venv
.\venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
3. Install Required Dependencies
Install all necessary dependencies using pip:

bash
Copy
Edit
pip install -r requirements.txt
4. Set Up Environment Variables
Create a .env file in the root directory with your environment variables:

bash
Copy
Edit
FLASK_APP=app.py
FLASK_ENV=development
DATABASE_URL=postgresql://user:password@localhost/recipe_sharer_db  # Example for PostgreSQL
SECRET_KEY=your-secret-key  # For Flask session management
JWT_SECRET_KEY=your-jwt-secret-key  # For JWT Authentication
CLOUDINARY_URL=your-cloudinary-url  # If you're using Cloudinary for image storage
5. Initialize the Database
For Flask projects, run the following to initialize the database:

bash
Copy
Edit
python create_db.py  # Or use a migration tool if you're using Django
6. Run the Application
To run the Flask app locally:

bash
Copy
Edit
flask run
For Django users, use:

bash
Copy
Edit
python manage.py runserver
Usage
Once the app is running, visit it in your browser (http://localhost:5000 for Flask). You can:

Sign Up/Log In to the app with JWT-based authentication.

Create a new recipe by adding ingredients, instructions, and an optional image.

Search for recipes by keyword, ingredient, or category.

View, Rate, and Review recipes shared by others.

Save favorite recipes for easy access.

MIT License

Copyright (c) 2026 GJA-SMMA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
