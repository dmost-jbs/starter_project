// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

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
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        console.log(event)
        console.log(context)
        // const ret = await axios(url);
        if(event.path=='/api/'){
            if(event.httpMethod=='POST'){
                response = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: 'post endpoint',
                        // location: ret.data.trim()
                    })
                }
            }
            if(event.httpMethod=='GET'){
                response = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: 'get endpoint',
                        // location: ret.data.trim()
                    })
                }
            }
        }
        else{
                            response = {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        message: 'invalid directory',
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
