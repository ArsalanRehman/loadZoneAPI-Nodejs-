const mongoose = require('mongoose');

////Position Loader

const loadPosition = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Position must have a Name'],
      unique: [true, 'Name already exists'],
    },
    isOccupied: {
      type: Boolean,
      required: [true, 'Position must have a Name'],
    },
    type: {
      type: String,
      default: 'normal',
      required: [false, ' Optional'],
    },
  },
  { collection: 'loadPosition' }
);
Position = mongoose.model('LoadPosition', loadPosition);
module.exports = Position;
