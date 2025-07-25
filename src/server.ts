import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import sequelize from './db/models/sequelize';
import Hotel from './db/models/hotel';
const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);

    try{
        await sequelize.authenticate();
        logger.info('Database connection has been established successfully.');

        const hotel = await Hotel.create({
            name: 'Sample Hotel',
            address: '123 Sample Street',
            location: 'Sample City',
            rating: 4.5,
            rating_count: 100
        })
        logger.info('Hotel created with details: ', hotel.toJSON());
    }catch (error) {
        logger.error('Something went wrong with DB connectivity');
    }
});
