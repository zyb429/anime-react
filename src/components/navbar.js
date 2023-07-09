import React from 'react';
import "../App.css";

function NavBar () {
    return (
        <div className={"Nav"}>
            <ul>
                <li><a href={""}><h2 className={"Header"}>Аниме</h2></a></li>
                <li><a href={""}><h2 className={"Header"}>Манга</h2></a></li>
                <li><a href={""}><h2 className={"Header"}>Персонажи</h2></a></li>
                <li><a href={""}><h2 className={"Header"}>Случайное аниме</h2></a></li>
            </ul>
            <ul>
                <li><a href={""}><h2 className={"Auth"}>Войти</h2></a></li>
            </ul>
        </div>
    );
}

export default NavBar;
