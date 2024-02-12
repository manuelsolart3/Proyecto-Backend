import jwt from 'jsonwebtoken'
import { token_secret } from "../config.js";

export const authrequire = (req, res, next)=> {
const {token} = req.cookies;

if (!token) 
return res.status(401).json({message: "no token, autorizacion denegada" });

jwt.verify(token , token_secret, (err, user)=>{
    if (err) return res.status(401).json({message: "invalid token " });

    req.user = user
next()
});
}



