const express = require('express')
const model = require('./model')
const Router = express.Router()
const User = model.getModel('user')
const utilt = require('utility')
const _filter = { pwd:0,__v:0 }

Router.get('/list',function(req,res){
    const {type} = req.query
    User.find({type},function(err,ret){
        if(err){
            return res.json({code:1,msg:'服务器繁忙'})
        }
        return res.json({code:0,data:ret})
    })
})
Router.get('/info',function(req,res){
    const userid = req.cookies.userid
    if(!userid){
        return res.json({code:1})
    }
    User.findById(userid,_filter,function(err,ret){
        if(err){
            return res.json({code:1,msg:'服务器繁忙'})
        }
        return res.json({code:0,data:ret})
    })
})
Router.post('/register',function(req,res){
    const {user,type,pwd} = req.body
    User.findOne({user},function(err,ret){
        if(err){
            return res.json({code:1,msg:'服务器繁忙'})
        }
        if(ret){
            return res.json({code:1,msg:'用户已存在'})
        }
        User.create({user,type,pwd:utilt.md5(pwd)},function(err,ret){
            if(err){
                return res.json({code:1,msg:'服务器繁忙'})
            }
            return res.json({code:0})
        })
    })
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user,pwd:utilt.md5(pwd)},_filter,function(err,ret){
        if(err){
            return res.json({code:1,msg:'服务器繁忙'})
        }
        if(!ret){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userid',ret._id)
        return res.json({code:0,data:ret})
    })
})
Router.post('/saveinfo',function(req,res){
    const body = req.body
    const userid = req.cookies.userid
    User.findByIdAndUpdate(userid,req.body,function(err,ret){
        if(err){
            return res.json({code:1,msg:'服务器繁忙'})
        }
        const data = Object.assign({},{user:ret.user,type:ret.type},body)
        return res.json({code:0,data})
    })
})
module.exports = Router