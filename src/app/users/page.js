
import Link from "next/link";
// import getUsers from '../../../services/getUsers'


// Api call from next api create files
async function getUsers() {
    let result = await fetch("http://localhost:3000/api/users");
    result = await result.json();
    return result;
}

export default async function Page() {
    const data = await getUsers();
    console.log(data);
    // const getUserList = getUsers();
    // const users = await getUserList;
    // console.log(users)

    return (

        <div>
            <h1>User List</h1>
            {/* {
                users.map((user) => (
                    <h2 key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </h2>
                ))
            } */}
            {
                data.map((items, index) => (
                    <div key={index}>
                        <Link href={`users/${items.id}`}>{items.name}</Link>
                        <br />
                    </div>
                ))
            }
        </div>
    )
}