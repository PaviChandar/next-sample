import { use, useEffect, useState } from "react";

export default function GetServerSidePropsExample({ users }) {
    const [credentials, setCredentials] = useState([])
   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(
                res => res.json())
            .then(data => {
                setCredentials(data)
            })
            .catch((e) => { console.log("Error : ", e) })
    }, [])

    return (
        <>
            <table>
                <tr>
                    <th colSpan={3}> React JS client-side render</th>
                </tr>
                <div>
                    {
                        credentials.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </div>
            </table>
            <br />
            <table>
                <tr>
                    <th colSpan={3}>Next JS server-side render</th>
                </tr>
                <div>
                    {
                        users && users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </div>
            </table>
        </>
    )

}

export async function getServerSideProps({ req, res }) {
    console.log("Consoling the data : ", res)
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await data.json()

    return { props: { users } }
}