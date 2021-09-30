exports.handler = async function (event, context) {

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SG_API_KEY)

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
    else if(params.email && params.firstname && params.lastname && params.message) {
        const msg = {
            to: process.env.SG_TO,
            from: process.env.SG_FROM,
            subject: 'New message from ' + params.firstname + ' ' + params.lastname,
            text: params.message,
            html: params.email + ' : ' + '<strong>' + params.message + '</strong>',
        }
        await new Promise((resolve) =>{
            sgMail.send(msg).then(() => {
                console.log('Email sent');
                resolve('done');})
            .catch((error) => {
                console.error(error)
                return {
                    statusCode: 500,
                    body: error,
                    headers: {"Content-type": "application/json",
                    "access-control-allow-origin": 'https://andu.pages.dev'},
                }
            })
        })
            return {
                statusCode: 200,
                body: JSON.stringify({
                    status: 200,
                    message: 'message has been send! Thank you.'},),
                    headers: {"Content-type": "application/json",
                    "access-control-allow-origin": 'https://andu.pages.dev'},
            }
    }
    
    return { 
        statusCode: 500,
        body: JSON.stringify({
            status: 500,
            message: 'sorry. something went worng!'},),
            headers: {"Content-type": "application/json",
            "access-control-allow-origin": 'https://andu.pages.dev'}
    }
};
