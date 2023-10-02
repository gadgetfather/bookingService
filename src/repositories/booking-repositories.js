const { Booking } = require("../models");

//export booking repository
module.exports = {
  //create booking
  createBooking: async (booking) => {
    try {
      return await Booking.create(booking);
    } catch (error) {
      throw error;
    }
  },

  //find booking by id
  findBookingById: async (id) => {
    try {
      return await Booking.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  //find booking by flight id
  findBookingByFlightId: async (flightId) => {
    try {
      return await Booking.findOne({ where: { flightId } });
    } catch (error) {
      throw error;
    }
  },

  //find booking by user id
  findBookingByUserId: async (userId) => {
    try {
      return await Booking.findOne({ where: { userId } });
    } catch (error) {
      throw error;
    }
  },

  //update booking
  updateBooking: async (id, booking) => {
    try {
      return await Booking.update(booking, { where: { id } });
    } catch (error) {
      throw error;
    }
  },

  //delete booking
  deleteBooking: async (id) => {
    try {
      return await Booking.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  },

  //get all bookings
  getAllBookings: async () => {
    try {
      return await Booking.findAll();
    } catch (error) {
      throw error;
    }
  },
};
