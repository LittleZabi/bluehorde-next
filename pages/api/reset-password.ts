import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { Users } from "../../lib/modals";
import db from "../../utils/db";
import { generateToken } from "../../lib/user-tokens";
import { randomChar } from "../../utils/common";
export default async function resetPassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();
  const { password, _id } = req.body;
  const user = await Users.findOne(
    {
      _id: _id,
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
    await Users.update(
      { _id },
      { password: bcrypt.hashSync(password, 12), code: randomChar(25) }
    );
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
    res.status(404).send("username not found there! try again");
  }
}
