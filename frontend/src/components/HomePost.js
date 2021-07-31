import React, { useRef, useState } from 'react'
import { Card, Input, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import avatar from '../assets/images/user.svg'
import styles from '../assets/css/components/HomePost.module.css'

export const HomePost = () => {

    const [showComment, setShowComment] = useState(false)

    const renderAvatarName = () => {
        return (

            <div className="d-flex flex-row">
                <img src={avatar} alt="avatar" width="50" />
                <div className="d-flex flex-column">
                    <p className="px-2">
                        <span className={`${styles.name} text-primary`}>
                            <Link to={'/profile/:id'}>Muhamad Amir</Link>
                        </span>
                    </p>
                    <p className={` px-2`}>
                        <span className={`${styles.username}`}>@mamir</span>
                        <span className={`${styles.postDate}`}>| 27 Aug 2021</span>
                        <span className={`${styles.postTime}`}>9.30 a.m.</span>
                    </p>
                </div>
            </div>

        )
    }

    const renderBody = () => {
        return (
            <div className="ms-5 ps-4 mt-3">
                <p>Nice laaa. ada dropdown dh kt atas. heee. kena add user baru ni. kosong sangat la. huhu Nice laaa. ada dropdown dh kt atas. heee. kena add user baru ni. kosong sangat la. huhus</p>
                <div className="mt-3">
                    <i className={`${styles.icon} bi bi-chat-square-text`}></i>
                    <span className={`${styles.icon} ps-2`} onClick={() => setShowComment(!showComment)}>20 comments</span>
                </div>
            </div>
        )
    }

    const renderComments = () => {
        return (
            <Card className={`${styles.comment} border-primary`}>
                <CardBody>
                    <Input type="text" id="comment" placeholder="What's your comment?" />
                </CardBody>
                {renderCommentCard()}
            </Card>
        )
    }

    const renderCommentCard = () => {
        return (
            <div className="border border-primary border-start-0 border-end-0 border-bottom-0">
                <CardBody>
                    <p className="d-flex align-items-center">
                        <span className={`${styles.commentName} text-primary`}>
                            <Link to={'/profile/:id'}>Muhamad Amir</Link>
                            <span className={`${styles.commentUsername}`}>@mamir</span>
                        </span>
                        <span className={`${styles.postDate} ms-auto`}>27 Aug 2021</span>
                        <span className={`${styles.postTime}`}>9.30 a.m.</span>
                    </p>
                    <div className="mt-1">
                        show comments ropdown dh kt atas. heee. kena add user baru ni. kosong sangat la. huhu Nice laaa. ada dropdow
                    </div>

                </CardBody>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <Card body className={`${styles.container} rounded-0 border-start-0 border-primary border-end-0 border-bottom-0`}>
                {renderAvatarName()}
                {renderBody()}
                {showComment && renderComments()}
            </Card>
        )

    }

    return renderContent()

}
