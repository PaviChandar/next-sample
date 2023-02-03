//getStaticProps with dynamic params

import Link from "next/link"

function PostList({ posts }) {
    return (
        <>
            <h1>List of posts(dynamic params)</h1>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} >
                                <h2>{post.id} {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
            <Link href="/">Back to home</Link>
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0, 10)
            // posts: data
        }
    }
}