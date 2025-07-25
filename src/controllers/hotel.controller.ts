import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService, updateHotelService, deleteHotelService } from "../services/hotel.service";

export async function createHotelHandler (req: Request, res: Response, next: NextFunction) {
   const hotelResponse = await createHotelService(req.body);
   res.status(201).json({
       message: "Hotel created successfully",
       data: hotelResponse,
       successs: true
   }); 
}
export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    const hotelResponse = await getHotelByIdService(Number(req.params.id));
    res.status(200).json({
        message: "Hotel retrieved successfully",
        data: hotelResponse,
        success: true
    });
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
    const hotelsResponse = await getAllHotelsService();
    res.status(200).json({
        message: "Hotels retrieved successfully",
        data: hotelsResponse,
        length: hotelsResponse.length,
        success: true
    });
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
    const hotelResponse = await updateHotelService(Number(req.params.id), req.body);
    res.status(200).json({
        message: "Hotel updated successfully",
        data: hotelResponse,
        success: true
    });
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
    const response = await deleteHotelService(Number(req.params.id));
    res.status(200).json({
        message: response.message,
        success: true
    });
}   