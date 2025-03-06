import type { PageStaticData, ServerPropsRequest } from '@redocly/config';

export default async function getServerProps(data: PageStaticData, req: ServerPropsRequest) {
  const key = process.env.WEATHER_API_KEY;
  const ip = req.headers['x-forwarded-for'];
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${ip}`);
  const result = await response.json();
  console.log(JSON.stringify(result))
  return {
    weather: result,
    ...data.props,
  }
}