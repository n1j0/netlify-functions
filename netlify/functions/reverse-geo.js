exports.handler = async function (event, context) {
    const CORS_HEADERS = {
        'Access-Control-Allow-Origin': '*',
    }

    const lookup = require('coordinate_to_country');
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;

    if (!lat || !lon) {
        return {
            headers: CORS_HEADERS,
            statusCode: 400,
            body: JSON.stringify({ error: 'lat and lon are required' }),
        };
    }

    const country = lookup(lat, lon, true)[0];
    return {
        headers: CORS_HEADERS,
        statusCode: 200,
        body: JSON.stringify(country),
    };
}
