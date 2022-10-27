import Resources from "src/Resources/Resources";

export function LoadFloors(building): void {

  // ----- Ground Floor -----
  const marcoFloor = new Entity("marcoFloor");

  const xinnuxFloor = new Entity("xinnuxFloor");

  const meetailBlueOFloor = new Entity("meetailBlueOFloor");

  const transformMarcoFloor = new Transform({
      position: new Vector3(0,0,0), //Resources.Transforms.StaticTransforms.BuildingPos,
      rotation: Quaternion.Euler(0, 0, 0), //new Vector3(0,0,0), //Resources.Transforms.StaticTransforms.BuildingRotation,
      scale: new Vector3(1, 1, 1)
  })
  marcoFloor.addComponentOrReplace(transformMarcoFloor)

  marcoFloor.setParent(building);

  const marcoModel = Resources.Models.GroundFloor;
  marcoModel.withCollisions = true;
  marcoModel.isPointerBlocker = true
  marcoModel.visible = true;
  marcoFloor.addComponentOrReplace(marcoModel);
  engine.addEntity(marcoFloor);

  xinnuxFloor.addComponentOrReplace(transformMarcoFloor)
  const xinnuxModel = Resources.Models.FirstFloor;
  xinnuxModel.withCollisions = true;
  xinnuxModel.isPointerBlocker = true
  xinnuxModel.visible = true;
  xinnuxFloor.addComponentOrReplace(xinnuxModel);
  engine.addEntity(xinnuxFloor);

  xinnuxFloor.setParent(building);

  meetailBlueOFloor.addComponentOrReplace(transformMarcoFloor)
  const meetailModel = Resources.Models.SecondFloor;
  meetailModel.withCollisions = true;
  meetailModel.isPointerBlocker = true
  meetailModel.visible = true;
  meetailBlueOFloor.addComponentOrReplace(meetailModel);
  engine.addEntity(meetailBlueOFloor);

  meetailBlueOFloor.setParent(building);

  // const building = Resources.Models.MrcBuilding;
  // building.withCollisions = true
  // building.isPointerBlocker = true
  // building.visible = true
  // mrcbuilding.addComponentOrReplace(building)
  // engine.addEntity(mrcbuilding)

}
