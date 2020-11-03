#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { TemplateStack } = require('../lib/template-stack');

const app = new cdk.App();
new TemplateStack(app, 'TemplateStack');
