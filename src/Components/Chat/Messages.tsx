import React from 'react'
import { RoomMessage } from '../../Types/RoomMessage';
import './css/message.css'

const ChatRoomMessage: React.FC<RoomMessage> = ({ timestamp, user, userImage, message }) => {

    return (
        <div className='message'>
            <img src={`${userImage}`} alt={user} />
            <div className="message_info">
                <h4>{user}
                    <span className='message_TimeStamp'>
                        {timestamp?.toDate().toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatRoomMessage