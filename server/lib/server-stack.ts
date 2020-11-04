import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3'
import * as apigw from '@aws-cdk/aws-apigateway';

export class ServerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const textApi = new lambda.Function(this,'TextApiHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'textApi.handler'
    })

    const textBucket = new s3.Bucket(this, 'MostStarterProject', {
      versioned: true
    });
    textBucket.grantRead(textApi);

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: textApi
    });
  }
}
