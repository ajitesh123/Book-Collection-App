import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda'
import {UpdateBookRequest} from '../../requests/UpdateBookRequest'
import {updateBook} from "../../businessLogic/Book";
import { createLogger } from '../../utils/logger'

const logger = createLogger('books')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("Processing Event ", event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const bookId = event.pathParameters.todoId;
    const updatedBook: UpdateBookRequest = JSON.parse(event.body);

    const bookEntry = await updateBook(updatedBook, bookId, jwtToken);
    logger.info("Updated book entry with ID: ${bookId}");

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "bookEntry": bookEntry
        }),
    }
};