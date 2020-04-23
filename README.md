# Book Collection App
A simple app to maintain record of book collection. It's built using serverless framework on AWS. 

Key features of the app include:
- Maintain record of books read and books to be read in future 
- Add a short of summary of books already read 
- Add a picture of book or its summary  

## Tech Stack
- AWS Lambda
- S3 Bucket
- AWS API Gateway
- DynamoDB
- Serverless Framework

## Get Started
- Install serverless
- Install AWS sdk 
- Install AWS-Lamda sdk

Then run following commands: 

```
$ npm install 
$ serverless deploy -v
```
## Rate limit
There isn't a limit to the number of requests an user can send.

## Register to get adequate for permissions
- domain: 'fsdn2.auth0.com'
- clientId: 'nygi6XG3sI6rsomJaKFHFm3DmMoI0Bzy'
- callbackUrl: 'http://localhost:3000/callback'


## API Endpoints

Here is link to POSTAMN API Documentation - https://documenter.getpostman.com/view/8444799/Szf9X7pA?version=latest

### GET Get all book entry
Endpoint: https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/books


Fectches the list of books with summary and associated images.

```
HEADERS
AuthorizationBearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg

Example Request
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos',
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
```

Example Response
```
200 － OK
{
  "items": [
    {
      "todoId": "7dca9117-8011-415e-88a2-8a475da1093c",
      "attachmentUrl": "https://serverless-todos-abcde-dev.s3.amazonaws.com/7dca9117-8011-415e-88a2-8a475da1093c",
      "userId": "auth0|5e9b1f9b63f8000c8c20256c",
      "dueDate": "2020-04-26",
      "createdAt": "1587349209131",
      "name": "acha",
      "done": false
    },
    {
      "todoId": "c91cba42-84be-4474-a1d8-24e468c00fa6",
      "attachmentUrl": "https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg",
      "userId": "auth0|5e9b1f9b63f8000c8c20256c",
```

### POST Create book entry
Endpoint: https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos

Creates a book entry. Default assumes that you haven't read the book.

```
HEADERS
Content-Typeapplication/json
AuthorizationBearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg
BODY raw
{
	"name": "Water flowers",
	"dueDate": "2019-06-11",
	"attachmentUrl?":"https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"
}


Example Request
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg'
  },
  body: JSON.stringify({"name":"Water flowers","dueDate":"2019-06-11","attachmentUrl?":"https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
```

Example Response
```
201 － Created
{
  "item": {
    "userId": "auth0|5e9b1f9b63f8000c8c20256c",
    "todoId": "6b590ef4-9698-461a-a1d9-d6508ba86b5b",
    "createdAt": "1587356364746",
    "done": false,
    "attachmentUrl": "https://serverless-todos-abcde-dev.s3.amazonaws.com/6b590ef4-9698-461a-a1d9-d6508ba86b5b",
    "name": "Water flowers",
    "dueDate": "2019-06-11",
    "attachmentUrl?": "https://i.pinimg.com/564x/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg"
  }
}
```

### PUT Update book
Endpoint: https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/35dd600f-43c2-4649-903c-615e1586a26f

Updates when you have read the book or when you want to edit the name or summary of the book.

```
HEADERS
Content-Typeapplication/json
AuthorizationBearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg
BODY raw
{
	"name": "Change the world",
	"dueDate": "2019-12-11",
	"done": true
}


Example Request
var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/7dca9117-8011-415e-88a2-8a475da1093c',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg'
  },
  body: JSON.stringify({"name":"Change the world","dueDate":"2019-12-11","done":true})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
```

### DEL Delete book
Endpoint: https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/fe671583-4512-45f6-9475-4265c04362fb

Deletes the book entry for a given book ID.

```
HEADERS
Content-Typeapplication/json
AuthorizationBearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg

Example Request
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/7dca9117-8011-415e-88a2-8a475da1093c',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
```

### POST Get attachment URL
Endpoint: https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/3836b777-9bc4-4429-9b79-ba4e4f5f91c0/attachment

Fetches S3 signed URL for a given book ID.

