import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export class BinanceBotStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const func = new lambda.NodejsFunction(this, 'BotFunction', {
      entry: './lambdas/src/bot/index.ts',
      handler: 'lambdaHandler',
      runtime: Runtime.NODEJS_16_X
    })

    const api = new apigateway.LambdaRestApi(this, 'BotApi', {
      handler: func,
      proxy: false
    })

    const binance = api.root.addResource('binance')
    binance.addMethod('GET')

  }
}
