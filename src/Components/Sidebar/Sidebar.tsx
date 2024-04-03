import React from 'react'
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

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className="sidebar_info">
                    <h2>Workspace Name</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Nandan Chitale
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
            <SidebarOption Icon={AddIcon} title="Channels" />

            {/* Connect to db and list all the channels */}
            {/* Sidebar Options */}
        </div>
    );
}

export default Sidebar