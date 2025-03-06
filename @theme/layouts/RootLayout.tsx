import React from 'react';
import  ReactGA from 'react-ga4'


import { Navbar } from '@redocly/theme/components/Navbar/Navbar';
import { Footer } from '@redocly/theme/components/Footer/Footer';


export type LayoutConfig = {
  children: React.ReactNode;
};

export function RootLayout({ children }: LayoutConfig): JSX.Element {
  return (
    <div data-component-name="layouts/RootLayout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}


const TRACKING_ID = 'G-Y95BGFEPNM'
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview")

ReactGA.event({
category: "My API Category",
action: "User clicked on something",
label: "The label of what they clicked",
value: 98,
nonInteraction: true
})