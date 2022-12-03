import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { Users } from "../../lib/modals";
import db from "../../utils/db";
import { generateToken } from "../../lib/user-tokens";
import { randomChar } from "../../utils/common";
export default async function users(req: NextApiRequest, res: NextApiResponse) {
  await db.connect();
  const { password, username, email, fullname, repassword, notifyme, country } =
    req.body;
  let confirm =
    password !== repassword ||
    username === "" ||
    email === "" ||
    fullname === "";
  if (confirm) {
    res.send("ErrorOnUserInfo");
    return 0;
  }
  const isUNExsit = await Users.findOne(
    { username: username.trim().toLowerCase() },
    { username: 1, _id: 0 }
  );
  if (isUNExsit) {
    res.send("UsernameExist");
    return 0;
  }
  const isEMexist = await Users.findOne({ email }, { _id: 0, email: 1 });
  if (isEMexist) {
    res.send("EmailExist");
    return 0;
  }
  try {
    const user = new Users({
      username: username.trim().toLowerCase(),
      fullname,
      email,
      password: bcrypt.hashSync(password, 12),
      country,
      notifyme: notifyme,
      active: false,
      code: randomChar(25),
    });
    const createdUser = await user.save();
    res.status(200).send({
      username: createdUser.username,
      fullname: createdUser.fullname,
      email: createdUser.email,
      _id: createdUser._id,
      country: createdUser.country,
      token: generateToken(createdUser),
    });
  } catch (e) {
    console.error(e);
    res.status(422).send("ErrorDuringProcess");
  }
}
