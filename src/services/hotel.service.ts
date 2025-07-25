import { CreateHotelDTO } from "../dto/hotel.dto";
import { createHotel, getHotelById, getAllHotels, updateHotel, deleteHotel } from "../repository/hotel.repository";

export async function createHotelService(hotelData: CreateHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel; 
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}

export async function updateHotelService(id: number, hotelData: CreateHotelDTO) {
    const updatedHotel = await updateHotel(id, hotelData);
    return updatedHotel;
}

export async function deleteHotelService(id: number) {
    await deleteHotel(id);
    return { message: "Hotel deleted successfully" };
}