// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Our first netlify function example',
  };
};
