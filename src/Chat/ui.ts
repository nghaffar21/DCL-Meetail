import { SendChatMessages } from "./chat"
import * as utils from '@dcl/ecs-scene-utils'

let offsetPosY = 50;
let offsetPosX = 0;
let isOpen = false;
let screenSpaceUI = newCanvasGenerator()

function newCanvasGenerator(){
  return new UICanvas()
}

const toolTexture = new Texture('images/chaticon.jpg')
const alwaysOn = new UIContainerRect(screenSpaceUI)
alwaysOn.positionY = "-400px"
alwaysOn.hAlign = 'bottom'
alwaysOn.vAlign = 'center'
//alwaysOn.isPointerBlocker = false
//Chat Icon
const openImage = new UIImage(alwaysOn, toolTexture)
openImage.name = 'clickable-image'
openImage.width = '50px'
openImage.height = '50px'
openImage.sourceWidth = 500
openImage.sourceHeight = 500
openImage.isPointerBlocker = true
openImage.onClick = new OnClick(() => {
  if (!isOpen) {
    log('clicked on the open image')

    container.visible = true
    container.isPointerBlocker = true
    isOpen = true;
  }
  else {
    container.visible = false
    container.isPointerBlocker = false
    isOpen = false;
  }
})
let container = new UIInputText(screenSpaceUI)
container.width = '50%'
container.height = '100%'
container.focusedBackground = new Color4(0, 0, 1,0.5)
// container.focusedBackground = Color4.White();
container.hAlign = 'center'
container.vAlign = 'bottom'
container.visible = false
container.positionY = '50'
container.isPointerBlocker = true
container.placeholder = "Write message here"
container.fontSize = 15

container.textWrapping = true

//container.placeholderColor = Color4.Black()

// // ------- the background image -------
// const backgroundImage = new UIImage(screenSpaceUI, toolTexture)
// backgroundImage.width = '50%'
// backgroundImage.height = '100%'
// backgroundImage.hAlign = 'center'
// backgroundImage.vAlign = 'bottom'
// //backgroundImage.visible = false
// backgroundImage.positionY = '50'
// backgroundImage.isPointerBlocker = false

// ----- Title of the chat box -----
const title = new UIText(container)
title.value = "WOW In The Metaverse"
title.color = Color4.White()
title.fontSize = 20
title.positionX = offsetPosX-60
title.vAlign = "top"
title.hAlign = "center"

container.onTextSubmit = new OnTextSubmit((x) => {
  const text = new UIText(container)
  //text.textWrapping = true

  // text.shadowColor = Color4.Red()
  // text.shadowOffsetY = 3
  // text.shadowOffsetX = -3

  // text.outlineWidth=1
  // text.outlineColor=Color4.Yellow()

  if(x.text.length > 84) {
    container.placeholder = "Messages can be maximum 84 characters(one line)"
  } else {
    text.value = "You: " + x.text
    text.color = Color4.White()
    text.width = "100%"
    text.height = "100px"
    text.vAlign = "top"
    text.hAlign = "left"
    text.fontSize = 12
    ChatTextOffset();
    log("Offx " + offsetPosX + " OffY " + offsetPosY)
    text.positionX = offsetPosX + "px"
    text.positionY = offsetPosY + "px"
    container.placeholder = "Write message here"
    //container.color = Color4.Gray()

    SendChatMessages(x.text);
  }

})

export function ReceiveMessage(supportMsg: string) {
  const text = new UIText(container)
  text.value = "Support: " + supportMsg
  text.color = Color4.Gray()
  text.width = "100%"
  text.height = "100px"
  text.vAlign = "top"
  text.hAlign = "left"
  text.fontSize = 12
  ChatTextOffset();
  log("Offx " + offsetPosX + " OffY " + offsetPosY)
  text.positionX = offsetPosX + "px"
  text.positionY = offsetPosY + "px"
}
export function ChatTextOffset() {
  offsetPosY = offsetPosY - 15;

 if (offsetPosY <= -475) {
   container.onTextSubmit = new OnTextSubmit((x) => {
     container.placeholder = "You have reached the maximum chat limit. Please reload the scene. Your chat history is saved on our servers."
   })
   //screenSpaceUI=null
   //container = null
  }

}





























//scrol view
// const UiScrollRect = new UIScrollRect(screenSpaceUI)
// UiScrollRect.isVertical = true;
// UiScrollRect.width = '40%'
// UiScrollRect.height = '40%'
// //UiScrollRect.color = Color4.FromHexString(`#7c92bcff`)
// UiScrollRect.hAlign = 'center'
// UiScrollRect.vAlign = 'bottom'
// UiScrollRect.positionY = '50'
// UiScrollRect.isPointerBlocker = false


// const container = new UIContainerRect(screenSpaceUI)
// container.width = '40%'
// container.height = '40%'
// container.color = Color4.FromHexString(`#7c92bcff`)
// container.hAlign = 'center'
// container.vAlign = 'bottom'
// container.visible = false
// container.positionY = '50'
// container.isPointerBlocker = false

//close button
// const closeIcon = new UIImage(container, new Texture('images/close-icon3.png'))
// closeIcon.name = 'clickable-image'
// closeIcon.width = '50px'
// closeIcon.height = '50px'
// closeIcon.hAlign = 'right'
// closeIcon.vAlign = 'top'
// closeIcon.sourceWidth = 128
// closeIcon.sourceHeight = 128
// closeIcon.isPointerBlocker = true
// closeIcon.onClick = new OnClick(() => {
//   container.visible = false
//   container.isPointerBlocker = false
//   log('clicked on the close image ', container.visible)
// })












