const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
