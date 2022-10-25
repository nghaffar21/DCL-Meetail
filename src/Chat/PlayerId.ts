import { getUserData } from "@decentraland/Identity"
import { SendMessage } from "./chat"


export function PlayerIdentity()
{
executeTask(async () => {
    let data = await getUserData()
    SendMessage(data.userId,data.displayName);
 
  })

onPlayerDisconnectedObservable.add((player) => {
  log("player left: ", player.userId)

})



}