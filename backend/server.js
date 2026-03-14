const express = require("express");

const app = express();

app.get("/api/projects", (req, res) => {
  res.json([
    {
      title: "Portfolio Website",
      description: "Full stack portfolio project",
      github: "https://github.com/kartik/project"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
