import React from 'react';

const MenuTopPanelButton = (props) => {
    return (
        <button className="menu__topPanel-button" onClick={() => props.onClick()}>
            <img src={props.svg} alt={props.alt} className="menu__topPanel-image"/>
        </button>
    );
};

export default MenuTopPanelButton;