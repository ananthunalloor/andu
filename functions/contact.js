exports.handler = async function(event, context) {

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { 'Allow': 'GET' }
        }
    }
    const params = event.queryStringParameters;
    if (params.email == '' || params.message == '' || params.firstname == '') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 422,
                message: 'all data required!'},),
                headers: {"Content-type": "application/json"},
        }
    }
    else if(params.email && params.firstname && params.lastname && params.message){
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 200,
                message: 'message has been send! Thank you.'},),
                headers: {"Content-type": "application/json"},
        }
    }
    return {
        statusCode: 500,
        body: JSON.stringify({
            status: 500,
            message: 'sorry. something went worng!'},),
            headers: {"Content-type": "application/json"},
    }
};
