import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { company, role, published } = req.body;
  const result = await prisma.user.create({
    data: {
      company: company,
      role: role,
      published: published,
    },
  });
  res.json(result);
}
