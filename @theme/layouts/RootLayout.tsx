import ReactGA from 'react-ga4'
import * as React from 'react';

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

ReactGA.initialize('G-Y95BGFEPNM')
ReactGA.send("pageview")

ReactGA.event({
category: "My API Category",
action: "User clicked on something",
label: "The label of what they clicked",
value: 98,
nonInteraction: true
})

