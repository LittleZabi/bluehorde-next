import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { Users } from "../../lib/modals";
import db from "../../utils/db";
import { randomChar } from "../../utils/common";
// import sendEmailTo from "../../emails-library/library";
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
    res
      .status(422)
      .send("Error on user information please check it again and submit!");
    return 0;
  }
  const isUNExsit = await Users.findOne(
    { username: username.trim().toLowerCase() },
    { username: 1, _id: 0 }
  );
  if (isUNExsit) {
    res
      .status(422)
      .send("Error username is already taken please choose another username!");
    return 0;
  }
  const isEMexist = await Users.findOne({ email }, { _id: 0, email: 1 });
  if (isEMexist) {
    res.status(422).send("Email is registered! login with email or choose new");
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
    // sendEmailTo("zohaibjozvi@gmail.com", "helloworld");
    res.status(200).send("success");
  } catch (e) {
    console.error(e);
    res.status(422).send("Error occured during sign up! try again later");
  }
}
