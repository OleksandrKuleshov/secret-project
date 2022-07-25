import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const lambdaHandler = async(event: APIGatewayEvent, context: Context):  Promise<APIGatewayProxyResult> => {

  console.log("Received Get Request")

  const data = event.body

  console.log(`Data:${data}`)

  const response = {
    statusCode: 200,
    body: JSON.stringify(data)
  }
  return response

}