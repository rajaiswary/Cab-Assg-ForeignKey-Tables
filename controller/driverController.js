const {Driver} = require('../model/register');


module.exports.driverRegister = (req,res,next)=>{
    res.render('driver');
}

module.exports.driverRegisterPost = async(req,res,next)=>{

    const {name,email,phone,password,vehicleno,licenseno,} = req.body;
    console.log(name,email,phone,password,vehicleno,licenseno);

    console.log("DRIVER ", Driver);
    let existingUser = await Driver.findOne(
        {
            where : { email : email}
        }
    );

    if(existingUser)
    {
        return res.render('driver',{message : "Already registered"})
    }

    await Driver.create(
        {
            name : name,
            email : email,
            phone : phone,
            password : password,
            vehicleno : vehicleno,
            licenseno : licenseno

        }
    );

    res.redirect('/driverlogin');

}


module.exports.driverLogin = (req,res,next)=>{
    res.render('driverlogin')
}

module.exports.driverLoginPost = async(req,res,next)=>{
    const {email,password} = req.body;
console.log(email,password)
    const userFromDb = await Driver.findOne(
        {
            where : { email : email , password : password}
        }
    )
    
console.log(userFromDb)
    if(userFromDb == null)
    {
        return res.render('driverlogin',{ message : "User does not exist"})
    }
    else
    {
        console.log("line 62")
        console.log(JSON.parse(JSON.stringify(userFromDb)))
        res.render('driver-index',{
            data :[JSON.parse(JSON.stringify(userFromDb))]
        })
    }
}


module.exports.update = (req,res,next)=>{
    Driver.findByPk(req.params.id)
    .then(userFromDb =>{
        res.render('driver-update'),{
            data : userFromDb
        }
    })
}

module.exports.updatePost = async(req,res,next)=>{
    await Driver.update(
        {
            name :      req.body.name,
            email :     req.body. email,
            phone :      req.body.phone,
            password :   req.body.password,
            vehicleno :  req.body.vehicleno,
            licenseno :  req.body.licenseno

        },
        {
             where : {id : req.params.id}
        }
        
    )
    res.redirect('/')
}


module.exports.delete = async(req,res,next)=>{
    let id = req.params.id;
    let userFromDb = await Driver.findByPk(id);
    if(userFromDb != null)
    {
        await Driver.destroy(
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