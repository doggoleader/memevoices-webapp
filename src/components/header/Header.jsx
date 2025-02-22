import React from 'react';
import Button from "../buttons/button/Button";
import {useNavigate, useNavigation} from "react-router-dom";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const nav = useNavigate();

    const onClose = () => {
        tg.close();
    }

    const onOpen = () => {
        nav('/form')
    }



    return (
        <div className={"header"}>
            <Button onClick={onOpen}>Заполнить форму</Button>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={"username"}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;