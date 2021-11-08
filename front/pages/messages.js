import React from 'react';
import Room from '../components/Room';
import Chat from '../components/Chat';
import DesktopLayout from '../components/layout/DesktopLayout';

const Messages = () => {

    return(
        <DesktopLayout Side={<Room height={document.documentElement.clientHeight}/>}>
            <Chat />
        </DesktopLayout>
    );
}


export default Messages;