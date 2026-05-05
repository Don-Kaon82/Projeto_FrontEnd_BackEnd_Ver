const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes =  require("./routes/authRoutes");

const app =  express();

app.use(cors());
app.use(express.json());

// arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use("/api", authRoutes);

// rota principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "vies/login.html"));
});

