const { bookingRepository } = require("../repositories");
const axios = require("axios");
const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
module.exports = {
  createBooking: async (booking) => {
    try {
      const { data } = await axios.get(
        `${FLIGHT_SERVICE_PATH}/api/v1/flight/${booking.flightId}`
      );
      booking.totalCost = data.price * booking.noOfSeats;
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
