# Kaboko Agencies Housing Website

## Overview

Kaboko Agencies is a **Single Page Application (SPA)** designed to showcase available houses for sale and rent. Users can explore property listings, search for houses by location, add properties to their favorites list, leave comments, and submit a contact form to reach out to the agency. This project simulates an API using **JSON Server** to provide dynamic property data.

---

## Features

- **Property Listing**: View available properties with details such as location, price (in Kenyan Shillings), and monthly rent.
- **Favorites List**: Add and remove properties from a list of favorites.
- **Search Functionality**: Filter properties by location using a search bar.
- **Contact Form**: Submit messages to the agency.
- **Responsive Design**: The app is mobile-friendly and adapts to various screen sizes.

---

## Technologies Used

- **HTML** for the structure of the webpage.
- **CSS** for styling and layout.
- **JavaScript (ES6)** for handling interactivity and API communication.
- **JSON Server** for simulating an API and serving dynamic property data.
- **Node.js** and **npm** for managing packages and running the local JSON Server.

---

## How to Run the Project Locally

### Prerequisites:
Make sure you have the following installed on your system:
- **Node.js** (which includes npm)
- **json-server** (installed globally via npm)

### Steps to Run Locally:

1. **Clone the Repository**:
   Open your terminal or command prompt and run the following command to clone the project to your local machine:
   ```bash
   git clone <repository-url>
   cd kaboko-agencies
   
2. Install json-server (if not already installed): Install json-server globally on your machine by running:

npm install -g json-server

3. Start the JSON Server: Start the json-server to serve data from the db.json file by running:

json-server --watch db.json --port 3001
This will start a local server at http://localhost:3001/properties.

4. Open the Project in Your Browser: Open the index.html file in your preferred web browser to view and interact with the project.

You can do this by:

Simply double-clicking the index.html file in your project directory, or
Running a local server like Live Server in VSCode or http-server via npm to serve the HTML file.

# How to Stop JSON Server:
To stop the JSON server, press Ctrl + C in the terminal where the server is running.

# Live Demo
You can view the live version of the project here:
Live Demo Link
https://paul50-tech.github.io/kaboko-agencies/

# License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project under the terms of the license.

MIT License Text:

MIT License

Copyright (c) 2024 Paul Jubilee Owuoth

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Contribution
Contributions to this project are welcome! You can contribute by:

Reporting issues.
Suggesting new features or enhancements.
Submitting pull requests with improvements or bug fixes.
Feel free to open issues or submit pull requests through GitHub.
