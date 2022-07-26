import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs'

export class WebHookStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const messageQueue = new sqs.Queue(this, 'TVQueue', {
      visibilityTimeout: Duration.seconds(300)
    })
    
  }
}
