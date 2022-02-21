import React from 'react';

const Window = (props) => {

    const window_ref = React.createRef();
    const [isInFocus, Focus] = React.useState(false);

    const replace = () => {
        let mouse_offset_x = window.event.clientX - window_ref.current.offsetLeft;
        let mouse_offset_y = window.event.clientY - window_ref.current.offsetTop;

        window.onmousemove = () => {
            window_ref.current.style.top = (window.event.clientY - mouse_offset_y) + "px";
            window_ref.current.style.left = (window.event.clientX - mouse_offset_x) + "px";
        }
        window.onmouseup = () => window.onmousemove = null;
    }

    const resize = () => {
        let mouse_offset_x,
            mouse_offset_y;

        window.onmousemove = () => {
            mouse_offset_x = window.event.clientX - window_ref.current.offsetLeft;
            mouse_offset_y = window.event.clientY - window_ref.current.offsetTop;
            window_ref.current.style.height = Math.max(mouse_offset_y, 200) + "px";
            window_ref.current.style.width = Math.max(mouse_offset_x, 300) + "px";
        }
        window.onmouseup = () => window.onmousemove = null;
    }

    return (
        <div className={props.opened ? "window" : "window window__disable"}
             ref={window_ref}
             onMouseOver={() => Focus(true)}
             onMouseLeave={() => Focus(false)}
             style={{zIndex: isInFocus ? 5 : 3}}>
            <div className="window-head" onMouseDown={() => replace()}>
                {props.title}
                <div className="window-head-cross-block">
                    <span className="window-head-cross"/>
                </div>
            </div>
            <div className="window-content">
                {props.children}
            </div>
            <div className="window-resize" onMouseDown={() => resize()}/>
        </div>
    );
};

export default Window;