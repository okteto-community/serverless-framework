'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless! Go Okteto!',
        input: event,
      },
      null,
      2
    ),
  };
};