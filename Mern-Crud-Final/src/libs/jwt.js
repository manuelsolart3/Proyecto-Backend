import { token_secret } from "../config.js";
import jwt  from "jsonwebtoken";

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            token_secret,
            {
                expiresIn: "1d",
            },   
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    });
};
