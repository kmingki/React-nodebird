/* eslint-disable */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Room from './../../components/Room';
import Chat from './../../components/Chat';
import DesktopLayout from './../../components/layout/DesktopLayout';

import { LOAD_ROOM_LIST, UPDATE_ROOM_LIST } from '../../reducers/chat';
import { useJoinRoom } from '../../hooks/chatHooks';
import { socket } from './../../utils/io';

const Message = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { roomId } = router.query;
    const { me } = useSelector((state) => state.user);

    useJoinRoom(socket, me.id);

    useEffect(() => {

        socket.emit('roomListDataRequest', me.id, (res) => {
            dispatch({
                type: LOAD_ROOM_LIST,
                data: res.rooms
            });
        });

        socket.on('updateRoomList', (room) => {
            
            room.participants.forEach(u => {
                if (u.id === me.id) {
                    dispatch({
                        type: UPDATE_ROOM_LIST,
                        data: room
                    });
                }
            });
        });

        return () => {
            socket.off('updateRoomList');
          };
    }, []);

    return(
        <DesktopLayout Side={<Room/>}>
            <Chat roomId={roomId} />
        </DesktopLayout>
    );
}

export default Message;