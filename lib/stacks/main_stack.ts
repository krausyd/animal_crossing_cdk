import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PREFIX } from '../constants';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AnimalCrossingCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      // The code that defines your stack goes here
  
      // example resource
      // const queue = new sqs.Queue(this, 'AnimalCrossingCdkQueue', {
      //   visibilityTimeout: cdk.Duration.seconds(300)
      // });
    }
  }