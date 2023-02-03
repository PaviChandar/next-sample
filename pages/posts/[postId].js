function Post({ post }) {
    return (
        <>
            <h2>{post.id}{" "}{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export async function getStaticPaths(post) {
    // console.log("Data : ", post)
    // const paths = post.length && post.map((postttttt) => ({
    //     params: { postId: `${params.postId}` }
    // }))

    // return {
    //     paths,
    //     fallback: false
    // }


    // const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

    // const paths = posts.map(post => ({
    //     params : {id : post.id}
    // }))
    // return{
    //     paths,
    //     fallback:true
    // }

    return {
        paths: [
            {
                params: { postId: '1' },
            },
            {
                params: { postId: '2' },
            },
            {
                params: { postId: '3' },
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const { params } = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post: data,
            revalidate: 10
        }
    }
}