import React from 'react'

function BotCard( {bot, clickRemove, deleteBot} ) {
  return (
    <div onClick={() => clickRemove(bot)}>
    <main key={bot.id}>
    <h2>{bot.name}</h2>
    <img src={bot.avatar_url} alt={`image ${bot.bot_class}`}/>
    <div><button onClick={(event) => {
      event.preventDefault()
      deleteBot(bot)
    }}>x</button></div>
    <p>{`Health: ${bot.health}`}</p>
    <p>{`Damage: ${bot.damage}`}</p>
    <p>{`Armor: ${bot.armor}`}</p>
    <p>{`Class: ${bot.bot_class}`}</p>
     </main>
     </div>  
  )
}

export default BotCard
