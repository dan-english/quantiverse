import * as React from 'react';
import type { PageStaticData } from '@redocly/config';

export default function (props: PageStaticData) {
  const { weather } = props.pageProps;
  return (
    <>
      <h1>Our weather</h1>
      <ul>
      <li>Our location: {weather.location.name}</li>
      <li>Our temperature: {weather.current.temp_c} C</li>
      <li>Our temperature: {weather.current.temp_f} F</li>
      <li>
      Don't forget your umbrella when you are in Lviv! 
      <img src={weather.current.condition.icon} /> </li>
      </ul>
    </>
  );
}