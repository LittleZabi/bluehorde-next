import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../lib/modals";
import db from "../../utils/db";

export default async function forgotPassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();
  const t = req.body.user;
  if (!t || t === "")
    res.status(422).send("Enter your username or email address");
  const user = await Users.findOne(
    { $or: [{ email: t }, { username: t }] },
    { email: 1, username: 1 }
  );
  if (user) {
    /// send email to user from here
    res.status(200).send("success");
  } else {
    res.status(404).send("user not found! username or email is incorrect!");
  }
  res.send(user);
}
