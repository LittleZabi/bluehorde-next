import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { Users } from "../../lib/modals";
import db from "../../utils/db";
import { generateToken } from "../../lib/user-tokens";
export default async function users(req: NextApiRequest, res: NextApiResponse) {
  await db.connect();
  const { password, username } = req.body;
  let confirm = password === "" || username === "";

  if (confirm) {
    res.status(422).send("ErrorOnUserInfo");
    return 0;
  }
  const user = await Users.findOne(
    {
      username: username.trim().toLowerCase(),
      active: true,
    },
    {
      status: 1,
      username: 1,
      fullname: 1,
      email: 1,
      _id: 1,
      country: 1,
      password: 1,
    }
  );
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      let c_ = {
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        _id: user._id,
        country: user.country,
      };
      res.status(200).send({
        ...c_,
        token: generateToken(c_),
      });
      return 0;
    } else {
      res.status(404).send("passwordIncorrect");
    }
  } else {
    res.status(404).send("username or password is incorrect! try again");
  }
}
