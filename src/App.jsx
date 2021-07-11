import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Router from './router';

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
