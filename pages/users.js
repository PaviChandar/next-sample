//getStaticProps example
import Link from "next/link"

function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p><b>{user.email}</b></p>
                        </div>
                    )
                })
            }
             <Link href="/">Back to home</Link>
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}