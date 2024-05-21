---
title: Untitled

---

To create a simple Express app, you can follow these steps:

Step 1: Set up a new project folder
Create a new folder for your project and navigate into it using your terminal.

Step 2: Initialize npm\nRun the following command to initialize a new npm project. It will create a `package.json` file for your project and allow you to manage dependencies.\n```\nnpm init -y\n```\n\nStep 3: Install Express\nInstall the Express package by running the following command:\n```\nnpm install express\n```\n\nStep 4: Create an entry point file\nCreate a file named `index.js` (or any other preferred name) in the project folder. This will be the entry point of your Express app.\n\nStep 5: Set up a basic Express server\nOpen the `index.js` file and add the following code:\n```javascript\nconst express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(port, () => {\n  console.log(`Server running on port ${port}`);\n});\n```\nThis code imports the Express module, creates an Express instance, sets up a basic route at the root URL (\"/\"), and starts the server listening on port 3000.\n\nStep 6: Start the server\nIn the terminal, run the following command to start the Express server:\n```\nnode index.js\n```\n\nStep 7: Test the app\nOpen your web browser and visit `http://localhost:3000`. You should see the message \"Hello, World!\" displayed.\n\nCongratulations! You have now created a simple Express app. You can continue building on this foundation by adding more routes, middleware, and functionality to suit your needs.