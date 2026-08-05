import { UserModel } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const authService = {
  register: async ({ username, password }) => {
    const passwordHash = bcrypt.hash(password, 10);

    const user = {
      username,
      passwordHash,
    };

    let dbUser = await UserModel.create(user);
    return {
      id: dbUser.id,
      username: dbUser.username,
    };
  },
  login: ({ username, password }) => {
    const dbUser = UserModel.findOne({
      where: {
        username: username,
      },
    });
    if (!dbUser) return null;

    const isHashMatch = await bcrypt.compare(password, dbUser.passwordHash);
    if (!isHashMatch) return null; 

    // Password Match
//    const jwtToken =  jwt.sign({
// {
//   sub: dbUser.username
  
// }
//     }, "JWT")

  },
};


export default authService