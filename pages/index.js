import Image from "next/image"
import Link from "next/link"
import Router from "next/router"
import profilepic from "/home/asplap1449/next-sample/public/images/profile.jpg"

const cityList = [
  {
    country: "USA",
    city: "MysticFalls"
  },
  {
    country: "INDIA",
    city: "Chennai"
  },
  {
    country: "UK",
    city: "London"
  },
]

const Home = (props) => {
  return (
    <>
      <h1>Hi Next JS</h1>
      <h2>Welcome to <Link href="/posts/first-post">Next JS</Link> </h2>
      <Image src="/images/profile.jpg" alt="Remote images" width={100} height={100} priority /><br />
      <Link href='/users'>Users </Link><br />
      <Link href='/posts'>Posts</Link>
      {/* <Image src={profilepic} alt="Image optimization" /> */}
      <ul>
        {
          cityList && cityList.map((item, index) => (
            <li key={index} >
              <Link href={`/${item.country}/${item.city}`} >
                {item.country} - {item.city}
              </Link>
            </li>
          ))
        }
      </ul>
      <h3>Next JS Shallow Routing</h3>
      <span onClick={() => Router.push('/?counter=1', undefined, { shallow: true })} >Reload</span>
      <div>Next stars : {props.stars}</div>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await response.json()

  return {
    props: { stars: data.stargazers_count }
  }
}

export default Home
