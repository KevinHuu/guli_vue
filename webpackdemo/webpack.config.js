const path = require("path")
module.exports ={
    entry:'./src/03.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    }
}