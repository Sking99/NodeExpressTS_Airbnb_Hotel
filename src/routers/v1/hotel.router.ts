import express from 'express';
import {  validateRequestBody } from '../../validators';
import { HotelSchema } from '../../validators/hotel.validator';
import { createHotelHandler, getHotelByIdHandler, getAllHotelsHandler, updateHotelHandler, softDeleteHotelHandler } from '../../controllers/hotel.controller';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(HotelSchema), createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);
hotelRouter.get('/', getAllHotelsHandler);
hotelRouter.put('/:id', validateRequestBody(HotelSchema), updateHotelHandler);
hotelRouter.delete('/:id', softDeleteHotelHandler);



export default hotelRouter;