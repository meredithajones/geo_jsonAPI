const Store = require('../models/Store');

//Get all stores
//Get /api/v1/stores
//access Public

exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(200).json({
            success: true, 
            count: stores.length, 
            data: stores
        });
    } catch (err) {
        res.status(500).json({ error: 'Server Error'});
    }
};