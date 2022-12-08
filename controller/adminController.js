const {User,Driver,Book} = require('../model/register');

// module.exports.fetchData = (req,res,next) => {
//     let arr = [];
//     user.findAll().then(user=>{
//         console.log(user);
//         user.forEach((i)=>{
//             arr.push(i.dataValues)
//         })

//         res.send({data : arr});
//     })
// }

module.exports.fetchData= async (req,res,next)=>{
    let userfromDb = await User.findAll();
    if (userfromDb != null)
    {
        res.render('user-index',{
            data: userfromDb
        })
    }
}

module.exports.fetchDataDriver = async (req,res,next)=>{
    let userfromDb = await Driver.findAll();
    userfromDb = JSON.parse(JSON.stringify(userfromDb));
    console.log(userfromDb)

    if (userfromDb != null)
    {
        res.render('driver-index',{
            data: userfromDb
        })
    }
}

module.exports.fetchDataBook = async(req,res,next)=>{
    let userFromDb = await Book.findAll();
    userFromDb = JSON.parse(JSON.stringify(userFromDb));

    if(userFromDb != null)
    {
        res.render('book-index',{
            data : userFromDb
        })
    }
}


