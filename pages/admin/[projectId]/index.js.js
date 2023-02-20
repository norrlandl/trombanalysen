import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
  const adminId = router.query.adminId;

  // console.log(router.query.adminId);

  return (
    <>
      <h1>Admin dynamic</h1>
      <h2>[id]</h2>
    </>
  );
}
