exports.handler = async function(event, context) {
    if (event.httpMethod === "POST") {
        return {
            statusCode: 301,
            headers: {
                Location: "/"
            }
        };
    }
    
    return {
        statusCode: 200,
        body: "OK"
    };
};