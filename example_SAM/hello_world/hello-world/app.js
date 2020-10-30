// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;


// dependencies
const AWS = require('aws-sdk');
const util = require('util');
const sharp = require('sharp');

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
        var src_bkt = event.Records[0].s3.bucket.name;
        var src_key = event.Records[0].s3.object.key;
        let test = s3.getObject({
        Bucket: src_bkt,
        Key: src_key
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err);
        } else {
            console.log("Raw text:\n" + data.Body.toString('ascii'));
            callback(null, null);
        }
        console.log(test)
        // const ret = await axios(url);
        if (event.httpMethod == 'POST') {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'post endpoint',
                    // location: ret.data.trim()
                })
            }
        }
        if (event.httpMethod == 'GET') {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'get endpoint',
                    // location: ret.data.trim()
                })
            }
        }
        

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
