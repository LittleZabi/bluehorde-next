import { laptopsModal } from "../lib/modals";
import db from "./db";

export const laptopCatItemsCount = () => {
  db.connect();
  let t = laptopsModal.count();
  return t;
};
