const { bookingRepository } = require("../repositories");
module.exports = {
  createBooking: async (booking) => {
    try {
      return await bookingRepository.createBooking(booking);
    } catch (error) {
      throw error;
    }
  },
  findBookingById: async (id) => {
    try {
      return await bookingRepository.findBookingById(id);
    } catch (error) {
      throw error;
    }
  },
  findBookingByFlightId: async (flightId) => {
    try {
      return await bookingRepository.findBookingByFlightId(flightId);
    } catch (error) {
      throw error;
    }
  },
  findBookingByUserId: async (userId) => {
    try {
      return await bookingRepository.findBookingByUserId(userId);
    } catch (error) {
      throw error;
    }
  },
  updateBooking: async (id, booking) => {
    try {
      return await bookingRepository.updateBooking(id, booking);
    } catch (error) {
      throw error;
    }
  },
  deleteBooking: async (id) => {
    try {
      return await bookingRepository.deleteBooking(id);
    } catch (error) {
      throw error;
    }
  },
  getAllBookings: async () => {
    try {
      return await bookingRepository.getAllBookings();
    } catch (error) {
      throw error;
    }
  },
};
