import React from 'react'

function BotCard( {bot, clickRemove, deleteBot} ) {
  return (
    <div className="card-container">
    <div className="card" onClick={() => clickRemove(bot)}>
    <main key={bot.id}>
    <h2>{bot.name}</h2>
    <div >
    <img src={bot.avatar_url} alt={`image ${bot.bot_class}`}/>
    <div className="deleteBtn">
      <button onClick={(event) => {
      event.preventDefault()
      deleteBot(bot)
    }}>x</button></div>
    </div>
    <p>{`Health: ${bot.health}`}</p>
    <p>{`Damage: ${bot.damage}`}</p>
    <p>{`Armor: ${bot.armor}`}</p>
    <p>{`Class: ${bot.bot_class}`}</p>
     </main>
     </div>  
     </div>
  )
}

export default BotCard
