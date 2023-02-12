exports.handler = async function (event, context) {
    const lookup = require('coordinate_to_country')
    const { lat, lon } = event.queryStringParameters

    if (!lat || !lon) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'lat and lon are required' }),
        }
    }

    const country = lookup(fp.latitude, fp.longitude, true)[0]
    return {
        statusCode: 200,
        body: JSON.stringify(country),
    }
}
