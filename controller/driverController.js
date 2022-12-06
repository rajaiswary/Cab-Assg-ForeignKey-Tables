const driver = require('../model/register');


module.exports.driverRegister = (req,res,next)=>{
    res.render('driver');
}

module.exports.driverRegisterPost = async(req,res,next)=>{

    const {name,email,phone,password,vehicleno,licenseno,} = req.body;
    console.log(name,email,phone,password,vehicleno,licenseno);

    let existingUser = await driver.findOne(
        {
            where : { email : email}
        }
    );

    if(existingUser)
    {
        return res.render('driver',{message : "Already registered"})
    }

    await driver.create(
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