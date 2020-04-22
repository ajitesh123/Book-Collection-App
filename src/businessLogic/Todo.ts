import {TodoItem} from "../models/TodoItem";
import {ToDoAccess} from "../dataLayer/TodoAccess";
import {parseUserId} from "../auth/utils";
import {CreateTodoRequest} from "../requests/CreateTodoRequest";
import {UpdateTodoRequest} from "../requests/UpdateTodoRequest";
import {TodoUpdate} from "../models/TodoUpdate";


const uuidv4 = require('uuid/v4');
const todoAccess = new ToDoAccess();

export async function getTodo(jwtToken: string): Promise<TodoItem[]> {
    const userId = parseUserId(jwtToken);
    return todoAccess.getTodo(userId);
}

export function createTodo(createTodoRequest: CreateTodoRequest, jwtToken: string): Promise<TodoItem> {
    const userId = parseUserId(jwtToken);
    const todoId = uuidv4()
    const BucketName = process.env.S3_BUCKET_NAME

    return todoAccess.createTodo({
        userId: userId,
        todoId: todoId,
        createdAt: new Date().getTime().toString(),
        done: false,
        attachmentUrl: `https://${BucketName}.s3.amazonaws.com/${todoId}`,
        ...createTodoRequest,
    });
}

export function updateTodo(updateTodoRequest: UpdateTodoRequest, todoId: string, jwtToken: string): Promise<TodoUpdate> {
    const userId = parseUserId(jwtToken);
    return todoAccess.updateTodo(updateTodoRequest, todoId, userId);
}

export function deleteTodo(todoId: string, jwtToken: string): Promise<string> {
    const userId = parseUserId(jwtToken);
    return todoAccess.deleteTodo(todoId, userId);
}

export function generateUploadUrl(todoId: string): Promise<string> {
    return todoAccess.generateUploadUrl(todoId);
}