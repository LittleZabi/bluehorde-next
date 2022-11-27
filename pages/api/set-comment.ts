import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
import requestIp from "request-ip";
import { reviewsModal, visitorsModal } from "../../lib/modals";
import { perPostCommentAllow } from "../../utils/config";

export default async function setComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.username && req.body.message) {
    const clientIp = requestIp.getClientIp(req);
    let username = req.body.username;
    let message = req.body.message;
    let post_slug = req.body.post_slug;
    await db.connect();
    const check_ = await reviewsModal.find({
      ip: clientIp,
      post_id: post_slug,
    });
    if (check_.length > perPostCommentAllow) {
      res
        .status(422)
        .send(
          `You can set only ${perPostCommentAllow} reviews or comments on a post!`
        );
    } else {
      let location = await visitorsModal.find(
        { ip: clientIp },
        { location: 1, _id: 0 }
      );
      let post = await reviewsModal.create({
        username,
        comment: message,
        ip: clientIp,
        post_id: post_slug,
        location: location[0].location,
      });
      res.send(post);
      return 1;
    }
  } else {
    res.status(422).send("data is missing in comment request");
  }
}
