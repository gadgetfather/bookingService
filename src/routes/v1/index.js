const express = require("express");
const router = express.Router();

const bookingController = require("../../controllers/booking-controller");

//create booking
router.post("/book", bookingController.createBooking);

module.exports = router;
