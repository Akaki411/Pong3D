import React from 'react';

const Menu = (props) => {
    const [isClicked, click] = React.useState(false);
    return (
        <div className={props.mute ? "menu menu__mute" : "menu"}>
            <div className="menu__start">
                <button className={isClicked ? "menu__start__button menu__start__button__clicked" : "menu__start__button"}
                        onClick={() => {
                            click(true);
                            if (!isClicked )
                            {
                                props.start();
                            }
                        }}
                        disabled={props.mute}
                >Играть!</button>
            </div>
        </div>
    );
};

export default Menu;