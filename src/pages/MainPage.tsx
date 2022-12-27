import React from 'react'
import Banner from '../components/banner/Banner';
import List from '../components/list/List';
import Stats from '../components/stats/Stats';
import UserForm from '../components/userForm/UserForm';
import '../assets/styles/mainPage.css'
import Modal from '../components/UI/modal/Modal';
import { useParticipantContext } from '../context/ParticipantContext';
import Button from '../components/UI/button/Button';


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
