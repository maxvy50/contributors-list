import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/UI/button/Button';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import { useEthers } from '@usedapp/core';
import CreditsContextProvider from './context/CreditsContext';
import Modal from './components/UI/modal/Modal';

const Notification: FC = () => {
  const [isNotified, setIsNotified] = useState(false)
  return (
      <>
          <Modal onShadowClick={() => setIsNotified(true)} visible={!isNotified}>
              <div className='notification'>
                  <h2>Metamask extension</h2>
                  <p>
                      To work with our application, you have to install the <a href='https://metamask.io/download/'>Metamask browser extension</a>
                  </p>
                  <Button onClick={() => setIsNotified(true)}>Skip this step</Button>
              </div>
          </Modal>
      </>
  )
}

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

      <CreditsContextProvider>
        <Router>
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/id/:id'} element={<UserPage />} />
            <Route path={'*'} element={<MainPage />} />
          </Routes>
        </Router>
      </CreditsContextProvider>

      <Notification />
    </>
  );
}

export default App;
