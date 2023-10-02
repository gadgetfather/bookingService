const bookingService = require("../services/booking-service");

module.exports = {
  //create booking
  createBooking: async (req, res) => {
    try {
      const booking = await bookingService.createBooking(req.body);
      res.status(201).send(booking);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  //find booking by id
  findBookingById: async (req, res) => {
    try {
      const booking = await bookingService.findBookingById(req.params.id);
      res.status(200).send(booking);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
