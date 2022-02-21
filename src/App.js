import React from "react";
import "./style.css";
import Menu from "./menu/Menu";
import Window from "./menu/Window";
import MenuTopPanelButton from "./menu/MenuTopPanelButton";
import GearSVG from "./resources/gear.svg";
import InfoSVG from "./resources/info.svg";
import KeyboardPNG from "./resources/keyboard.png"
import Canvas from "./game/Game";

function App() {

    const [isSettingsOpened, OpenCloseSettings] = React.useState(false);
    const [isInfoOpened, OpenCloseInfo] = React.useState(false);
    const [gameWasStarted, StartGame] = React.useState(false)

    return (
    <div className="wrapper">
        <div>
            {!gameWasStarted && <div className="menu__topPanel">
                <MenuTopPanelButton svg={GearSVG} alt="settings" onClick={() => OpenCloseSettings(!isSettingsOpened)}/>
                <MenuTopPanelButton svg={InfoSVG} alt="info" onClick={() => OpenCloseInfo(!isInfoOpened)}/>
            </div>}
            <Menu mute={isSettingsOpened || isInfoOpened} start={() => StartGame(true)}/>
            <Window title="Настройки" opened={isSettingsOpened}>
                45465
            </Window>
            <Window title="Управление" opened={isInfoOpened}>
                <img className="window-content__info-image" src={KeyboardPNG} alt="Управление"/>
            </Window>
        </div>
      <div className="game">
        <Canvas/>
      </div>
    </div>
    );
}

export default App;
