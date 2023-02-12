exports.handler = async function (event, context) {
    const lookup = require('coordinate_to_country');
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;

    if (!lat || !lon) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'lat and lon are required' }),
        };
    }

    const country = lookup(lat, lon, true)[0];
    return {
        statusCode: 200,
        body: JSON.stringify(country),
    };
}
