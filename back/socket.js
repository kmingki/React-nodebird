const SocketIO = require('socket.io');
const { Room, User, Chat } = require('./models');

module.exports = (server, app) => {
    const io = SocketIO(server, { 
        path: '/socket.io',
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST", "PUT", "PATCH", "HEAD", "DELETE"], //GET,HEAD,PUT,PATCH,POST,DELETE
            credentials: true
        }
    });
    app.set('io', io);

    io.on('connection', (socket)=>{
        
        socket.on('joinRoom', async (id) => {
            const user = await User.findOne({
                where: { id: id }
            });

            const rooms = await user.getParticipateRoom();
            
            rooms.forEach((r)=>{
                console.log(`${user.nickname} joined ${r.id}`);
                socket.join(parseInt(r.id, 10));
            });

            socket.join('main');
        });

        socket.on('disconnect', (socket) => {
            console.log('접속 해제');
        });

        socket.on('roomListDataRequest', async (userId, ack) => {
            try{
                const user = await User.findOne({
                    where: { id: userId }
                });
    
                const rooms = await user.getParticipateRoom({
                    include: [{
                        model: User,
                        attributes: [ 'id', 'nickname']
                    }, {
                        model: User,
                        as: 'participants',
                        attributes: ['id', 'nickname']
                    }, {
                        model: Chat,
                        order: [['createdAt']],
                        include : [{
                            model: User,
                            attributes: ['id', 'nickname'],
                        }]
                    }],
                });

                ack({
                    status:"OK",
                    rooms
                });
            } catch (e) {
                ack({
                    status:"NOK",
                    data: e
                });
                //you must catch any error that could be thrown in a listener.
                /*callback({
                    status: "NOK"
                });*/
            }
            
        });

        socket.on('createRoomRequest', async (userId, userIds)=>{
            const users = await Promise.all(userIds.map((u) => User.findOne({
                where: {
                    id: u
                }
            })));

            //이름만 있는 배열로 생성. 단체 톡방의 default 제목이 될것임.
            var userName = users.map(u => {
                return u.nickname;
            });

            //배열.join(', ') '이름, 이름, 이름, 이름'
            userName = userName.join(', ');

            //새로운 채팅방 생성
            const newRoom = await Room.create({
                title: userName,
                UserId: userId,
            });

            //users에 있는 유저들을 room에 add 시켜야
            await Promise.all(users.map(u=> newRoom.addParticipants(u.id)));

            const newRoomWithFullData = await Room.findOne({
                where: { id: newRoom.id },
                include: [{
                    model: User,
                    attributes: [ 'id', 'nickname']
                }, {
                    model: User,
                    as: 'participants',
                    attributes: ['id', 'nickname']
                }, {
                    model: Chat,
                    order: [['createdAt']],
                    include : [{
                        model: User,
                        attributes: ['id', 'nickname'],
                    }]
                }],
            });

            //console.log(newRoomWithFullData);

            io.emit('updateRoomList', newRoomWithFullData); //초대된 사람만?

        });

        socket.on('sendMessage', async ({ roomId, message, userId })=>{

            const newChat = await Chat.create({
                chat: message,
                UserId: userId,
                RoomId: roomId
            });

            /*
            const room = await Room.findOne({ where: { id : roomId }});
            const fullChats = await room.getChats({order: [['createdAt']]});
            */
            const newChatWithFullData = await Chat.findOne({ where: { id: newChat.id},
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }]});

            io.to(roomId).emit('newMessage', newChatWithFullData);
        });

        socket.on('loadRoom', async ({ roomId, socketId}) => {

            const roomWithFullData = await Room.findOne({
                where: { id: roomId },
                include: [{
                    model: User,
                    attributes: [ 'id', 'nickname']
                }, {
                    model: User,
                    as: 'participants',
                    attributes: ['id', 'nickname']
                }, {
                    model: Chat,
                    include : [{
                        model: User,
                        attributes: ['id', 'nickname'],
                    }],
                }],
                order: [
                    [Chat, 'createdAt', 'ASC']
                  ],
            });

            io.to(socketId).emit('roomData', roomWithFullData);

        });
    });

    /*
    var users = req.body.users;
        users.push(req.user.id.toString());
        users = await Promise.all(users.map((u) => User.findOne({
            where: {
                id: parseInt(u, 10)
            }
        }))); //[[노드, true],[리액트, true]]

        //이름만 있는 배열로
        var userName = users.map(u=>{
            
            return u.nickname;
        })

        //배열.join(', ') '이름, 이름, 이름, 이름'
        userName = userName.join(', ');

        const newRoom = await Room.create({
            title: userName,
            UserId: req.user.id,
        });

        //users에 있는 유저들을 room에 add 시켜야
        await Promise.all(users.map(u=> newRoom.addParticipants(u.id)));

        const io = req.app.get('io');
        io.of('/room').emit('newRoom', newRoom); //틀렸음... 초대된 사람만 newRoom

        return res.status(201).send(null);
     */
    /*
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
    */
}