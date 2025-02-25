const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk validasi header
const validateHeaders = (req, res, next) => {
  const userId = req.header("User-id");
  const scope = req.header("Scope");

  if (userId !== "1" || scope !== "user") {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }

  next();
};

// GET API
app.get("/api/data", validateHeaders, (req, res) => {
  res.json({
    responseCode: 200,
    responseMessage: "Success",
    data: {
      id: 1,
      name: "John Doe",
      role: "User",
    },
  });
});

// POST API
app.post("/api/data", validateHeaders, (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      responseCode: 400,
      responseMessage: "Bad Request, name and age are required",
    });
  }

  res.json({
    responseCode: 201,
    responseMessage: "Data created successfully",
    data: {
      name,
      age,
    },
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
