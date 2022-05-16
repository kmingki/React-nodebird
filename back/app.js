const express = require('express');
const cors = require('cors');
//const passport = require('passport');
const cookieParser = require('cookie-parser');
//var session = require('express-session')
const morgan = require('morgan');
const path = require('path');
const postsRouter=require('./routes/posts');
const userRouter=require('./routes/user');
const postRouter=require('./routes/post');
const hashtagRouter=require('./routes/hashtag');
const roomRouter=require('./routes/room');
const db=require('./models');
//const passportConfig = require('./passport');
const webSocket = require('./socket');

const app = express();
db.sequelize.sync()
.then(()=>{
    console.log('db 연결 성공');
})
.catch(console.error);
//passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use('/profile', express.static(path.join(__dirname, 'profile')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

app.use(cookieParser(process.env.COOKIESECRET, {
    signed: true,
})); 
/*
app.use(session({
    secret: process.env.COOKIESECRET,
    resave: false,
    saveUninitialized: false,
  }))
*/

//app.use(passport.initialize());//요청(req객체)에 passport 설정
//req.session객체에 passport설정 저장. 
//req.session 객체는 express-session에서 생성하는 것이므로 express-session미들웨어보다 뒤에 연결
//app.use(passport.session());


app.get('/', (req, res)=>{
    res.send('hello express');
});

app.use('/room', roomRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/hashtag', hashtagRouter);


const server = app.listen(3065, ()=>{
    console.log("서버 실행 중!");
});

webSocket(server, app);