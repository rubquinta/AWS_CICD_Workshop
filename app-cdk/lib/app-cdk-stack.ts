import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import { Stack, StackProps, Duration } from 'aws-cdk-lib';

import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AppCdkStack extends cdk.Stack {

  public readonly repository: ecr.Repository;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    this.repository = new ecr.Repository(this, 'my_app');

  }
}
