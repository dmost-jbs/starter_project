#!/usr/bin/env node
const core = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const { TemplateStack } = require('../lib/template-stack');

const app = new cdk.App();
new TemplateStack(app, 'TemplateStack');

//init api


//init s3


class HelloCdkStack extends core.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    
    new s3.Bucket(this, 'most_learning_project', {
      versioned: true
    });
  }
}

module.exports = { HelloCdkStack }

//init lambda

//settings lambda->s3



