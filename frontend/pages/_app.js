import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import './walkthrough.css'

import TagManager from 'react-gtm-module'
function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: 'GTM-K6FCPNV'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
