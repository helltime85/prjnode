var express = require('express');
var mysql = require('mysql');
var userRouter = require('./router/userManager');
var sequelize = require('./models').sequelize;
const {tbl_user} = require('./models');
var app = express();

sequelize.sync();
/*
tbl_user.create({
    USER_ID : "test1234",
    USER_PWD: "1144",
    USER_NAME: "테스트"
    });
*/
app.set('port', process.env.PORT || 3000);

app.use('/user', userRouter);
console.log('router 1 : /user/');
app.get('/', (req, res) => {
    console.log('test');
    res.send('root');    
});


app.listen(app.get('port'), () => {
    console.log('express server port' + app.get('port'));
});
