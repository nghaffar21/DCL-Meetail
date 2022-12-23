import { ReceiveMessage } from "./ui"
import * as utils from '@dcl/ecs-scene-utils'
import Resources from "src/Resources/Resources";




const url = "wss://test-master-api-chat2.wayofwork.app/";
const ws = new WebSocket(url)

export function SendMessage(UserId: string, userName: string) {
  let Token = "";
  let roomId = "";
  log("player connected to " + url);

  ////////////authentication
  ws.onopen = () => {
    log("authentication function >> " + UserId + "  sent ")
    ws.send(
      JSON.stringify({
        "type": "create",
        "params": {
          "user_id": UserId,
          "campaign_id": "630639cdddebe9d22cce9e43"
        }
      })
    )
  }

  //////////////////Listening to income messages
  ws.onmessage = function (response) {
    const { data, type } = JSON.parse(response.data)
    const info = JSON.parse(data)

    log({ type })
    if (type == "message") {
      log("info " + info)
      ReceiveMessage(info.message_content);

    }
    log("response.data > " + response.data)

  };
  ws.onclose = function (event) {

    log("socket closed " + event);
  };
  ws.onerror = function (event) {
    log("error  " + event);
  };


  //////////////////for ping


  // create entity
  const box = new Entity()
  // give entity a shape and transform
  box.addComponent(new BoxShape())
  //box.addComponent(new Transform())
  // keep connection alive
  box.addComponent(
    new utils.Interval(Resources.Variables.KeepSocketAliveTime, () => {
      ws.send(
        JSON.stringify({
          "type": "messageControl",
          "data": "keep alive client"
        }))

      // log('ping sent');
    })
  )

  // add entity to scene
  engine.addEntity(box)

  //////////////////for ping
}



export function SendChatMessages(message: string): void {
  //ws.send( JSON.stringify({ event: 'room:message', data: { message, roomId } }))
  ws.send(
    JSON.stringify({
      "type": "message",
      "data": message
    })
  )
  log("client's message to server>>>>" + " ------ type: message " + " ------ Data : " + message);

}


