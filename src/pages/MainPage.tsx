import React, { FC } from 'react'
import Banner from '../components/banner/Banner';
import UserList from '../components/userList/UserList';
import Stats from '../components/stats/Stats';
import UserForm from '../components/userForm/UserForm';
import '../assets/styles/mainPage.css'
import '../assets/styles/animation/animation.css'


const MainPage: FC = () => {

    return (
        <>
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
            <UserList />
        </>
    )
}

export default MainPage
