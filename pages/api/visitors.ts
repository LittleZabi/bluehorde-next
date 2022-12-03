import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
import requestIp from "request-ip";
import { visitorsModal } from "../../lib/modals";

export default async function visitors(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientIp = requestIp.getClientIp(req);
  if (req.query.set) {
    await db.connect();
    let find = await visitorsModal.find({ ip: clientIp });
    if (find.length > 0) {
      await visitorsModal.update(
        { ip: clientIp },
        { visits: find[0].visits + 1 }
      );
    } else {
      await visitorsModal.create({
        ip: clientIp,
        visits: 1,
      });
    }
    res.send(1);
    return 1;
  }
}
