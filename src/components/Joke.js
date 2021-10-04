import React, { useEffect, useState } from 'react'
export default function Joke() {

    const [jokeFromApi, setJokeFromApi] = useState(null)

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(data => data.json())
        .then(json => setJokeFromApi(json))
    }, [])

    if(!jokeFromApi) return <div>Loading...</div>
    
    return (
        <div>
            <div>{jokeFromApi.value}</div>
        </div>
    )
}
