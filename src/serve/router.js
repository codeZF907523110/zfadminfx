var express = require('express')
var User = require('./modules/user')
// var session = require('exprees-session')
var multiparty = require('multiparty');
var fs = require('fs');
var router = express.Router()
let phonenumbers = ''
router.all("*", function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
router.post('/logon', (req, res) => {
    let logoninformation = req.body
    // console.log(req.body);
    new User(logoninformation).save((err, data) => {
        if (data) {
            res.status(200).json({ errcode: 1 })
            phonenumbers = logoninformation.phonenumber
        } else {
            res.status(200).json({ errcode: 0 })
        }
    })
})
//将头像路径保存至个人信息
router.post('/savetouxiang',(req,res)=>{
    // console.log(req.body.userid,'ccccccccccc');
    // console.log(req.body.imgurl);
    User.updateOne({'_id':req.body.userid},{
       "$set":{'touxiangurl':req.body.imgurl}   
    },(err,data)=>{
        if(data){
            res.status(200).send({code:1})
        }else{
            res.status(200).send({code:0})
        }
    })
    // User.findOne({'_id':req.body.userid},(err,data)=>{
    //     if(data){
    //         console.log(data);
    //     }
    // })
})
//将用户名保存至个人信息
router.post('/saveusername',(req,res)=>{
    // console.log(req.body);
    User.updateOne({_id:req.body.userid},{username:req.body.username},
    (err,data)=>{
        if(data){
            res.status(200).send({code:1})
        }
    }    
    )
})
//保存头像到本地
router.post('/gettouxiang',(req,res)=>{
    let form = new multiparty.Form({ // 这里new了一个对象，参数是一个uploadDir
        uploadDir: './public/touxiangimg'
    });
    form.parse(req);
    form.on('file', (name, file) => {
        // console.log('文件', name, file);
        res.status(200).send(file.path)
    });
})
router.get('/', (req, res) => {
    res.send('aaaaaaaaaaaaaaaaa')
})
router.post('/removeuser', (req, res) => {
    User.remove((err, data) => {})
})
router.post('/login', (req, res) => {
    User.findOne({
        phonenumber: req.body.accounts
    }, (err, data) => {
        let errcode = 0;
        if (data) {
            if (req.body.password == data.password) {
                // console.log(data.phonenumber);
                // console.log(data.password);
                // console.log('登陆成功');
                res.status(200).json({ errcode: 2 })
            } else {
                // console.log('帐号密码错误');
                res.status(200).json({ errcode: 1 })
            }
        } else {
            // console.log('帐号不存在');
            res.status(200).json({ errcode: 0 })
        }
    })
})
router.post('/phonelogin', (req, res) => {
    let errcode;
    User.findOne({
        phonenumber: req.body.phonenumber
    }, (err, data) => {
        if (data) {
            // console.log('账号存在');
            phonenumbers = data.phonenumber
            // console.log(phonenumbers);
            res.status(200).json({ errcode: 1 })
        } else {
            // console.log('帐号不存在');
            res.status(200).json({ errcode: 0 })
        }
    })
})
router.post('/intophonelogin', (req, res) => {
    res.status(200).json({ phonenumber: phonenumbers })
})
router.post('/getuserinfo', (req, res) => {
    // console.log(req.body.fxusername);
    User.findOne({
        phonenumber: req.body.fxusername
    }, (err, data) => {
        if (data) {
            res.status(200).json({ userinfo: data })
        }
    })
})
//搜索判断有无此人，并返回数据,利用电话号和用户名查找用户
router.post('/getfriendinfo',(req,res)=>{
    // console.log(req.body.userid,'ccccc');
    User.findOne({
        $or:[{phonenumber:req.body.userid},{accounts:req.body.userid}]
    }
        ,(err,data)=>{
        if(data){
            // console.log('成功');
            res.status(200).send({
                errcode:1,
                friendinfo:data
            })
        }else{
            // console.log('失败');
            res.status(200).send({errcode:0})
        }
    })
})
//利用用户id返回数据
router.post('/getfriendinfo1',(req,res)=>{
    // console.log(req.body.userid,'ccccc');
    let errcode;
    let friendinfo;
    User.findOne(
        {_id:req.body.userid}
        ,(err,data)=>{
        if(data){
            // console.log('成功');
            errcode=1
            friendinfo=data
            // console.log();
            if(req.body.codesend==1){
                res.status(200).send({friendinfo:friendinfo})
            }
        }else{
            // console.log('失败');
            errcode=0;
        }
    })
    User.findOne(
        {_id:req.body.myuserid},
        (err,data)=>{
            if(data){
                // console.log(data.myfriends,'mydata');
                // console.log(req.body.userid,'userid');
                // res.status(200).send({ismyfriend:false})
                if(data.myfriends.indexOf(req.body.userid)!=-1){
                    res.status(200).send({
                        ismyfriend:true,
                        friendinfo:friendinfo,
                        errcode:errcode
                    })
                }else{
                    res.status(200).send({
                        ismyfriend:false,
                        friendinfo:friendinfo,
                        errcode:errcode
                    })
                }
            }
        })
})
router.post('/addmymail',(req,res)=>{
    // console.log(req.body.myuserid,'hahhahah');
    User.updateOne({_id:req.body.myuserid},
            {$push:{myfriends:req.body.userid}},
            (err,data)=>{
                if(data){
                    res.status(200).send({errcode:0})
                }else{
                    res.status(200).send({errcode:1})
                }
            }
    )
})
router.post('/getfriendtouxiang',(req,res)=>{
    // var myfriendsids=req.body.myfriendsid
    // console.log(req.body.myfriendsid,'nidaye');
    User.find({_id:{"$in":req.body.myfriendsid}},
        (err,data)=>{
            if(data){
                res.status(200).send({myfriendsuserinfo:data})
            }
        }
    )
})
router.post('/getothersocketid',(req,res)=>{

})
router.post('/savesocketid',(req,res)=>{
    User.updateOne({_id:req.body.myid},{socketid:req.body.socketid},(err,data)=>{
        if(data){
             User.findOne({_id:req.body.myid},(err,data)=>{
                if(data){
                    console.log(data);
                }else{
                    console.log(err);
                }
            })
        }
    })
    console.log(req.body.socketid);
    console.log(req.body.myid);
    // User.findOne({_id:req.body.myid},(err,data)=>{
    //     if(data){
    //         console.log(data);
    //     }else{
    //         console.log(err);
    //     }
    // })
})
module.exports = router