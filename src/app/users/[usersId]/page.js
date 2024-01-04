
import Link from "next/link";
import getUsers from '../../../../services/getUsers'

export default async function Page(props) {
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = props.params.usersId;
    const userData = users[currentId - 1]
    console.log(users[currentId - 1])
    return (
        <div>
            <h1>User List</h1>
            <h1>{userData.id}</h1>
            <h1>{userData.name}</h1>
        </div>
    )
}