const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    
    const token = req.cookies.token;
    console.log(token);
    jwt.verify(token, "secretkey", (err, decoded)=>{

        if (!err){
            next();
        } else {
            res.status(401).send('로그인이 필요합니다.');
        }
    });
    /*
    if(req.isAuthenticated()){
        next();
    } else {
        res.status(401).send('로그인이 필요합니다.');
    }
    */

}

const isNotLoggedIn = (req, res, next)=>{

    const token = req.cookies.token;
    console.log(token);
    jwt.verify(token, "secretkey", (err, decoded)=>{

        if (err){
            next();
        } else {
            res.status(401).send('로그인이 필요합니다.');
        }
    });
    /*
    const token = req.cookies.token;
    console.log('token ??????????????');
    console.log(token);
    if (!token) {
        next();
    } else {
        return res.status(401).send('로그인 하지 않은 사용자만 접근 가능합니다.');
    }
    
    if(!req.isAuthenticated()){
        next();
    } else {
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
    */
}


module.exports = {
    isLoggedIn, isNotLoggedIn
  };