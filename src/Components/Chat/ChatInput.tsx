import React, { useState } from 'react'
import { useStateValue } from '../../core/StateProvider';
import { addDoc, collection, Timestamp } from '@firebase/firestore';
import { db } from '../../Firebase/firebase';
import "./css/chatInput.css"

interface ChatMessageProps {
    channelId?: string,
    channelName?: string
}

interface ChatMessage {
    message: string,
    timestamp: Timestamp,
    user: string,
    userImage: string
}

const ChatInput: React.FC<ChatMessageProps> = ({ channelId, channelName }) => {

    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    // Send message event on send button click
    const sendMessage = async (e: any) => {
        e.preventDefault();

        if (channelId) {

            await addDoc(collection(db, "rooms", channelId, "messages"), {
                message: input,
                timestamp: Timestamp.now(),
                user: user.displayName,
                userImage: user.photoURL
            });
        }

        setInput("");
    };

    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button
                    type="submit"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInput