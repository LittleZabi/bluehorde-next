// import { laptopCatItemsCount } from "../../utils/data-counter";
import type { NextApiRequest, NextApiResponse } from "next";
import { laptopsModal, smartModal } from "../../lib/modals";
import db from "../../utils/db";

export default async function ApiPagination(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.laptops) {
    await db.connect();
    let t = await laptopsModal.count({ category: req.query.category });
    res.status(200).send(t);
  }
  if (req.query.phones) {
    await db.connect();
    let t = await smartModal.count({ category: req.query.category });
    res.status(200).send(t);
  }
}