// --- INVENTORY
// export const inventoryContainer = new UIContainerStack(container)
// inventoryContainer.spacing = 15
// inventoryContainer.stackOrientation = UIStackOrientation.HORIZONTAL
// inventoryContainer.width = '50%'
// inventoryContainer.height = 130
// inventoryContainer.color = Color4.FromHexString(`#42a4f4ff`)
// inventoryContainer.hAlign = 'right'
// inventoryContainer.vAlign = 'top'
// inventoryContainer.stackOrientation = UIStackOrientation.HORIZONTAL
// inventoryContainer.positionX = -10
// inventoryContainer.positionY = -50

// export const toolContainer = new UIContainerRect(container)
// toolContainer.width = '30%'
// toolContainer.height = 400
// toolContainer.positionY = -80
// toolContainer.positionX = 50
// toolContainer.color = Color4.FromHexString('#3a609eff')
// toolContainer.hAlign = 'left'
// toolContainer.vAlign = 'top'

// const toolTitle = new UIText(toolContainer)
// toolTitle.value = 'Tool:'
// toolTitle.fontSize = 20
// toolTitle.vAlign = 'top'
// toolTitle.hAlign = 'left'
// toolTitle.width = '150px'
// toolTitle.height = '35px'
// toolTitle.positionX = 10
// toolTitle.paddingLeft = 10
// toolTitle.color = Color4.FromHexString('#0F1217ff')

// const toolName = new UIText(toolContainer)
// toolName.value = 'PickAxe'
// toolName.fontSize = 20
// toolName.vAlign = 'top'
// toolName.width = '150px'
// toolName.height = '35px'
// toolName.positionX = 20
// toolName.paddingTop = 10
// toolName.color = Color4.FromHexString('#0F1217ff')

// const toolPic = new UIImage(toolContainer, toolTexture)
// toolPic.hAlign = 'center'
// toolPic.vAlign = 'center'
// toolPic.sourceLeft = 0
// toolPic.sourceTop = 0
// toolPic.sourceWidth = 1000
// toolPic.sourceHeight = 1000
// toolPic.width = `200px`
// toolPic.height = `200px`
// toolPic.positionX = 20
// toolPic.positionY = -30

// const durabilityLabel = new UIText(toolContainer)
// durabilityLabel.value = 'Durability'
// durabilityLabel.fontSize = 20
// durabilityLabel.vAlign = 'bottom'
// durabilityLabel.hAlign = 'left'
// durabilityLabel.positionX = '15px'
// durabilityLabel.width = '75px'
// durabilityLabel.height = '30px'
// durabilityLabel.paddingBottom = 10
// durabilityLabel.color = Color4.FromHexString('#0f1217ff')

// const durabilityBg = new UIContainerRect(toolContainer)
// durabilityBg.color = Color4.Gray()
// durabilityBg.width = '180px'
// durabilityBg.height = '25px'
// durabilityBg.vAlign = 'bottom'
// durabilityBg.hAlign = 'right'
// durabilityBg.positionX = -55
// durabilityBg.positionY = 5

// export const durability = new UIContainerRect(durabilityBg)
// durability.color = Color4.FromHexString('#426d48ff')
// durability.width = '100px'
// durability.height = '25px'
// durability.vAlign = 'center'
// durability.hAlign = 'left'



// in-world trigger for UI
const uiTrigger = new Entity()
const transform = new Transform({
  position: new Vector3(6.5, 16, 5),
  scale: new Vector3(0.5, 0.5, 0.5),
  rotation: Quaternion.Euler(0, 180, 0)
})
uiTrigger.addComponent(transform)

uiTrigger.addComponent(
  new OnClick(() => {
    container.visible = true
    container.isPointerBlocker = true
  })
)

uiTrigger.addComponent(new BoxShape())
engine.addEntity(uiTrigger)

const uiTriggerMaterial = new Material()
uiTriggerMaterial.albedoTexture = toolTexture

uiTrigger.addComponent(uiTriggerMaterial)

uiTrigger.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)))

// ----- Make the ui dissapear if the player is not in Xinnux floor -----

//create entity
const box = new Entity()

//create shape for entity and disable its collision
let boxShape = new BoxShape()
box.addComponent(boxShape)
box.getComponent(BoxShape).withCollisions = false

//set transform component with initial position
box.addComponent(new Transform({
  position: new Vector3(7, 15, 10),
  scale: new Vector3(1,1,1) //7,7,20
  }))

// create trigger area object, setting size and relative position
let triggerBox = new utils.TriggerBoxShape(new Vector3(13,5,15), new Vector3(0,0,0))
box.getComponent(BoxShape).visible = false

// utils.TriggerSystem.instance.setCameraTriggerShape(
//   new utils.TriggerBoxShape(
//     new Vector3(5, 5, 5),
//     new Vector3(0, -0.91, 0)
//   )
// )

//create trigger for entity
box.addComponent(
  new utils.TriggerComponent(
    triggerBox, //shape
    {
      onCameraEnter : () => {
	  log('triggered!')
	  alwaysOn.positionY = "-300px"
    //container.visible = true
  },
      onCameraExit : () => {
	  log('triggered!')
	  alwaysOn.positionY = "-400px"
    container.visible = false
  },
  enableDebug: false
    }
  )
)

//add entity to engine
engine.addEntity(box)
