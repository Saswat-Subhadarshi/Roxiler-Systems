const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const ProductTransaction=require('./models/ProductTransaction');
// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/transactionDB')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));


// Endpoint to initialize the database with seed data
app.post('/api/initialize', async (req, res) => {
    try {
        // Fetch data from third-party API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;

        // Clear existing data and insert new data
        await ProductTransaction.deleteMany({});
        await ProductTransaction.insertMany(data);
        res.status(200).send({ message: "Database initialized successfully!" });
    } catch (error) {
        console.error("Failed to initialize database", error);
        res.status(500).send({ message: "Failed to initialize database", error });
    }
});

app.get('/api/transaction',async(req,res)=>{
  try {
     res.send(200);
  } catch (error) {
    throw error;
  }
})

// Define the server port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
