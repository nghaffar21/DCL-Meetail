import * as utils from '@dcl/ecs-scene-utils'
import { LoadMainBuilding } from "./GameObjects/Other/LoadBuilding";
import { GroundPanel } from "./GameObjects/Panels/GroundFloorPanel";
import { SecondFloorPanel } from "./GameObjects/Panels/SecondFloorPlanel";
import { ThirdFloorPanel } from "./GameObjects/Panels/ThirdFloorPanel";
import { FourthFloorPanel } from "./GameObjects/Panels/FourthFloorPanel";
import { FifthFloorPanel } from "./GameObjects/Panels/FifthFloorPanel";
import { MeetingFloorPanel } from "./GameObjects/Panels/MeetingFloorPanel";
import { HudBoxTest } from "./GameObjects/Other/HudBox";
import { createButton } from "GameObjects/Button"
import { hud } from "@dcl/builder-hud"
import { LoadFloors } from "./GameObjects/Other/LoadFloors"
import { getUserPublicKey } from "@decentraland/Identity"

import Resources from "src/Resources/Resources";
import { PlayerIdentity } from "./Chat/PlayerId";

PlayerIdentity();

LoadMainBuilding();

//All Panels
GroundPanel();
SecondFloorPanel();
ThirdFloorPanel();
FourthFloorPanel();
//FifthFloorPanel();
MeetingFloorPanel();
//All Panels



const mrcbuilding = new Entity('BuildingEntity');
const transformBuilding = new Transform({
    position: Resources.Transforms.StaticTransforms.BuildingPos,
    rotation: Resources.Transforms.StaticTransforms.BuildingRotation,
    scale: new Vector3(1, 1, 1)
})
mrcbuilding.addComponentOrReplace(transformBuilding)

const building = Resources.Models.MrcBuilding;
building.withCollisions = true
building.isPointerBlocker = true
building.visible = true
mrcbuilding.addComponentOrReplace(building)
engine.addEntity(mrcbuilding)

LoadFloors(mrcbuilding);



// HudBoxTest();

// --------- Code of the meeting floor ---------

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// A box shape to be used for various cube like shapes
let boxShape = new BoxShape()
boxShape.withCollisions = true

