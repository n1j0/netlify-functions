exports.handler = async function (event, context) {
    const CORS_HEADERS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    }

    const lookup = require('coordinate_to_country')
    const body = JSON.parse(event.body)

    let countries = []

    body.forEach(item => {
        countries.push(lookup(item.lat, item.lon, true)[0])
    })

    return {
        headers: CORS_HEADERS,
        statusCode: 200,
        body: JSON.stringify(countries),
    }
}
