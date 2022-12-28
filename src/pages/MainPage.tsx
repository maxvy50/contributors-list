import React from 'react'
import Banner from '../components/banner/Banner';
import List from '../components/list/List';
import Stats from '../components/stats/Stats';
import UserForm from '../components/userForm/UserForm';
import '../assets/styles/mainPage.css'
import Modal from '../components/UI/modal/Modal';
import { useParticipantContext } from '../context/ParticipantContext';
import Button from '../components/UI/button/Button';
import '../assets/styles/animation/animation.css'


function MainPage() {
    const context = useParticipantContext()

    const hideNotification = () => {
        context?.setIsNotified(true)
    }

    return (
        <>
            <Modal onShadowClick={hideNotification} visible={!context?.isNotified}>
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
            <UserForm />
            <List />
        </>
    )
}

export default MainPage
