import React from 'react'
import "./css/Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

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
                <SidebarOption Icon={InsertCommentIcon} title="threads" />
                <SidebarOption title="Youtube" />
            </div>
        </div>
    );
}

export default Sidebar