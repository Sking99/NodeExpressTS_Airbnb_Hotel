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

export async function getAllHotels() {
  const hotels = await Hotel.findAll({
    where: {
      deletedAt: null
    },
  });
  if (!hotels || hotels.length === 0) {
    throw new NotFoundError("No hotels found");
  }
  return hotels;
}

export async function updateHotel(id: number, hotelData: CreateHotelDTO) {
  const hotel = await getHotelById(id);
  if (!hotel) {
    throw new NotFoundError("Hotel not found for update");
  }
  
  const updatedHotel = await hotel.update({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    rating_count: hotelData.rating_count
  });

  return updatedHotel;
}

export async function deleteHotel(id: number) {
  const hotel = await getHotelById(id);
  if (!hotel) {
    throw new NotFoundError("Hotel not found for deletion");
  }
  
  await hotel.destroy();
}

export async function softDeleteHotel(id: number){
  const hotel = await getHotelById(id);
  if (!hotel) {
    throw new NotFoundError("Hotel not found for soft deletion");
  }
  
  hotel.deletedAt = new Date();
  await hotel.save();
  logger.info(`Hotel with id: ${id} has been soft deleted`);
  return hotel;
}