const express = require('express');
const router = express.Router();

const Pizza = require('../modals/pizzamodal');

router.get('/getpizzas', async (req, res) => { // Updated route path to '/getpizzas'
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
