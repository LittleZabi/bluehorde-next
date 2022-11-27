import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
import requestIp from "request-ip";
import { visitorsModal } from "../../lib/modals";
import blueRex from "../../utils/blueRex";

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
      let location = {
        name: "Pakistan",
        code: "pk",
        capital: "Islamabad",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1920px-Flag_of_Pakistan.svg.png",
      };
      try {
        let res = await blueRex.get("https://api.ipregistry.co/?key=tryout");
        if (res) {
          let g = JSON.parse(res);
          location = {
            name: g.location.country.name,
            code: g.location.country.code,
            capital: g.location.country.capital,
            flag: g.location.country.flag?.wikimedia,
          };
        }
      } catch (e) {}
      await visitorsModal.create({
        ip: clientIp,
        location,
        visits: 1,
      });
    }
    res.send(1);
    return 1;
  }
}
