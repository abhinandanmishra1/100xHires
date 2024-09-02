const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    job_listing_id: { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing', required: true },
    application_status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], default: 'Applied' },
    cover_letter: { type: String },
    submitted_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', applicationSchema);
