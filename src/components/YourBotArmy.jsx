import BotCard from './BotCard'
function YourBotArmy({ bots, clickEvent, clickRemove, deleteBot }) {

  const selectedBot = bots.map((bot) => {
    return (
      <BotCard bot={bot} clickEvent={clickEvent} clickRemove={clickRemove} deleteBot={deleteBot}/>
    )
  })
  return (
    <>
    <h2>BOT ARMY</h2>
    {selectedBot}
    <div id="army-container"></div>
    </>
  )
}

export default YourBotArmy
