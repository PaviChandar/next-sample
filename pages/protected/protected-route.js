async function getAuthSession(context) {
    return context.req.session.get("user")
}

const ProtectedSSRoute = ({ authenticated, user }) => {
    if (!authenticated) {
        return (
            <div>
                <h3>You are not authenticated!</h3>
            </div>
        )
    }
    return (
        <div>
            <h3>You are authenticated as : {user}</h3>
        </div>
    )
}

export function getServerSideProps(context) {
    const authSession = getAuthSession(context)
    if (!authSession) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            },
            props: {
                authenticated: false
            }
        }
    }

    return {
        props: {
            authenticated: true,
            user: authSession.user
        }
    }
}

export default ProtectedSSRoute