const mrcbuildingPCoorporativ = new Entity('mrcbuildingPCoorporativ')
//engine.addEntity(mrcbuildingPCoorporativ);
mrcbuildingPCoorporativ.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8,0,16), // -23
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1, 1, 0.99)
})
mrcbuildingPCoorporativ.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("Models/corporativeMode/P04_CORPORATIVE_MODE.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
mrcbuildingPCoorporativ.addComponentOrReplace(gltfShape3)
//hud.attachToEntity(mrcbuildingPCoorporativ)

const mrcbuildingPartymood = new Entity('mrcbuildingPartymood')
//engine.addEntity(mrcbuildingPartymood)
mrcbuildingPartymood.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8,0,16), // -23
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1, 1, 1)
})
mrcbuildingPartymood.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("Models/partyMode/P04_PARTY_MODE.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
mrcbuildingPartymood.addComponentOrReplace(gltfShape4)

// const partymoodLightProjections = new Entity('partymoodLightProjections')
// engine.addEntity(partymoodLightProjections)
// partymoodLightProjections.setParent(partymoodLightProjections)
// const transform7 = new Transform({
//   position: new Vector3(0,0,0),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// partymoodLightProjections.addComponentOrReplace(transform7)
// const gltfShape5 = new GLTFShape("Models/lightProjections/projection.glb")
// gltfShape5.withCollisions = true
// gltfShape5.isPointerBlocker = true
// gltfShape5.visible = true
// partymoodLightProjections.addComponentOrReplace(gltfShape5)
// partymoodLightProjections.setParent(partymoodLightProjections);
// hud.attachToEntity(partymoodLightProjections)

// --------- start of party lights ---------

const greenLight = new Entity();
const yellowLight = new Entity();
const purpleLight = new Entity();
const blueLight = new Entity();
const orangeLight = new Entity();

const gltfShapeGreenLight = new GLTFShape("Models/lightProjections/green.glb")
greenLight.addComponent(gltfShapeGreenLight)

const gltfShapeYellowLight = new GLTFShape("Models/lightProjections/yellow.glb")
const gltfShapePurpleLight = new GLTFShape("Models/lightProjections/violet.glb")
const gltfShapeBlueLight = new GLTFShape("Models/lightProjections/blue.glb")
const gltfShapeOrangeLight = new GLTFShape("Models/lightProjections/orange.glb")

const lightTransform = new Transform({
  position: new Vector3(0,-3.75,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

let lights = [greenLight, yellowLight, purpleLight, blueLight, orangeLight];

for(let i = 0; i < lights.length; i++) {

  engine.addEntity(lights[i]);

  lights[i].setParent(mrcbuildingPartymood);
  lights[i].addComponent(lightTransform);
}

function changeLight(color: Number) {

  if(color === 0) {
    greenLight.addComponent(gltfShapeGreenLight);
    yellowLight.removeComponent(gltfShapeYellowLight);
    purpleLight.removeComponent(gltfShapePurpleLight);
    blueLight.removeComponent(gltfShapeBlueLight);
    orangeLight.removeComponent(gltfShapeOrangeLight);
  } else if(color === 1) {
    greenLight.removeComponent(gltfShapeGreenLight);
    yellowLight.addComponent(gltfShapeYellowLight);
    purpleLight.removeComponent(gltfShapePurpleLight);
    blueLight.removeComponent(gltfShapeBlueLight);
    orangeLight.removeComponent(gltfShapeOrangeLight);
  } else if(color === 2) {
    greenLight.removeComponent(gltfShapeGreenLight);
    yellowLight.removeComponent(gltfShapeYellowLight);
    purpleLight.addComponent(gltfShapePurpleLight);
    blueLight.removeComponent(gltfShapeBlueLight);
    orangeLight.removeComponent(gltfShapeOrangeLight);
  } else if(color === 3) {
    greenLight.removeComponent(gltfShapeGreenLight);
    yellowLight.removeComponent(gltfShapeYellowLight);
    purpleLight.removeComponent(gltfShapePurpleLight);
    blueLight.addComponent(gltfShapeBlueLight);
    orangeLight.removeComponent(gltfShapeOrangeLight);
  } else if(color === 4) {
    greenLight.removeComponent(gltfShapeGreenLight);
    yellowLight.removeComponent(gltfShapeYellowLight);
    purpleLight.removeComponent(gltfShapePurpleLight);
    blueLight.removeComponent(gltfShapeBlueLight);
    orangeLight.addComponent(gltfShapeOrangeLight);
  }
}

// --------- end of party lights ---------

// --------- start of mode buttons message bus ---------
const sceneMessageBus = new MessageBus();
function switchToCorporativeMode(i: Number) {
  sceneMessageBus.emit("switchToCorporativeMode", {});
  changeToCorpModeOnDatabase();
}
sceneMessageBus.on("switchToCorporativeMode", () => {
  engine.removeEntity(mrcbuildingPartymood);
  _scene.addComponent(
    new utils.Delay(2000, () => {
      engine.addEntity(mrcbuildingPCoorporativ);
    })
  )
});

// used only for the party mode button
function switchToPartyMode(i: Number) {
  sceneMessageBus.emit("switchToPartyMode", {});
  changeToPartyModeOnDatabase();
}
sceneMessageBus.on("switchToPartyMode", () => {
  engine.removeEntity(mrcbuildingPCoorporativ);
  _scene.addComponent(
    new utils.Delay(2000, () => {
      engine.addEntity(mrcbuildingPartymood);
    })
  )
});
// --------- end of mode buttons message bus ---------

// ------- start of Buttons -------

// The buttons for changing the party light's color

//east side color buttons
let xAxis = 1.89

for(let i = 0; i < 5; i++) {
  xAxis = xAxis - 0.75
  createButton(mrcbuildingPartymood, new Vector3(xAxis,20.6,6.1), new Vector3(0.5, 0.5, 0.5), changeLight, true, i);
}

// west side color buttons
// xAxis = 1.89
//
// for(let i = 0; i < 5; i++) {
//   xAxis = xAxis - 0.75
//   createButton(mrcbuildingPartymood, new Vector3(xAxis,24.4,-6.1), new Vector3(0.5, 0.5, 0.5), changeLight, true, i);
// }

// createButton(_scene, new Vector3(3,1,6), new Vector3(0.7,0.7,0.7), goToURL, true, 0);
// function goToURL() {
//   openExternalURL("https://spatial.io/s/Nimas-Lo-Fi-Hangout-630cd22c8e10f200010ccb5f?share=4359418535863837436");
// }

// ------- end of Buttons -------

// ------- start of API -------

// this function loads the scenes mode, based on the latest save
async function loadScene() {

  let url = 'https://us-central1-decentraland-mrc-party-button.cloudfunctions.net/app/get-condition'  // "https://api.nomics.com/v1/currencies/ticker?key=18ab3f9445bbd585bafa10ce197fd12c94099965"

  let sceneCondition;
  try {
    let response = await fetch(url)
    let responseJson = await response.json()

    //log("json file: " + responseJson.corporativeMode) // test: prints the json taken from API - change
    sceneCondition = responseJson.corporativeMode;
  } catch (e) {
    //log('error getting btc price', e)
  }

  sceneCondition = (sceneCondition === "true"); // convert from string to boolean

  // loads the right scene condition at the start of the scene
  if(sceneCondition) {
    engine.addEntity(mrcbuildingPCoorporativ);
    engine.removeEntity(mrcbuildingPartymood);
  } else {
    engine.addEntity(mrcbuildingPartymood);
    engine.removeEntity(mrcbuildingPCoorporativ);
  }

}
loadScene();

// this function changes the mode to corporative mode on database
async function changeToCorpModeOnDatabase() {

  let url = 'https://us-central1-decentraland-mrc-party-button.cloudfunctions.net/app/change-condition';

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        corporativeMode: "true"
      })
    });
    let responseJson = await response.json();
    // log("responseJson dev" + responseJson)

  } catch(e) {
    log('error posting mode', e)
  }

}

