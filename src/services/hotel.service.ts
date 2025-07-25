import Hotel from "../db/models/hotel";
import { CreateHotelDTO } from "../dto/hotel.dto";
import { createHotel } from "../repository/hotel.repository";

export async function createHotelService(hotelData: CreateHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel; 
}

export async function getHotelByIdService(id: number) {
    const hotel = await Hotel.findByPk(id);
    return hotel;
}