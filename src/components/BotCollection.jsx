import {useEffect, useState} from 'react'
import BotList from './BotList'
import YourBotArmy from './YourBotArmy'


function BotCollection() {
    const [bots, setbots] = useState([])

    useEffect(() => {
        async function fetchBotData() {
            await fetch(`http://localhost:3000/bots`)
                  .then((resp) => resp.json())
                  .then((data) => setbots(data))
                  .catch((error) => console.error(error))
        }
        fetchBotData()
    }, [])
    
    function addBotToList(bot) {
      setbots(bots.map((botAdded) => (botAdded.id === bot.id ? {...botAdded, army: true } : botAdded)))
    }

    function removeBot(bot) {
      setbots(bots.map((botAdded) => (botAdded.id === bot.id ? {...botAdded, army: false} : botAdded)))
    }

    function deleteBot(bot) {
      const deletedItem = bots.filter((botAdded) => botAdded.id !== bot.id)
      setbots(() => deletedItem)
    }
    const onOpen = bots.map((bot) => {
        return (
          <>
        <BotList bot={bot} clickEvent={addBotToList} deleteBot={deleteBot}/>
        </>
        )
    })

  return (
    <>
        <h1>WELCOME:</h1>
        <h1>INFINITY BOTS</h1>
        <YourBotArmy bots={bots.filter((botAdded) => botAdded.army)} clickEvent={addBotToList} clickRemove={removeBot} deleteBot={deleteBot} />
        {onOpen}
    </>
  )
}

export default BotCollection
