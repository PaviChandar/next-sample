//dynamic routing example

import { useRouter } from "next/router"

const CityItem = () => {
    const router = useRouter()
    const { country, city } = router.query

    return (
        <>
            <h3>{city} is placed in {country}</h3>
        </>
    )
}

export default CityItem