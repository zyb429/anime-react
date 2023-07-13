import React from 'react';
import "../App.css";
import PreviewImage from "../icons/preview.jpg";
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

        </div>
    );
}

export default Content;
