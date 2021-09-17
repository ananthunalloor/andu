exports.handler = async function (event, context) {

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { 'Allow': 'POST' }
        }
    }
    const params = event.queryStringParameters
    if (!params.email && !params.message) {
        console.log(params);
        return { statusCode: 422, body: 'All data are required.' }
    }
    return {
        statusCode: 200,
        body: 'message:Message Send.',
    }
}