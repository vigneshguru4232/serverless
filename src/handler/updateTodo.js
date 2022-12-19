const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const updateTodo = async (event) => {
  const dynamodb = AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { completed } = JSON.parse(event.body)


  await dynamodb.update({
      TableName:"TodoTable",
      Key:{ id },
      UpdateExpression:'set completed = :completed',
      ExpressionAttributeValues:{
          ':completed': completed
      },
      ReturnValues: "ALL_NEW"
  }).promise()


  return {
    statusCode: 200,
    body: JSON.stringify({
        message:"Todo Updated"
    }),
  };
};

module.exports = {
  handler: updateTodo,
};
