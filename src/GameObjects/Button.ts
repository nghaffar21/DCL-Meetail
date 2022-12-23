import { hud } from "@dcl/builder-hud"
import * as utils from '@dcl/ecs-scene-utils'

export function createButton(building: Entity, position0: Vector3, scale0: Vector3, buttonOnClick: Function, isInvisible: boolean, info: Number) {

  let button = new Entity("button");
  engine.addEntity(button);

  button.setParent(building);

  button.addComponent(new Transform({
    position: position0,
    scale: scale0
  }))

  let boxShape = new BoxShape();
  boxShape.withCollisions = true;
  button.addComponent(boxShape);

  // Make the button invisible
  const invisibleMaterial = new Material();
  invisibleMaterial.albedoColor = new Color4(1, 1, 1, 0);
  if(isInvisible) {
    button.addComponent(invisibleMaterial);
  }

  // The function that is run when the button is clicked
  button.addComponent(
    new OnPointerDown((e) => {
      buttonOnClick(info);
    })
  )

  //hud.attachToEntity(button);

}
