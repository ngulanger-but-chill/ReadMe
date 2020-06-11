const {Book} = require ('../models')

function authorization ( req, res, next){
    Book.findOne({where: {id: req.params.id}})
        .then(data =>{
            if(data){
                if(data.UserId == req.UserId){
                    next()
                }else{
                    res.status(401).json('Not Authorized')
                }
            }else{
                next({name: 'empty'})
            }
        })
        .catch(err =>{
            next(err)
        })

}

module.exports = authorization