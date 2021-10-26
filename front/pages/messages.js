import React from 'react';
import AppLayout from '../components/AppLayout';
import Room from '../components/Room';
import Chat from '../components/Chat';

const Messages = () => {

    return(
        <AppLayout SideBar={<Chat/>}>
            <Room />
        </AppLayout>
    );
}

export default Messages;