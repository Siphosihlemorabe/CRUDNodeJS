import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from './routes/product.routes.js'

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

//use api/products
app.use("/api/products",productRoutes)

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define routes OUTSIDE the `.catch()`



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
