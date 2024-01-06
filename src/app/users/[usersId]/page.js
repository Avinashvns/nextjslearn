
// import Link from "next/link";
// import getUsers from '../../../../services/getUsers'

// export default async function Page(props) {
//     const getUserList = getUsers();
//     const users = await getUserList;
//     const currentId = props.params.usersId;
//     const userData = users[currentId - 1]
//     console.log(users[currentId - 1])
//     return (
//         <div>
//             <h1>User List</h1>
//             <h1>{userData.id}</h1>
//             <h1>{userData.name}</h1>
//         </div>
//     )
// }

// static site generation code
// export async function generateStaticParams() {
//     const getUserList = getUsers();
//     const users = await getUserList;
//     return users.map((user) => ({
//         usersId: user.id.toString()
//     }))
// }

async function getUsers(id) {
    let results = await fetch(`http://localhost:3000/api/users/${id}`);
    results = await results.json();
    return results.result;
}


export default async function Page({ params }) {
    console.log(params);
    const user = await getUsers(params.usersId)
    console.log(user)
    return (
        <div>
            <h1>User details</h1>
            <h2>Name: {user.name}</h2>
            <h2>Gender :{user.gender}</h2>
        </div>
    )
}