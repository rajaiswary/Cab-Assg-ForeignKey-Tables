const user = require('../model/register');

module.exports.homepage = (req,res,next)=>{
    res.render('home.handlebars');
}


module.exports.admin = (req,res,next)=>{
    res.render('admin')
}

module.exports.login = (req,res,next)=>{
    res.render('login');
}

function showData(arg,req,res){
res.redirect('/profile')
module.exports.data = arg;
}
module.exports.loginPost = async(req,res,next)=>{
    const{email,password} = req.body;
   
    const userFromDb = await user.User.findOne(
    {
        where : {email : email, password : password}

    }) 

    if(email == "admin@gmail.com" && password == "admin")
    {
        return res.render('admin');
    }

       
        if(userFromDb == null)
        {
           return res.render('login', { message : "User does not exist"});
        }
        
        // res.render('/user-index',{
        //     data:userFromDb
        // })
        
        showData(JSON.stringify(userFromDb),req,res)
    }

   
    

    


module.exports.register = (req,res,next)=>{
    res.render('register');
}


module.exports.registerPost = async(req,res,next)=>{
    const {name,email,phone,password,age,country} = req.body;
console.log(name,email,phone,password,age,country)
    let existingUser = await user.User.findOne(
        {
            where :
            {
                email : email
            }
        }
    );

    if(existingUser)
    {
        return res.render('register',{ message : 'Already registered'});
    
    }

    await user.User.create(
        {
            name : name,
            email : email,
            phone : phone,
            password : password,
            age : age,
            country : country
        }
    );

    res.redirect('/login');
}



  