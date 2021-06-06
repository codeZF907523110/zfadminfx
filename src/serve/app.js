var express = require('express')
var router = require('./router')
var bodyparser = require('body-parser')
var cookieParser = require('cookie-parser');
var app = express()
var http = require('http').createServer(app)
server = http.listen(3000,'0.0.0.0',()=>{
    console.log('run 3000');
})
var io = require('socket.io')(server, { cors: true });

//处理web服务器正常的请求
function handler(req,res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if(err){
                res.writeHead(500);
                return res.end('Error loading index.html')
            }
            res.writeHead(200);
            res.end(data);
        }
    )
}
//实时通讯的连接
var inlineuser={}
var msgall={}
// var userid1=''
// var userid2=''
var msg=''
io.on("connection",function(socket){
    // console.log('连接到一个小可爱',socket.id);
    // console.log(socket.handshake.query.userid);  
    var usersocid={}
    usersocid.socketid=socket.id
    //获取到socket连接时'http://192.168.43.39:3000?userid'中userid的值
    usersocid.userid=socket.handshake.query.userid
    //用户id不能为undefined
    if(usersocid.userid!="undefined"){
        inlineuser[usersocid.userid]=usersocid.socketid
        console.log(inlineuser);
    }

    setTimeout(() => {
        socket.on("sendmsgtoserve",(res)=>{//用户给服务器发数据
            if(msgall[res.userid1+res.userid2]){
                msgall[res.userid1+res.userid2]=msgall[res.userid1+res.userid2]+'!@#$'+res.userid1+res.msg
                console.log(msgall[res.userid1+res.userid2]);
            }else{
                console.log(res.userid1+res.userid2,'ssssssssss');
                msgall[res.userid1+res.userid2]=res.userid1+res.msg
                console.log(msgall[res.userid1+res.userid2]);
            }
            userid1=res.userid1
            userid2=res.userid2
            msg=res.msg
            if(inlineuser[res.userid2]){
                console.log('用户在线');
                // console.log(res.msg,"msg")
                // console.log(res.userid2,"对方id");
                // console.log(res.usersocket,'发送者的客户端id');
                // console.log(inlineuser[res.userid2],'添加对方id');
                io.to(inlineuser[res.userid2]).emit("getmsgfromserve",{
                        msg:res.userid1+res.msg,
                        userid1:res.userid1,
                        userid2:res.userid2
                });//将用户传来的数据发送给另一个用户
                delete msgall[res.userid1+res.userid2]
            }
        })
        setTimeout(() => {
            var inlinepeple=Object.keys(msgall)
            var userid1=''
            var userid2=''
            for(item of inlinepeple){
                userid1=item.substring(0,24)
                userid2=item.substring(24)
                console.log(userid1,'ssssssssssssssssssssssssssss');
                if(inlineuser[userid2]){
                    console.log('用户在线');
                    if(msgall[userid1+userid2]){
                        // console.log('333333333333');
                        io.to(inlineuser[userid2]).emit("getmsgfromserve",{
                            msg:msgall[userid1+userid2],
                            userid1:userid1,
                            userid2:userid2
                        });//将用户传来的数据发送给另一个用户
                    }
                    delete msgall[userid1+userid2]          
                }
            }
            
        }, 0);
    }, 0);
    
    
    socket.on('disconnect',()=>{
        console.log(socket.handshake.query.userid);
        // console.log(reason);
        delete inlineuser[socket.handshake.query.userid]
        console.log(inlineuser);
    })
})
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(cookieParser());

app.use('/public/', express.static(__dirname + '/public'));
    // app.use(cors());
app.use(router)
module.exports = app