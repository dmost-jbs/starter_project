const core = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');


class TemplateStack extends core.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'MostStarterProject', {
      versioned: true
    });
  }
}

module.exports = { TemplateStack }
