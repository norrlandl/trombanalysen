import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       company: "Tromb",
//       role: "Basic",
//       firstName: "Elvira",
//       lastName: "Öberg",
//     },
//   });
//   console.log(user);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

/*

***** CODE LIBARY *****

Create:

 const handleSubmit = async (e) => {
    if (company && role) {
      // send a request to the server.
      try {
        const body = {
          // id,
          company,
          role,
          firstName,
          lastName,
          // email,
          // password,
          // createdAt,
          // updatedAt,
        };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/admin/users");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
  };



***** PRISMA *****

CRUD: https://www.youtube.com/watch?v=jvXct3Ud18k

https://www.youtube.com/watch?v=L5JU1oR29TM

https://www.youtube.com/watch?v=aim8Mk-ETK0

https://www.noahbieler.com/blog/a-crud-web-app-using-nextjs-13-iron-session-and-prisma

https://nextdev1111.hashnode.dev/crud-functions-using-prisma-nextjs-and-supabasepostgress-database#heading-update-function

https://daily-dev-tips.com/posts/prisma-creating-a-upvotes-one-to-many-relation/


***** SASS *****
https://www.codeconcisely.com/posts/how-to-use-scss-with-css-modules-in-nextjs/


*/
