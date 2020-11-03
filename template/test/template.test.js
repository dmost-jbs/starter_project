const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Template = require('../lib/template-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Template.TemplateStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
