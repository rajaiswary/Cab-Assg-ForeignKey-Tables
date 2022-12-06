const user = require('../model/register');

module.exports.profile = (req,res,next) =>{
    res.render('profile.handlebars');
}

module.exports.index = async (req,res,next)=>{
  await  user.User.findAll({
        where : {
            email : req.body.email,
            password : req.body.password
        }
    }).then((users)=>{
        res.render('user-index.handlebars', {
            data: users
        });
    })

}


// module.exports.index = (req,res,next)=>{
//     console.log("trig")
//     console.log(req.params)
//     user.findAll().then(users => {
//         if(req.params.id){
//             console.log("if state")
//             let data = users.filter((i)=>{
//                 return i == req.params.id;
//             })
//             res.render('user-index',{
//                 data:data
//                 // identity : req.identity.user
//             })
//         }
//         else{
//         res.render('user-index',{
//             data : users,
//             // identity : req.identity.user
//         })}
//     })
// }


module.exports.update = (req,res,next)=>{
    user.User.findByPk(req.params.id)
    .then(userFromDb => {
        res.render('user-update',{
            data : userFromDb
        })
    })
}

module.exports.updatePost = async (req,res,next)=>{
    await user.User.update(
        {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
            age : req.body.age,
            country : req.body.country,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.redirect('/')

}

module.exports.delete = async(req,res,next) => {
    let id = req.params.id;
    let userFromDb = await user.User.findByPk(id);
    if( userFromDb != null)
    {
        await user.User.destroy(
            {
                where : 
                {
                    id : id

                }
            }
        );
        res.redirect('/');
    }
}
