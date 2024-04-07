import React from 'react'
import "./css/SidebarOption.css";
import { useNavigate } from "react-router-dom";
import { db } from '../../Firebase/firebase';
import { addDoc, collection } from "@firebase/firestore";


interface SidebarOptionProps {
    id?: string,
    Icon?: React.ComponentType<any>;
    title: string;
    isActive?: boolean,
    AddChannelOption?: boolean
}

const SidebarOption: React.FC<SidebarOptionProps> = ({ id, Icon, title, isActive, AddChannelOption }) => {

    const navigate = useNavigate();

    const SelectChannel = () => {
        //if there is an ID then it means we are clicking on a channel not adding one
        if (id) {
            navigate(`/room/${id}`)
        }
        else {
            navigate(`/${title}`);
        }
    }

    // Add the channels to firestore database
    const AddChannel = async () => {
        const channelName = prompt('Please Enter the channel Name');
        if (channelName) {
            await addDoc(collection(db, "rooms"), {
                name: channelName,
            });
        }
    }

    return (
        <div className="sidebarOption" onClick={AddChannelOption ? AddChannel : SelectChannel}>
            {Icon && <Icon className="sidebarOption_icon" />}
            {
                Icon ? (
                    <h3>{title}</h3>
                ) : (
                    <h3 className='sidebarOption_channel'>
                        <span className='sidebarOption_hash'>#</span>{title}
                    </h3>
                )
            }
        </div>
    );
}

export default SidebarOption;