import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { CreateHotelDTO } from "../dto/hotel.dto";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: CreateHotelDTO){
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    rating_count: hotelData.rating_count
  });
  if (!hotel) {
    throw new BadRequestError("Hotel creation failed");
  }
  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) {
    throw new NotFoundError("Hotel not found");
  }
  logger.info(`Hotel found with id: ${id}`);
  return hotel;
}