```
HEADERS
AuthorizationBearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg

Example Request
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://4763u8ams1.execute-api.us-east-1.amazonaws.com/dev/todos/3836b777-9bc4-4429-9b79-ba4e4f5f91c0/attachment',
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1VUTRSRGt6TXpReFJESTROVVUyTXpJd1FrTXhOVU00UXprelJUTXdPVEEzT1VVeE1EUXpNUSJ9.eyJpc3MiOiJodHRwczovL2ZzZG4yLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZTliMWZkNjQ5ZmIyNDBjOGEyMjViMTUiLCJhdWQiOiJueWdpNlhHM3NJNnJzb21KYUtGSEZtM0RtTW9JMEJ6eSIsImlhdCI6MTU4NzMwMTI3NSwiZXhwIjoxNTg3NzMzMjc1LCJhdF9oYXNoIjoiNmtERE1NOWJKeXZwUl80QkVLYkthUSIsIm5vbmNlIjoiZFNSQjBnM2xpODZOMjNucFlIeDNTZ05DSnV5RncxYmEifQ.A66DodxSgWW2oL2nUS9EdTf730VCagMavVWRclNAv3ETKmBFhFSq6e6klmUetxU0IlVVCmCFqmV7wAc95fNvUHA1tLQMNuq6FzcNzmYh0x6Y8BU8VSCQpwBinvAewMwydYBy9yTOjKUXg86GTC3wtB-i_-757O3jTUROMEUFQgfQSrE5IqAqhxs0dFmn9i-BUhPER2Rg8AUh6SD68IPIkH1KigrjkaQrSl5R-e_rggEhJCPd5qWFL4ReAQbEbh4Fp-ddLQQUEfITuN5JTIA_jKvEfDr8cTPQUmEDoD_s5-9SSkZhUjZlFNoZeX15A0zBcYoNQ9C_MWA5yfmyFTQImg'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
```

Example Response
```
200 － OK
{
  "uploadUrl": "https://serverless-todos-abcd-dev.s3.amazonaws.com/3836b777-9bc4-4429-9b79-ba4e4f5f91c0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA6PK5T7LSBHJ6RUYS%2F20200419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200419T225328Z&X-Amz-Expires=1000&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGDA%2BL9HP7gyrhvGIH4M84tnJai7J2cVxYhRYzlxXW1ZAiAn9IS5zr%2FgkuX2mkoYlQl6fJKBXnpe%2BoymKDPHY8QQ4CrxAQj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDk5NTAxODE0NDQ4NCIM%2B%2BykDJdV7YNhwi9QKsUBIRt6bcFwrdUJRGlgeDroNxuEgWJ%2Fu2JRbOG338M0IINQeVCoVZTMvNtjJdoNQOWOWlAj8WaXHCkxh7Ksyj3F1XFlhzXqKKK5GIzYgr54qMNqb3Ko3IEYmWrLX1nzwMyCKa0DnAlusfj83pLHm3kmY9p27wbWlYYclPCPamXHb9d%2B1LhjuYDCeD50Hl7uPmC%2By%2FtSL%2FUy1MTFPyUXP0lO2b1FoSzYiY5lRONSZ6WO3h4ca6gMTo8iex632r2zuQNlebMJXvQwr6nz9AU64QEOP6NJBqzQy17%2BeXzpBWMyqr0Fjse4tDt8dFzz1uFaBQj8tTGmy%2FBcmdnvJhQSEMrd0Lif28BRNvHC8xFE70MUfT8WSZadOfVP5%2FlUST0f519PusWDpNiPJW2HypTFWPcyDNk5J4tXyEOecwZlgNB%2BJUOt%2F9o0%2BFy2gHlSgP4zhMT8Yv95N4qCvr2St1UF5qNSvn9HTDWXhz%2Fv6%2FXhx6W7rP18B1cgRlzayG3DQ60IprCb0vvfIj3WvUMcOTGEce6Vw1R7OsU9nmyGZkavodqZZzqtLnGDfwNbnygP54HQWlc%3D&X-Amz-Signature=f28fae8115ecca36cf02c8dfece9608db933928dcc82daac0cdc0355c5f0b910&X-Amz-SignedHeaders=host"
}
```