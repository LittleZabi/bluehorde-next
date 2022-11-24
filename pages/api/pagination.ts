import type { NextApiRequest, NextApiResponse } from "next";
import { laptopsModal, smartModal, watchesModal } from "../../lib/modals";
import db from "../../utils/db";

export default async function ApiPagination(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();
  let r: number = 0;
  if (req.query.laptops)
    r = await laptopsModal.count({ category: req.query.category });
  if (req.query.phones)
    r = await smartModal.count({ category: req.query.category });
  if (req.query.watches)
    r = await watchesModal.count({ category: req.query.category });

  res.status(200).send(r);
}
