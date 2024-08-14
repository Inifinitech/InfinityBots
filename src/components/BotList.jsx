import React from 'react'
import { Link } from 'react-router-dom'

function BotList({ bot, clickEvent, deleteBot }) {
  return (
    <>
      <h1>Bot List</h1>
        <div className="card-container">
        <div className="card" key={bot.id}>
        <button className="deleteBtn"
         onClick={(event) => {
          event.stopPropagation()
          deleteBot(bot)
          }}>x</button>
        <article>
        <h2>{bot.name}</h2>
        <div onClick={() => clickEvent(bot)}>
        <img src={bot.avatar_url} alt={`${bot.bot_class} bot`}/>
        </div>
        <Link to={`/details/${bot.id}`}>View Bot Profile</Link>
        </article>
        </div>
          </div>
    </>
  )
}

export default BotList
