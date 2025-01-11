const midelwareVerifyUser = (req,res,next)=>{
if(req.session.isActive){
    next();
}else{
    res.redirect('/')
};

};
module.exports= midelwareVerifyUser;
