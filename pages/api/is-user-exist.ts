import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../lib/modals";
import db from "../../utils/db";

export default async function isUserExist(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.query.username;
  console.log(req.query);
  await db.connect();

  let isExist = await Users.findOne({ username }, { username: 1, _id: 0 });
  console.log("is exist: ", isExist, isExist ? 1 : 0);
  if (isExist) {
    res.send("exist");
  } else {
    res.send("not-exist");
  }
}
