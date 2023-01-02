import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/UI/button/Button';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import { useEthers } from '@usedapp/core';
import GlobalContextProvider from './context/GlobalContext';

function App() {

  const { activateBrowserWallet, deactivate, account } = useEthers()

  const connectMetamask = () => {
    activateBrowserWallet()
  }

  useEffect(() => { //чтобы отключиться от кошелька при unmount
    return () => {
      deactivate()
    }
  }, [])

  return (
    <>
      <div className={'header'}>
        <img className={'logo'} src="URL" alt="logo"></img>
        {!account
          ? <Button onClick={connectMetamask}>Connect Metamask</Button>
          : <strong>{account}</strong>
        }
      </div>
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/id/:id'} element={<UserPage />} />
            <Route path={'*'} element={<MainPage />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </>
  );
}

export default App;
