exports.handler = async function(event, context) {
    if (event.httpMethod === "POST") {
        let targetUrl = event.headers.referer || '/';
        return {
            statusCode: 301,
            headers: {
                Location: targetUrl
            }
        };
    }
    
    return {
        statusCode: 200,
        body: "OK"
    };
};