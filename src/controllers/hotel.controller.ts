import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

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