import bcrypt from 'bcrypt';
import { authentication } from '../repository/authentication.js';


export const signUp = async (req, res) => {
    const { name, email, password } = req.body;  
    const hashedPassword = bcrypt.hashSync(password, 12);
  
    await authentication.insertUser(name, email, hashedPassword);
  
    res.sendStatus(201);
    
};