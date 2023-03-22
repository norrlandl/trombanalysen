import React from "react";

export async function getServerSideProps({ params }) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return {
    props: {
      users: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default async function Update({ params }) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return { user };

  // const fetchProduct = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://codexplained.se/electronics.php?id=" + params.id
  //     );
  //     const data = await response.json();
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <title>Update User</title>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
}
