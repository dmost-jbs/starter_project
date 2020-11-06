let response;
declare var require: any;
declare var exports: any;



// dependencies
const AWS = require('aws-sdk');

// get reference to S3 client
const s3 = new AWS.S3()
exports.handler = async function (event: Object) {
    response = {
        'statusCode': 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST"
        }
    }
    try {
        // handles post requests
        if (event.httpMethod == 'POST') {
            let message = JSON.parse(event.body)['message'] // message gathered from post request
            let params = {
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
            let Bucket = 'serverstack-moststarterprojectc30452a5-vua9yh3hifcs'; // bucket name
            let Key = 'message.txt'; // object name in bucket
            try {
                const data = await s3.getObject({ Bucket, Key }).promise(); // get the object from s3
                response['body'] = JSON.stringify({
                    'message': data.Body.toString('ascii'),
                });
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
