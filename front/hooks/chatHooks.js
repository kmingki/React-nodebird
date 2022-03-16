import { useEffect } from 'react';

export const useJoinRoom = (socket, id) => {
  const requestJoin = () => {
    socket.emit('joinRoom', id);
  };

  useEffect(requestJoin, []);
};

/*
export const useWantingRoom = (socket, userId, dispatch) => {
    const ms = useMemo(()=>socket, [socket]);

    const roomData = () => {
        ms.emit('roomListDataRequest', userId, (res) => {
            dispatch({
                type: UPDATE_ROOM_LIST,
                data: res.rooms
            });
        })

        ms.on('updateRoomList', (room)=>{
            const users = room.participants;

            users.forEach(u => {
                if (u.id === userId) {
                    dispatch({
                        type: UPDATE_ROOM_LIST,
                        data: [...rooms, room]
                    });
                }
            });
        });
    };

    useEffect(roomData, []);
};
*/
