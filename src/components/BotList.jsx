import React from 'react'
import { Link } from 'react-router-dom'

function BotList({ bot, clickEvent, deleteBot }) {
  return (
    <>
        <div key={bot.id} onClick={() => clickEvent(bot)}>
        <article>
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt={`${bot.bot_class} bot`}/>
        <Link to={`/details/${bot.id}`}>View Bot Profile</Link>
        </article>
        </div>
        <button onClick={(event) => {
          event.preventDefault()
          deleteBot(bot)
          }}>x</button>
    </>
  )
}

export default BotList
