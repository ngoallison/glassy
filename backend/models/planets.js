const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
    },
    orderFromSun: {
        type: Number,
    },
    hasRings: {
        type: Boolean,
    },
    mainAtmosphere: {
        type: [String], // Assuming it's an array of strings; adjust as needed
        default: []      // Default value is an empty array
    },
    surfaceTemperatureC: {
        type: {
            min: Number,    // Example: Minimum temperature
            max: Number     // Example: Maximum temperature
        },
    }
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;
