import { SendChatMessages } from "./chat"
let offsetPosY = 90;
let offsetPosX = 0;
let isOpen = false;
const screenSpaceUI = new UICanvas()
const toolTexture = new Texture('images/chaticon.jpg')
const alwaysOn = new UIContainerRect(screenSpaceUI)
alwaysOn.positionY = "-300px"
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
const container = new UIInputText(screenSpaceUI)
container.width = '50%'
container.height = '100%'
container.focusedBackground = Color4.Gray()
// container.focusedBackground = Color4.White();
container.hAlign = 'center'
container.vAlign = 'bottom'
container.visible = false
container.positionY = '50'
container.isPointerBlocker = false
container.placeholder = "Write message here"

container.onTextSubmit = new OnTextSubmit((x) => {
  const text = new UIText(container)
  text.value = "You: " + x.text
  text.color = Color4.Green()
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
  container.color = Color4.Gray()

  SendChatMessages(x.text);

})

export function ReceiveMessage(supportMsg: string) {
  const text = new UIText(container)
  text.value = "Support: " + supportMsg
  text.color = Color4.Red()
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

 if (offsetPosY <= -480) {
    offsetPosY = 75;
    offsetPosX = 450;
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
  position: new Vector3(5, 1, 5),
  scale: new Vector3(0.3, 0.3, 0.3)
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
