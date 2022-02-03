//@desc     Get all hospitals
//@route    GET /api/v1/hospitals
//@access   Public
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Get all Hospitals'});
}

//@desc     Get single hospitals
//@route    GET /api/v1/hospitals/id
//@access   Public
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Get Hospital ${req.params.id}`});
}

//@desc     Create a hospitals
//@route    POST /api/v1/hospitals
//@access   Private
exports.createHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Create a Hospitals'});
}

//@desc     Update a hospital
//@route    PUT /api/v1/hospitals/id
//@access   Private
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Update Hospital ${req.params.id}`});
}

//@desc     Delete a hospital
//@route    PUT /api/v1/hospitals/id
//@access   Private
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Delete Hospital ${req.params.id}`});
}

