import { Timestamp } from '@firebase/firestore';
import React from 'react'
import { RoomMessage } from '../../Models/RoomMessage';

const Message: React.FC<RoomMessage> = ({ timestamp, user, userImage, message }) => {
    return (
        <div className='message'>
            <img src={userImage} alt={user} />
            <div className="messageInfo">
                <h4>{user} timestamp...</h4>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Message