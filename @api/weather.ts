import type { ApiFunctionsContext } from '@redocly/config';

export default async function (
  _request: Request, 
  context: ApiFunctionsContext
) {
  const geoIpUrl = 'http://ip-api.com/json';
  const userIp = context.headers['x-forwarded-for'];

  const q = context.query.q;
  const weatherApiUrl = 'https://api.weatherapi.com/v1/current.json';
  const weatherApiKey = process.env.WEATHER_API_KEY;

  let city: string;

  if (q) {
    city = q;
  } else {
    const geoIpResponse = await fetch(`${geoIpUrl}/${userIp}`);
    const geoIp = await geoIpResponse.json();

    city = geoIp.city;
  }

  const weatherResponse = await fetch(`${weatherApiUrl}?key=${weatherApiKey}&q=${city}`);

  return weatherResponse.json();
};
