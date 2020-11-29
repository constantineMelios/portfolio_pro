/* eslint-disable react/prop-types */
import React from 'react';
import { Footer, Header } from '../components';
import { LayoutStyle } from '../styles';

export default function Layout({ children, location }) {
  return (
    <>
      <Header location={location} />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
}
