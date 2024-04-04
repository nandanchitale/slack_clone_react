import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import "./css/chat.css";
import { collection, doc, getDocs, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { RoomMessage } from '../../Models/RoomMessage';
import Messages from './Messages';

function Chat() {

    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState<any>(null);
    const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);

    useEffect(() => {
        if (roomId) {

            onSnapshot(doc(db, "rooms", roomId), (doc) => {
                setRoomDetails(doc.data());
            });


            const roomMessageData = async () => {

                const roomMessageRef = collection(db, "rooms", roomId, "messages");
                const roomMessageQuery = query(roomMessageRef, orderBy("timestamp", "asc"));

                const chatRoomMessages: RoomMessage[] = [];

                const querySnapshot = await getDocs(roomMessageQuery);
                querySnapshot.forEach((doc) => {
                    chatRoomMessages.push({
                        id: doc.id,
                        message: doc.data().message,
                        timestamp: doc.data().timestamp,
                        user: doc.data().user,
                        userImage: doc.data().userImage
                    });
                });
                setRoomMessages(chatRoomMessages);
            }

            roomMessageData();
        }

    }, [roomId]);

    console.log(roomDetails);
    console.log(roomMessages);
    return (
        <div className='chat'>
            <h2>You are in {roomId} room</h2>
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>
                            # {roomDetails?.name}
                            <StarBorderOutlined />
                        </strong>
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {roomMessages.map(({ id, message, user, userImage, timestamp }) => (
                    <Messages
                        key={id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat