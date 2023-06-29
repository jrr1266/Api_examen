export const validateLector = (schema)=>(req,res,next)=>{
    try {
        schema.parse(req.body);
        next()
    } catch (error) {
        return res.status(500).json({error:error.issues.map(error=>error.message)})
    }
} 