const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    location: { type: String },
    description: { type: String },
    url: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('JobListing', jobListingSchema);
