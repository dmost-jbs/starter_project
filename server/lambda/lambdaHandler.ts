// dependencies
import AWS from 'aws-sdk';
interface Event {
    body: string,
    httpMethod: string
}
interface Headers {
    "Access-Control-Allow-Origin": string,
    "Access-Control-Allow-Headers": string,
    "Access-Control-Allow-Methods": string
}
interface Response {
    statusCode: number,
    headers: Headers,
    body: string
}

// get reference to S3 client
const s3 = new AWS.S3()
exports.handler = async function (event: Event) {
    const response : Response = {
        'statusCode': 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST"
        },
        body: ''
    }
    try {
        // handles post requests
        if (event.httpMethod == 'POST') {
            const message = JSON.parse(event.body)['message'] // message gathered from post request
            const params = {
                Body: message, // text to go inside bucket object
                Bucket: 'serverstack-moststarterprojectc30452a5-vua9yh3hifcs', // bucket name
                Key: "message.txt" // object name within bucket
            };
            try {
                const in_data = await s3.putObject(params).promise(); // puts object in bucket
                response['body'] = JSON.stringify({
                    'message': message,
                    'ETag': in_data['ETag'],
                });
                return response;
            }
            catch (err) {
                response['body'] = JSON.stringify({
                    'message': err.toString(),
                });
                return response;
            }
        }
        // handles get requests
        if (event.httpMethod == 'GET') {
            const Bucket = 'serverstack-moststarterprojectc30452a5-vua9yh3hifcs'; // bucket name
            const Key = 'message.txt'; // object name in bucket
            try {
                const data = await s3.getObject({ Bucket, Key }).promise(); // get the object from s3
                if(data.Body == undefined){
                    response['body'] = 'message not found';
                }
                else{
                    response['body'] = JSON.stringify({
                        'message': data.Body.toString('ascii'),
                    });
                }
                return response
            }
            catch (err) {
                response['body'] = JSON.stringify({
                    'message': 'Error reading latest text',
                });
                return response;
            }
        }
        response['body'] = JSON.stringify({
            'message': 'invalid http request method',
        });
        return response;
    }
    catch (err) {
        response['body'] = JSON.stringify({
            'message': err.toString(),
        });
        return response;
    }
    response['body'] = JSON.stringify({
        'message': 'server error',
    });
    return response;
}
