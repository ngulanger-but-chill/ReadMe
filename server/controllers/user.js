const { User } = require('../models')
const Helper = require('../helpers/helper.js')
const { OAuth2Client } = require('google-auth-library');

class Controller{
    static googleSign(req, res, next) {
        let { id_token } = req.body;
        let email;
        const client = new OAuth2Client(process.env.CLIENT_ID);
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                email = ticket.getPayload().email;

                return User.findOne({
                    where: { email }
                })
            })
            .then(data => {
                if (data) {
                    return {
                        id: data.id,
                        email: data.email
                    }
                } else {
                    return User.create({ email, password: 'admin123' })
                }
            })
            .then(data => {
                let payload = {
                    id: data.id,
                    email: data.email
                }
                return res.status(201).json({
                    data: {
                        id: data.id,
                        email: data.email,
                        token: Helper.generateToken(payload)
                    }
                })
            })
            .catch(next)
    }

    static register(req, res, next){
        User.create({
            email : req.body.email,
            password: req.body.password
        })
        .then(data =>{
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch(err => next(err))
    }

    static login(req, res, next){
        User.findOne({
            where : {email: req.body.email}
        })
        .then(data =>{
            if(data){
                if(Helper.comparePassword(req.body.password, data.password)){
                    const token = Helper.generateToken({id: data.id, email: data.email})
                    res.status(200).json({token})
                }else{
                    throw {message : `Email / Password are incorrect`}
                }
            }else{
                throw {
                    message : `Email / Password are incorrect`
                }
            }
        })
        .catch(err => next(err))
    }
}

module.exports = Controller