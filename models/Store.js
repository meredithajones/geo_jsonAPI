const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String, 
        required: [true, 'Please add a store ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Store ID must be less than 10 chars']
    },

    address: {
        type: String,
        required: [true, 'Please enter an address']
    },
    //Boilerplate from mongoose docs
    location: {
        type: {
          type: String, 
          enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: String
      },
      createdAt: {
          type: Date,
          default: Date.now
      }
});

//Geocode & create location
StoreSchema.pre('save', async function(next) {
    const locate = await geocoder.geocode(this.address)
    console.log(locate);
});

module.exports = mongoose.model('Store', StoreSchema);