// this function changes the mode to party mode on database
async function changeToPartyModeOnDatabase() {

  let url = 'https://us-central1-decentraland-mrc-party-button.cloudfunctions.net/app/change-condition';

  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        corporativeMode: "false"
      })
    });
    let responseJson = await response.json();
    log("responseJson" + responseJson)

  } catch(e) {
    log('error posting mode', e)
  }

}

// authorize user for accessing the mode buttons
const publicKeyRequest = executeTask(async () => {

  // get all the admins' wallet addresses

  let url = 'https://us-central1-decentraland-mrc-party-button.cloudfunctions.net/app/get-admins';

  try {
    let response = await fetch(url);
    let responseJson = await response.json()

    let wallets = []; // a string array that saves all the wallet addresses
    for(let i = 0; i < responseJson.length; i++) {
      wallets.push(responseJson[i]['wallet']);
    }

    // get the public key of the current user

    const publicKey = await getUserPublicKey();

    for(let i = 0; i < wallets.length; i++) {

      //log("wallet address dev:" + wallets[i].toLowerCase());

      if(publicKey.toString() == wallets[i].toLowerCase()) {

        // 3D models of the mode buttons
        const buttonModels = new Entity('buttonModels')
        engine.addEntity(buttonModels);
        buttonModels.setParent(_scene)
        const buttonsTransform = new Transform({
          position: new Vector3(8,0,16),
          rotation: Quaternion.Euler(0, 270, 0),
          scale: new Vector3(1, 1, 1)
        })
        buttonModels.addComponentOrReplace(buttonsTransform)
        const buttonsgltfShape = new GLTFShape("Models/modeButtons2.glb")
        buttonsgltfShape.withCollisions = true
        buttonsgltfShape.isPointerBlocker = true
        buttonsgltfShape.visible = true
        buttonModels.addComponentOrReplace(buttonsgltfShape)
        //hud.attachToEntity(buttonModels)

        // Button to change to party mode
        createButton(_scene, new Vector3(10,1.6,18.3), new Vector3(0.7,0.7,0.7), switchToPartyMode, true, 0);

        // Button to change to corporative mode
        createButton(_scene, new Vector3(10,0.8,18.3), new Vector3(0.7,0.7,0.7), switchToCorporativeMode, true, 0);
      }
      //return publicKey;
    }

  } catch(e) {
    log('error getting admins', e)
  }
})

// ------- end of API -------

// ------- Buttons for wearables -------

// the T-Shirt on the top
createButton(_scene, new Vector3(5, 1.7, 13), new Vector3(0.7,0.7,0.7),
  () => {openExternalURL("")}, true, 0)

// the front T-Shirt
createButton(_scene, new Vector3(4, 0.4, 12.9), new Vector3(0.7,0.7,0.7),
  () => {openExternalURL("")}, true, 0)

// the back T-Shirt
createButton(_scene, new Vector3(6.5, 0.4, 12.9), new Vector3(0.7,0.7,0.7),
  () => {openExternalURL("")}, true, 0)

// ------- end of button for sending messages -------

// ------- Video Screen -------
// #1
const myVideoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
const cylinder = new CylinderShape()
cylinder.withCollisions = true
const screen = new Entity()
screen.addComponent(cylinder)
screen.addComponent(
  new Transform({
    position: new Vector3(8, 1.3, 8),
    scale: new Vector3(3, 5, 5)
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

// #5
myVideoTexture.play()
// ------- End of Video Screen -------
