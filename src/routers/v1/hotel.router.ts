import express from 'express';
import {  validateRequestBody } from '../../validators';
import { HotelSchema } from '../../validators/hotel.validator';
import { createHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controller';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(HotelSchema), createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);



export default hotelRouter;