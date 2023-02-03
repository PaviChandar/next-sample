import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <h3>Signed in as {session.user.email}</h3><br />
                <button onClick={() => signOut()} >Sign out</button>
            </div>
        )
    }
    return(
        <div>
            <h3>Not signed in</h3><br />
            <button onClick={() => signIn()} >Sign in</button>
        </div>
    )
}