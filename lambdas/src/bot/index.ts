import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import axios from 'axios'

export const lambdaHandler = async(event: APIGatewayEvent, context: Context):  Promise<APIGatewayProxyResult> => {

    const testExchangeInfoUrl = 'https://testnet.binance.vision/api/v3/ticker/price'

  console.log("Received Get Request")

  const binanceResponse = await axios.get(testExchangeInfoUrl)

  console.log(binanceResponse)
  const response = {
    statusCode: 200,
    body: JSON.stringify(binanceResponse.data)
  }
  return response

}