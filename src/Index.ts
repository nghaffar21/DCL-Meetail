import * as utils from '@dcl/ecs-scene-utils'
import { LoadMainBuilding } from "./GameObjects/Other/LoadBuilding";
import { GroundPanel } from "./GameObjects/Panels/GroundFloorPanel";
import { SecondFloorPanel } from "./GameObjects/Panels/SecondFloorPlanel";
import { ThirdFloorPanel } from "./GameObjects/Panels/ThirdFloorPanel";
import { FourthFloorPanel } from "./GameObjects/Panels/FourthFloorPanel";
import { FifthFloorPanel } from "./GameObjects/Panels/FifthFloorPanel";
import { HudBoxTest } from "./GameObjects/Other/HudBox";
import { createButton } from "GameObjects/Button"
import { hud } from "@dcl/builder-hud"
import { getUserPublicKey } from "@decentraland/Identity"


LoadMainBuilding();

//All Panels
GroundPanel();
SecondFloorPanel();
ThirdFloorPanel();
FourthFloorPanel();
FifthFloorPanel();
//All Panels



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
  position: new Vector3(8,-2,16), // -23
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(1, 1, 1)
})
mrcbuildingPCoorporativ.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("ae278e8b-a71f-426b-8f7a-75fe960ec6e5/MrcBuilding008_p05_coorporativemode_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
mrcbuildingPCoorporativ.addComponentOrReplace(gltfShape3)
hud.attachToEntity(mrcbuildingPCoorporativ)

const mrcbuildingPartymood = new Entity('mrcbuildingPartymood')
//engine.addEntity(mrcbuildingPartymood)
mrcbuildingPartymood.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8,-2,16), // -23
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(1, 1, 1)
})
mrcbuildingPartymood.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("cde62774-ee4a-428f-86a1-2db3e4a28a4d/MrcBuilding008_p05_partymood.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
mrcbuildingPartymood.addComponentOrReplace(gltfShape4)

const mrcbuildingPartymoodL = new Entity('mrcbuildingPartymoodL')
engine.addEntity(mrcbuildingPartymoodL)
mrcbuildingPartymoodL.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mrcbuildingPartymoodL.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymood_lightanimation_2.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
mrcbuildingPartymoodL.addComponentOrReplace(gltfShape5)
mrcbuildingPartymoodL.setParent(mrcbuildingPartymood);
hud.attachToEntity(mrcbuildingPartymoodL)

// --------- start of party lights ---------

const greenLight = new Entity();
const yellowLight = new Entity();
const purpleLight = new Entity();
const blueLight = new Entity();
const orangeLight = new Entity();

const gltfShapeGreenLight = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymode_lightanimation_05_green.glb")
greenLight.addComponent(gltfShapeGreenLight)

const gltfShapeYellowLight = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymode_lightanimation_04_yellow.glb")
const gltfShapePurpleLight = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymode_lightanimation_03_violet.glb")
const gltfShapeBlueLight = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymode_lightanimation_02_blue.glb")
const gltfShapeOrangeLight = new GLTFShape("4007ce5a-051e-4ae7-b7c3-1ce3b051862d/MrcBuilding008_p05_partymode_lightanimation_01_orange.glb")

const lightTransform = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

let lights = [greenLight, yellowLight, purpleLight, blueLight, orangeLight];

for(let i = 0; i < lights.length; i++) {

  engine.addEntity(lights[i]);

  lights[i].setParent(mrcbuildingPartymood);
  lights[i].addComponent(lightTransform);
}

// --------- end of party lights ---------

// used only for the corporative mode button
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

// ------- start of Buttons -------

// The buttons for changing the party light's color

//east side color buttons
let xAxis = 1.89

for(let i = 0; i < 5; i++) {
  xAxis = xAxis - 0.75
  createButton(mrcbuildingPartymood, new Vector3(xAxis,24.4,6.1), new Vector3(0.5, 0.5, 0.5), changeLight, true, i);
}

// west side color buttons
xAxis = 1.89

for(let i = 0; i < 5; i++) {
  xAxis = xAxis - 0.75
  createButton(mrcbuildingPartymood, new Vector3(xAxis,24.4,-6.1), new Vector3(0.5, 0.5, 0.5), changeLight, true, i);
}

// createButton(_scene, new Vector3(3,1,6), new Vector3(0.7,0.7,0.7), goToURL, false, 0);
// function goToURL() {
//   openExternalURL("https://spatial.io/s/MRC-Group-62f6c1f477f41c0001a69f49?share=8039001326585555215&utm_source=%2Fspaces");
// }

// ------- end of Buttons -------

// ------- start of API -------

// this function loads the scenes mode, based on the latest save
async function loadScene() {

  let url = 'https://us-central1-decentraland-mrc-party-button.cloudfunctions.net/app/get-condition'

  let sceneCondition;                                                                                                                        // "https://api.nomics.com/v1/currencies/ticker?key=18ab3f9445bbd585bafa10ce197fd12c94099965"
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
    log("fckin responseJson" + responseJson)

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
    log("fckin responseJson" + responseJson)

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

      if(publicKey.toString() == wallets[i]) {
        // Button to change to party mode
        createButton(_scene, new Vector3(2.1,2,6), new Vector3(0.7,0.7,0.7), switchToPartyMode, false, 0);

        // Button to change to corporative mode
        createButton(_scene, new Vector3(2.1,1,6), new Vector3(0.7,0.7,0.7), switchToCorporativeMode, false, 0);
      }
      return publicKey;
    }

  } catch(e) {
    log('error getting admins', e)
  }
})

// ------- end of API -------
