import { UserItem } from "./user-item";

export default function UserList(props) {
  const fetchData = async () => {
    const response = await fetch(`/api/post/get`);
    const data = await response.json();
    console.log(data);
  };

  const { items } = props;

  console.log(`ITEMS: ${items}`);

  return (
    <table>
      {data.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          role={user.role}
          company={user.company}
          firstName={user.firstName}
          lastName={user.lastName}
          createdAt={user.createdAt}
        />
      ))}
    </table>
  );
}
