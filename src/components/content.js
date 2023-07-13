import React from 'react';
import "../App.css";
import PreviewImage from "../icons/preview.jpg";
import ReactPlayer from 'react-player';

function Content () {
    return (
        <div className={"Content"}>
            <div className={"TitleCard"}>
                <img src={PreviewImage} alt={"preview"} className={"PreviewImg"}></img>
                <div className={"TitleDescription"}>
                    <h1 className={"TitleName"}>Blue Lock</h1>
                    <p>Тип: </p>
                </div>
            </div>
            <div className={"Player"}>
                <ReactPlayer url={"https://www.youtube.com/watch?v=s0ciibpl8go"}/>
            </div>
        </div>
    );
}

export default Content;
