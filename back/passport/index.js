const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () =>{
    passport.serializeUser((user, done)=>{
        //로그인 성공시 실행되는 user 객체를 전달받아 세션에 저장
        //이때 user로 넘어오는 정보는 앞의 local strategy의 done(null,user)에 의해 리턴된 값이 넘어온다.
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done)=>{
        
        try{
            user = await User.findOne({ where:  { id } });
            done(null, user);
        } catch(error){
            console.log(error);
            done(error);
        }
        
    });
    local();
}