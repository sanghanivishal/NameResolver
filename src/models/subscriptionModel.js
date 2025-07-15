const mongoose = require('mongoose');
const User = require('./userModel');

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    periodStart: {
        type: Date,
        required: true
    },
    periodEnd: {
        type: Date,
        required: true
    },
    validCount: {
        type: Number,
        default: 0
    },
    totalCount: {
        type: Number,
        default: 0
    },
    // Add more fields as needed (e.g., plan, etc.)
}, {
    timestamps: true
});

// Helper to add months to a date
function addMonths(date, months) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
}

// Static method to increment validCount for the current rolling month and totalCount for the user
subscriptionSchema.statics.incrementCounts = async function(userId) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    const now = new Date();
    let createTime = user.create_time || user.createdAt || user.created_at;
    if (!createTime) createTime = user._id.getTimestamp(); // fallback for ObjectId
    let periodStart = new Date(createTime);
    let periodEnd = addMonths(periodStart, 1);
    periodEnd.setDate(periodEnd.getDate() - 1); // end is inclusive
    // Find the current period for the user
    while (now > periodEnd) {
        periodStart = addMonths(periodStart, 1);
        periodEnd = addMonths(periodStart, 1);
        periodEnd.setDate(periodEnd.getDate() - 1);
    }
    // Find or create the doc for this period
    let periodDoc = await this.findOneAndUpdate(
        { userId, periodStart, periodEnd },
        { $inc: { validCount: 1 } },
        { upsert: true, new: true }
    );
    // Update totalCount for all docs for this user
    await this.updateMany(
        { userId },
        { $inc: { totalCount: 1 } }
    );
    return periodDoc;
};

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription; 