// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;


// dependencies
const AWS = require('aws-sdk');

// get reference to S3 client
const s3 = new AWS.S3()

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * test
 */
exports.lambdaHandler = async (event, context) => {
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
                Bucket: 'most-starter', // bucket name
                Key: "message.txt" // object name within bucket
            };
            try {
                const in_data = await s3.putObject(params).promise(); // puts object in bucket
                response['body']= JSON.stringify({
                        'message': message,
                        'ETag': in_data['ETag'],
                });
                return response;
            }
            catch (err) {
                response['body']= JSON.stringify({
                    'message':  err.toString(),
                });
                return response;
            }
        }
        // handles get requests
        if (event.httpMethod == 'GET') {
            let Bucket = 'most-starter'; // bucket name
            let Key = 'message.txt'; // object name in bucket
            try {
                const data = await s3.getObject({ Bucket, Key }).promise(); // get the object from s3
                response['body']= JSON.stringify({
                    'message':  data.Body.toString('ascii'),
                });
                return response
            }
            catch (err) {
                response['body']= JSON.stringify({
                    'message':  'Error reading latest text',
                });
                return response;
            }
        }
    }
    catch (err) {
        response['body']= JSON.stringify({
            'message':  err.toString(),
        });
        return response;
    }
};
