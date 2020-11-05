import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as iam from '@aws-cdk/aws-iam';


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

    const role = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com')   // required
    });

    role.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.DENY,
      resources: [textBucket.bucketArn],
      actions: ['s3:GetObject'],
      conditions: {StringEquals: {
        'ec2:AuthorizedService': 'codebuild.amazonaws.com'
    }}}));

    textBucket.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      resources: [textApi.functionArn],
      principals: [role]
    }));
    

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: textApi
    });
  }
}
