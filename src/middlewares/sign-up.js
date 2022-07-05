import { authentication } from "../repository/authentication.js";

export const signUpMiddle = async (req, res, next) =>{
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        throw {type: 422, message: "objeto errado"}
    }

    const existingUsers = await authentication.getUser(email);

    if (existingUsers.rowCount > 0) {
        return res.sendStatus(409);
    }
    next();
}