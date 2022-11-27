import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
import requestIp from "request-ip";
import { reviewsModal, visitorsModal } from "../../lib/modals";
import { commentsLimit, perPostCommentAllow } from "../../utils/config";

export default async function getComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();
  let post_slug = req.query.post_slug;
  const comments = await reviewsModal
    .find(
      {
        post_id: post_slug,
      },
      {
        post_id: 0,
        updatedAt: 0,
        __v: 0,
        ip: 0,
        _id: 0,
      }
    )
    .sort({ _id: -1 })
    .skip(commentsLimit * 0)
    .limit(commentsLimit);
  res.status(200).send(comments);
}
