import React, { FC } from 'react'
import Banner from '../components/banner/Banner';
import UserList from '../components/userList/UserList';
import Stats from '../components/stats/Stats';
import UserForm from '../components/userForm/UserForm';
import '../assets/styles/mainPage.css'
import Modal from '../components/UI/modal/Modal';
import CreditsContextProvider, { useCreditsContext } from '../context/CreditsContext';
import Button from '../components/UI/button/Button';
import '../assets/styles/animation/animation.css'
import { useGlobalContext } from '../context/GlobalContext';


const MainPage: FC = () => {
    const creditsContext = useCreditsContext()
    const globalContext = useGlobalContext()

    const hideNotification = () => {
        globalContext?.setIsNotified(true)
    }

    return (
        <>
            <Modal onShadowClick={hideNotification} visible={!globalContext?.isNotified}>
                <div className='notification'>
                    <h2>Metamask extension</h2>
                    <p>
                        To work with our application, you have to install the <a href='https://metamask.io/download/'>Metamask browser extension</a>
                    </p>
                    <Button onClick={hideNotification}>Skip this step</Button>
                </div>
            </Modal>
            <div className={"total-container"}>
                <div className={"label-container"}>
                    <div className={"label"}>
                        Q1 2022
                        <div className={"label-bullet"}></div>
                    </div>
                </div>
                <div className={"arc-container"}>
                    <div className={"arc"}></div>
                </div>
            </div>
            <Banner>
                <>Explore Your own planet In <span className={'inverted'}>our new</span> metaverse</>
            </Banner>
            <Stats />
            <CreditsContextProvider>
                <UserForm />
                <UserList />
            </CreditsContextProvider>
        </>
    )
}

export default MainPage
