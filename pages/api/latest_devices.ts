// import { laptopCatItemsCount } from "../../utils/data-counter";
import type { NextApiRequest, NextApiResponse } from "next";
import { laptopsModal, smartModal, watchesModal } from "../../lib/modals";
import { latestDeviceLimit } from "../../utils/config";
import db from "../../utils/db";

export default async function latest_devices(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = {};
  await db.connect();
  let laptops = await laptopsModal
    .find({}, { name: 1, _id: 0, image: 1, slug: 1 })
    .sort({ _id: -1 })
    .limit(latestDeviceLimit);
  data["laptops"] = laptops;
  let phones = await smartModal
    .find({}, { name: 1, _id: 0, image: 1, slug: 1 })
    .sort({ _id: -1 })
    .limit(latestDeviceLimit);
  data["phones"] = phones;
  let watches = await watchesModal
    .find({}, { name: 1, _id: 0, image: 1, slug: 1 })
    .sort({ _id: -1 })
    .limit(latestDeviceLimit);
  data["watches"] = watches;
  res.status(200).send(data);
}
