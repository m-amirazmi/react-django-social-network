import React from 'react'
import { Main } from '../layouts/Main'
import styles from '../assets/css/components/Profile.module.css'

export const Profile = () => {

    const renderPageName = () => {
        return (
            <div className={`${styles.pageName} border border-top-0 border-start-0 border-end-0`}>
                <h4>Profile</h4>
            </div>
        )
    }


    const renderContent = () => {
        return (
            <main className={`${styles.container} border border-1 border-top-0 border-bottom-0`}>
                {renderPageName()}
            </main>
        )
    }
    return <Main content={renderContent} />
}
