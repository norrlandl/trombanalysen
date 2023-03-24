import Link from "next/link";

export default function UserItem(props) {
  const { id, company, role, firstName, lastName, createdAt } = props;

  // const date = newDate(createdAt).toLocaleDateString("en-Us");

  // const updateLink = `/admin/users/${id}`;

  return (
    <tr>
      <td>
        <img src="" alt="" />
      </td>
      <td>
        {firstName} {lastName}
      </td>
      <td>{role}</td>
      <td>{company}</td>
      <td>{date}</td>
      <td>
        <Link href={updateLink}>Update</Link>
      </td>
    </tr>
  );
}
