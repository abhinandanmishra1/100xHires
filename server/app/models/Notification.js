const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    application_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' },
    message: { type: String, required: true },
    is_read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', notificationSchema);
