import React from 'react'
import { Main } from '../layouts/Main'
import styles from '../assets/css/components/Home.module.css'
import { FormGroup, Button, Input } from 'reactstrap'
import avatar from '../assets/images/user.svg'

export const Home = () => {

    const renderPageName = () => {
        return (
            <div className={`${styles.pageName} border border-top-0 border-start-0 border-end-0`}>
                <h4>Home</h4>
            </div>
        )
    }

    const renderAddPost = () => {
        return (
            <div className={`${styles.addPost} d-flex flex-column border border-top-0 border-start-0 border-end-0`}>
                <div className="d-flex flex-row">
                    <div className={`${styles.avatar}`}>
                        <img src={avatar} alt="avatar" width="50" />
                    </div>
                    <FormGroup style={{ width: '100%' }}>
                        <Input className="border-0" style={{ height: '90px', background: '#f9f9f9' }} type="textarea" name="text" id="post" placeholder="What's happening?" />
                    </FormGroup>
                </div>
                <div className="ms-auto mt-3">
                    <Button color="primary" size="sm" className="px-4">Post</Button>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <main className={`${styles.container} border border-1 border-top-0 border-bottom-0`}>
                {renderPageName()}
                {renderAddPost()}
            </main>
        )
    }


    return <Main content={renderContent} />
}
