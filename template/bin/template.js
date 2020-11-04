#!/usr/bin/env node

const core = require('@aws-cdk/core');
const { TemplateStack } = require('../lib/template-stack');

const app = new core.App();
new TemplateStack(app, 'TemplateStack');
