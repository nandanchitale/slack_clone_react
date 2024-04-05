import React from 'react'
import './css/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutLineIcon from "@mui/icons-material/Help";
import { useStateValue } from '../../core/StateProvider';

function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className='header'>
            <div className="header_left">
                <Avatar
                    className='header_avatar'
                    alt={user?.displayName} // User name
                    src={user?.photoURL} // user photo url
                />
                <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder='Serach <Workspace Name>' />
            </div>
            <div className="header_right">
                <HelpOutLineIcon />
            </div>
        </div>
    );
}

export default Header