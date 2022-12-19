const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const fetchTodo = async (event) => {
  const dynamodb = AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  let todo;

  try {
    const result = await dynamodb
      .get({ TableName: "TodoTable", id: { id } })
      .promise();
    todos = result.Item;
  } catch (error) {
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler: fetchTodo,
};
