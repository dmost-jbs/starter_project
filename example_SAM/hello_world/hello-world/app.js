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
    try {
        console.log(event)
        console.log(context)
        var Bucket = 'most-starter';
        var Key = 'test.txt';

        // const ret = await axios(url);
        if (event.httpMethod == 'POST') {
            var params = {
                Body: "test test test string", 
                Bucket: 'most-starter', 
                Key: "test_object.jpg"
               };
               s3.putObject(params, function(err, data) {
                // an error occurred
                 if (err) {
                     console.log(err, err.stack); 
                 }
                // successful response
                 else{
                    console.log(data);   
                 }             
            });
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'post endpoint',
                    // location: ret.data.trim()
                })
            }
        }
        if (event.httpMethod == 'GET') {
            const data = await s3.getObject({ Bucket, Key }).promise();
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: data.Body.toString('ascii'),
                    // location: ret.data.trim()
                })
            }
            return response
        }
    }
    catch (err) {
        console.log(err);
    }
};
