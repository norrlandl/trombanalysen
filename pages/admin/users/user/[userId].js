import { ButtonPrimary } from "@/components/ui/buttons";
import { prisma } from "../../../../prisma/client";

export default function UserDetails({ user }) {
  console.log(user);

  const { id, firstName, lastName, email, company, role } = user;

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2> {email}</h2>
      <ButtonPrimary link={`/admin/users/`}>Tillbaka</ButtonPrimary>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { userId } = context.query;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
