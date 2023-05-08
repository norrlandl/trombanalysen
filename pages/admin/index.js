import AdminLayout from "@/components/layout/adminLayout";
import styles from "./index.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";
import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();

  function logoutHandler() {
    signOut(router.replace("/"));
  }

  return (
    <AdminLayout>
      <h1 className={styles.heading_h1}>DASHBOARD</h1>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <div>
        <h4 className={styles.heading_h4}>All projects</h4>
        <h5 className={styles.heading_h5}>Sort by name, role, date</h5>
      </div>
      <ButtonPrimary onClick={logoutHandler}>Log out</ButtonPrimary>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
    // props: {
    //   user: session.user,
    // },
  };
}
