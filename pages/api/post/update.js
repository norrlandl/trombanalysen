import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { published } = req.body;
  const result = await prisma.user.update({
    where: {
      id: req.query.id,
    },
    // data: {
    //   published: published,
    // },
  });
  res.json(result);
}
