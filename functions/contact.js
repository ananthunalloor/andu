const acc_SID = process.env.TW_SID;
const acc_AUTH = process.env.TW_AUTH;
const service_ID = process.env.MSG_SERVID;
const to_NUM = process.env.TO_NUM

exports.handler = async function(event, context) {

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
        var msgBody = JSON.stringify(params);
        console.log(msgBody);
        const client = require ('twilio')(acc_SID, acc_AUTH);
        client.messages 
      .create({ 
         body: JSON.stringify(params),  
         messagingServiceSid: service_ID,      
         to: to_NUM 
       }) 
      .then(message => console.log(message.sid)) 
      .done()
    }
    return {
        statusCode: 200,
        body: 'message:Message Send.',
    }
};
