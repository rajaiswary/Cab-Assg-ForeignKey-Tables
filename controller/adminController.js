const user = require('../model/register');

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
    let userfromDb = await user.User.findAll();
    if (userfromDb != null)
    {
        res.render('user-index',{
            data: userfromDb
        })
    }
}