const SocketIO = require('socket.io');

module.exports = (server, app) => {
    const io = SocketIO(server, { path: '/socket.io'});
    app.set('io', io);
    const room = io.of('./room');
    const chat = io.of('./chat');

    room.on('connection', (socket)=>{
        console.log('room 네임스페이스에 접속');
        socket.on('disconnect', (socket) => {
            console.log('room 네임스페이스 접속 해제');
        });
    });

    chat.on('connection', (socket) => {
        console.log('chat 네임스페이스에 접속');
        const req = socket.request;
        const { headers: { referer }} = req;
        const roonId = referer.split('/')[referer.split('/').length - 1].replace(/\?.+/,'');
        socket.join(roomId);

        socket.on('disconnect', ()=>{
            console.log('chat 네임스페이스 접속 해제');
            socket.leave(roomId);
            const currentRoom = socket.adapter.rooms[roomId];
            const userCount = currentRoom? currentRoom.length : 0;
            if (userCount == 0) {
                axios.delete(`http://localhost:3065/room/${roomId}`)
                .then(()=>{
                    console.log('방 제거 요청 성공');
                })
                .catch((error)=>{
                    console.error(error);
                })
            } else {
                socket.to(roomId).emit('exit', {
                    user: 'system',
                    chat: '###님이 퇴장하셨습니다.'
                });
            }
        })
    });
}