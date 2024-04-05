import React, { useEffect, useState } from 'react'
import "./css/Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../../Firebase/firebase';
import { collection, onSnapshot, query } from "@firebase/firestore";
import { Room } from '../../Types/Room';
import { useStateValue } from '../../core/StateProvider';

function Sidebar() {

    const [channels, setChannels] = useState<Room[]>([]);

    const [{ user }] = useStateValue();

    /**This code is used when you are not using realtime database from firebase */
    // useEffect(() => {
    //     const getData = async () => {
    //         // Query a reference to a subcollection
    //         const querySnapshot = await getDocs(collection(db, "rooms"));

    //         const fetchedChannels: Room[] = [];
    //         querySnapshot.forEach((doc: any) => {
    //             console.log(`${doc.id} => ${doc.data().name}`)
    //             fetchedChannels.push({
    //                 id: doc.id,
    //                 name: doc.data().name
    //             });
    //         });

    //         setChannels(fetchedChannels);
    //     }

    //     getData();
    // }, []);

    /**This code is used when you want to use realtime data from firestore */
    useEffect(() => {
        const getData = async () => {
            const q = query(collection(db, "rooms"));

            /**
             * You can listen to a document with the onSnapshot() method. 
             * An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. 
             * Then, each time the contents change, another call updates the document snapshot.
             */
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const roomOptions: Room[] = [];

                /** 
                 * As with documents, you can use onSnapshot() instead of get() to listen to the results of a query.
                 * This creates a query snapshot. 
                 */
                querySnapshot.forEach((doc) => {
                    roomOptions.push({
                        id: doc.id,
                        name: doc.data().name
                    });
                });
                setChannels(roomOptions);
            });
            // Stop listening to changes
            //unsubscribe();
        }
        getData();
    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className="sidebar_info">
                    <h2>Workspace Name</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channels" AddChannelOption={true} />

            {/* Connect to db and list all the channels */}
            {/* Sidebar Options */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} key={channel.id} isActive={false} />
            ))}
        </div>
    );
}

export default Sidebar