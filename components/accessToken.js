import { useSession } from "next-auth/react";

export default function Component() {
    const { data } = useSession()
    const { accessToken } = data

    return (
        <div>
            <h3>Access Token : {accessToken}</h3>
        </div>
    )
}