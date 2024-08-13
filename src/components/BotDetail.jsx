import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

function BotDetail() {
const [bots, setbots] = useState([])
    
    const params = useParams()
    const botId = params.id

    useEffect(() => {
        async function fetchBotData() {
            await fetch(`http://localhost:3000/bots/${botId}`)
                  .then((resp) => resp.json())
                  .then((data) => setbots(data))
                  .catch((error) => console.error(error))
        }
        fetchBotData()
    }, [botId])

  return (
    <>
    <header>
    <NavBar />
    </header>
    <div>
    <main key={bots.id}>
    <h2>{bots.name}</h2>
    <img src={bots.avatar_url} alt={`image ${bots.bot_class}`}/>
    <p>{`Health: ${bots.health}`}</p>
    <p>{`Damage: ${bots.damage}`}</p>
    <p>{`Armor: ${bots.armor}`}</p>
    <p>{`Class: ${bots.bot_class}`}</p>
     </main>
     </div>    
    </>
  )
}

export default BotDetail
