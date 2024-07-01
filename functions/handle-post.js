exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { someField } = JSON.parse(event.body);

  if (!someField) {
    return {
      statusCode: 400,
      body: 'Bad Request, missing form data',
    };
  }

  // Traitez les données du formulaire ici

  return {
    statusCode: 200,
    body: 'Form submitted successfully',
  };
};