import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda';
import {deleteBook} from "../../businessLogic/Book";
import { createLogger } from '../../utils/logger'

const logger = createLogger('books')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("Processing Event ", event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const bookId = event.pathParameters.bookId;

    const deleteData = await deleteBook(bookId, jwtToken);
    logger.info("Deleted book entry with ID: ${bookId}");

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: deleteData,
    }
};