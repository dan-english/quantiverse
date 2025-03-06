import type { ApiFunctionsRequest, ApiFunctionsResponse, ApiFunctionsContext } from '@redocly/config';

export default async function (request: ApiFunctionsRequest, response: ApiFunctionsResponse, context: ApiFunctionsContext) {
  const key = process.env.WEATHER_API_KEY;
  try {
    const ip = request.headers['x-forwarded-for'];

    if(!key) {
      return response.status(500).json({ error: 'Key not provided' });
    }

    if(!ip) {
      return response.status(500).json({ error: 'IP not provided' });
    }

    const resp = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${ip}`
    );

    if (!resp.ok) {
      response.status(500).json({ message: 'Weather error!' });
    }
    const data = await resp.json();
    console.log(data)
    return response.status(200).json({
      message: 'Weather was received!', weather: {
        location: data.location.name,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        icon: data.current.condition.icon
      }
    });
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' });
  }
};