import {BookEntry} from "../models/book";
import {BookUpdate} from "../models/bookUpdate";
import {CreateBookRequest} from "../requests/CreateBookRequest";
import {UpdateBookRequest} from "../requests/UpdateBookRequest";
import {BookAccess} from "../dataLayer/BookAccess";
import {parseUserId} from "../auth/utils";

const uuidv4 = require('uuid/v4');
const bookAccess = new BookAccess();

export async function getBooks(jwtToken: string): Promise<BookEntry[]> {
    const userId = parseUserId(jwtToken);
    return bookAccess.getBooks(userId);
}

export function createBook(createBookRequest: CreateBookRequest, jwtToken: string): Promise<BookEntry> {
    const userId = parseUserId(jwtToken);
    const bookId = uuidv4()
    const BucketName = process.env.S3_BUCKET_NAME

    return bookAccess.createBook({
        userId: userId,
        bookId: bookId,
        createdAt: new Date().getTime().toString(),
        read: false,
        attachmentUrl: `https://${BucketName}.s3.amazonaws.com/${bookId}`,
        ...createBookRequest,
    });
}

export function updateBook(updateBookRequest: UpdateBookRequest, bookId: string, jwtToken: string): Promise<BookUpdate> {
    const userId = parseUserId(jwtToken);
    return bookAccess.updateBook(updateBookRequest, bookId, userId);
}

export function deleteBook(bookId: string, jwtToken: string): Promise<string> {
    const userId = parseUserId(jwtToken);
    return bookAccess.deleteBook(bookId, userId);
}

export function generateUploadUrl(bookId: string): Promise<string> {
    return bookAccess.generateUploadUrl(bookId);
}