import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda'
import {CreateBookRequest} from '../../requests/CreateBookRequest';
import {createBook} from "../../businessLogic/Book";
import { createLogger } from '../../utils/logger'

const logger = createLogger('books')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("Processing Event ", event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const newBook: CreateBookRequest = JSON.parse(event.body);
    const bookEntry = await createBook(newBook, jwtToken);
    bookEntry["attachmentUrl?"] = "https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"
    logger.info("Created book entry ${bookEntry}");

    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            "bookEntry": bookEntry
        }),
    }
};