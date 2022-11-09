import { laptopsModal } from "../lib/modals";
import db from "./db";

export const laptopCatItemsCount = async () => {
  await db.connect();
  let t = await laptopsModal.count();
  return t;
};
