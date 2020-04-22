import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda'
import {CreateTodoRequest} from '../../requests/CreateTodoRequest';
import {createTodo} from "../../businessLogic/Todo";
import { createLogger } from '../../utils/logger'

const logger = createLogger('todos')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO: Implement creating a new TODO item
    console.log("Processing Event ", event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const newTodo: CreateTodoRequest = JSON.parse(event.body);
    const todoItem = await createTodo(newTodo, jwtToken);
    todoItem["attachmentUrl?"] = "https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"
    logger.info("Created todo elements ${todoItem}");

    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            "item": todoItem
        }),
    }
};