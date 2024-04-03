import React from 'react'
import "./css/SidebarOption.css";

interface SidebarOptionProps {
    Icon?: React.ComponentType<any>;
    title: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({ Icon, title }) => {
    return (
        <div className="sidebarOption">
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