
const mongoose = require('mongoose');

// Define the schema for ProductTransaction
const ProductTransactionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    dateOfSale: { type: Date, required: true },
    isSold: { type: Boolean, required: true }
});

// Export the model
module.exports = mongoose.model('ProductTransaction', ProductTransactionSchema);
