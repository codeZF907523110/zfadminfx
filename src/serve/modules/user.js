let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost/userdb"
MongoClient.connect(url, { useUnifiedTopology: true, useUnifiedTopology: true }, function(err, db) {
    db.close();
});
//构建数据库模型
var Schema = mongoose.Schema
var userSchema = new Schema({
        username: {
            type: String,
            required: true
        },
        touxiangurl: {
            type: Object
        },
        phonenumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,

        },
        usersex: {
            type: Number,
            default: '0'
        },
        accounts: {
            type: String,
            default: 'fxid_ssss'
        },
        country: {
            type: String,
            default: ''
        },
        myfriends:{
            type:Array
        },
        socketid:{
            type:String
        }
    })
    //发布模型
module.exports = mongoose.model('User', userSchema)