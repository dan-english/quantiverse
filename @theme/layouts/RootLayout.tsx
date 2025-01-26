import React from 'react';

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
