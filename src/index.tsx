import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import App from './App';
import { Config, DAppProvider, Goerli, Mainnet } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const paragraphPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
        <App />
    </DAppProvider>
  </React.StrictMode>
);
