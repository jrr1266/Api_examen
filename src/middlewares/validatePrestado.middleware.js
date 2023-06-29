export const validatePrestado = (schema)=>(req,res,next)=>{
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
      res.status(500).json({error:error.issues.map(err=>err.message)}) 
    }
}