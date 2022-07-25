#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BinanceBotStack } from '../lib/binance-bot-stack';

const app = new cdk.App();
new BinanceBotStack(app, 'BinanceBotStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});