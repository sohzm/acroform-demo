const mongodb=require('mongodb')
const dbname='Pdf_editor'
// leaving this for testing, should not be left on github
//const dburl=`mongodb+srv://ZlyEplCIZVcM8QhC:ZlyEplCIZVcM8QhC@cluster0.f0mqyuf.mongodb.net/${dbname}`


var dbpass = 'iO6gjS7hInAZlnvg'
const dburl = `mongodb+srv://sohxm7:${dbpass}@clusterx.6wa1yjf.mongodb.net/${dbname}`;


module.exports={mongodb,dbname,dburl}
