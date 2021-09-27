exports.handler = async function(event, context) {

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SG_API_KEY)
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { 'Allow': 'POST' }
        }
    }
    const params = JSON.parse(event.body)

    if (!params.email && !params.message) {
        return { statusCode: 422, body: 'All data are required.' }
    }
    else{
        console.log(params.email);
        const msg = {
            to: process.env.SG_TO,
            from: process.env.SG_FROM,
            subject: 'New message from '+ params.firstname +' '+params.lastname,
            text: params.message,
            html: params.email + ' : '+'<strong>'+params.message+'</strong>',
          }
          sgMail.send(msg).then(() => {console.log('Email sent')}).catch((error) => {console.error(error)})
    }
    return {
        statusCode: 200,
        body: 'message:Message Send.',
    }
};
