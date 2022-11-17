import { NextApiRequest, NextApiResponse } from "next";
import { categoriesModal, laptopsModal, smartModal } from "../../lib/modals";
import { searchResultLimit } from "../../utils/config";
import db from "../../utils/db";

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let q = req.query.q;
  let length = 0;
  if (q) {
    await db.connect();
    let final = {};
    let phones = await smartModal
      .find(
        { name: { $regex: new RegExp(".*" + q + ".*"), $options: "i" } },
        { _id: 0, name: 1, slug: 1, image: 1 }
      )
      .limit(searchResultLimit);
    length += phones.length;
    final["phones"] = phones;
    let laptops = await laptopsModal
      .find(
        { name: { $regex: new RegExp(".*" + q + ".*"), $options: "i" } },
        { _id: 0, name: 1, slug: 1, image: 1 }
      )
      .limit(searchResultLimit);
    length += laptops.length;
    final["laptops"] = laptops;
    let categories = await categoriesModal
      .find(
        {
          category: {
            $regex: new RegExp(".*" + q + "*."),
            $options: "i",
          },
          $and: [{ type: "phone" }],
        },
        { _id: 0, category: 1, slug: 1 }
      )
      .limit(searchResultLimit);
    length += categories.length;
    final["categories"] = categories;
    final["data_len"] = length;
    res.status(200).send(final);
  }
}
