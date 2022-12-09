import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../lib/modals";
import db from "../../utils/db";

export default async function User(req: NextApiRequest, res: NextApiResponse) {
  await db.connect();
  if (req.body.update_password) {
    const id = req.body._id;
    res.status(200).send(id);
    return 1;
  }
  const id = req.query.user;
  console.log("id: ", id);

  let user = await Users.findOne(
    { _id: id, active: 1 },
    {
      active: 1,
      _id: 1,
      username: 1,
      fullname: 1,
      email: 1,
      notifyme: 1,
      country: 1,
      createdAt: 1,
    }
  );
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("not-exist");
  }
}
