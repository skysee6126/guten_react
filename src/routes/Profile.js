import React from "react";
import { authService } from "firebasefile";

export default () => {
    const onLogOutClick = () => authService.signOut();
    return (
        <>
            <button onClick={onLogOutClick}>Log out</button>
        </>
    );
};