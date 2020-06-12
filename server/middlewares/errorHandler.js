module.exports = (err, req, res, next) => {
    console.log(err)
    if(err.name === 'SequelizeValidationError') {
        let error = err.errors.map(el => el.message)
        res.status(400).json({message: error})
    } else if (err.name == 'empty'){
        res.status(404).json({message:"Data Not Found"})
    } else if (err.message) {
    res.status(400).json({ message: err.message})
    } else {
        res.status(500).json({ message: "Internal Server Error"})
    }
}