import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DAppProvider, Mainnet } from '@usedapp/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    //[Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
