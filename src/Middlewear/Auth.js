
const authAdmin = (req,res,next)=>{
    console.log('running admin');
    const token = "xy"
    const IsAuthorized = token === 'xyz';

    if(!IsAuthorized){
        res.status(401).send("not authorized");
    }
    else{
        console.log("authorized user!!");
        next();
    }
}
const authUser = (req,res,next)=>{
    console.log('running User');
    const token = "xyz"
    const IsAuthorized = token === 'xyz';

    if(!IsAuthorized){
        res.status(401).send("not authorized");
    }
    else{
        console.log("authorized user!!");
        next();
    }
}


module.exports = {authAdmin,authUser,}