import * as AWS from "aws-sdk";
import * as AWSXRay from 'aws-xray-sdk'
import {DocumentClient} from "aws-sdk/clients/dynamodb";
import {Types} from 'aws-sdk/clients/s3';
import {BookEntry} from "../models/book";
import {BookUpdate} from "../models/bookUpdate";

const XAWS = AWSXRay.captureAWS(AWS)

export class BookAccess {
    constructor(
        private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private readonly s3Client: Types = new XAWS.S3({signatureVersion: 'v4'}),
        private readonly booksTable = process.env.BOOKS_TABLE,
        private readonly BucketName = process.env.S3_BUCKET_NAME) {
    }

    async getBooks(userId: string): Promise<BookEntry[]> {
        console.log("Getting list of books");

        const params = {
            TableName: this.booksTable,
            KeyConditionExpression: "#userId = :userId",
            ExpressionAttributeNames: {
                "#userId": "userId"
            },
            ExpressionAttributeValues: {
                ":userId": userId
            }
        };

        const result = await this.docClient.query(params).promise();
        console.log(result);
        const items = result.Items;

        return items as BookEntry[]
    }

    async createBook(bookEntry: BookEntry): Promise<BookEntry> {
        console.log("Creating book entry");

        const params = {
            TableName: this.booksTable,
            Item: bookEntry,
        };

        const result = await this.docClient.put(params).promise();
        console.log(result);

        return bookEntry as BookEntry;
    }

    async updateBook(bookUpdate: BookUpdate, bookId: string, userId: string): Promise<BookUpdate> {
        console.log("Updating Book Entry");

        const params = {
            TableName: this.booksTable,
            Key: {
                "userId": userId,
                "bookId": bookId
            },
            UpdateExpression: "set #x = :x, #y = :y, #z = :z",
            ExpressionAttributeNames: {
                "#x": "name",
                "#y": "summary",
                "#z": "read"
            },
            ExpressionAttributeValues: {
                ":x": bookUpdate['name'],
                ":y": bookUpdate['summary'],
                ":z": bookUpdate['read']
            },
            ReturnValues: "ALL_NEW"
        };

        const result = await this.docClient.update(params).promise();
        console.log(result);
        const attributes = result.Attributes;

        return attributes as BookUpdate;
    }

    async deleteBook(bookId: string, userId: string): Promise<string> {
        console.log("Deleting book entry");

        const params = {
            TableName: this.booksTable,
            Key: {
                "userId": userId,
                "bookId": bookId
            },
        };

        const result = await this.docClient.delete(params).promise();
        console.log(result);

        return "" as string;
    }

    async generateUploadUrl(bookId: string): Promise<string> {
        console.log("Generating upload url");

        const url = this.s3Client.getSignedUrl('putObject', {
            Bucket: this.BucketName,
            Key: bookId,
            Expires: 1000,
        });
        console.log(url);

        return url as string;
    }
}