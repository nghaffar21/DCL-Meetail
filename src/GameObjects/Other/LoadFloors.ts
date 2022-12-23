import Resources from "src/Resources/Resources";

export function LoadFloors(building): void {

  const marcoFloor = new Entity("marcoFloor");
  const xinnuxFloor = new Entity("xinnuxFloor");
  const blueOFloor = new Entity("blueOFloor");

  const transformFloor = new Transform({
      position: new Vector3(0,0,0), //Resources.Transforms.StaticTransforms.BuildingPos,
      rotation: Quaternion.Euler(0,0,0), //new Vector3(0,0,0), //Resources.Transforms.StaticTransforms.BuildingRotation,
      scale: new Vector3(1, 1, 1)
  })

  // ----- BlueO floor -----
  blueOFloor.addComponentOrReplace(transformFloor)
  const blueOModel = Resources.Models.FirstFloor;
  blueOModel.withCollisions = true;
  blueOModel.isPointerBlocker = true
  blueOModel.visible = true;
  blueOFloor.addComponentOrReplace(blueOModel);
  engine.addEntity(blueOFloor);

  blueOFloor.setParent(building);

  // ----- Marco mkt floor -----
  marcoFloor.addComponentOrReplace(transformFloor)

  marcoFloor.setParent(building);

  const marcoModel = Resources.Models.SecondFloor;
  marcoModel.withCollisions = true;
  marcoModel.isPointerBlocker = true
  marcoModel.visible = true;
  marcoFloor.addComponentOrReplace(marcoModel);
  engine.addEntity(marcoFloor);

  // ----- Xinnux floor -----
  xinnuxFloor.addComponentOrReplace(transformFloor)
  const xinnuxModel = Resources.Models.ThirdFloor;
  xinnuxModel.withCollisions = true;
  xinnuxModel.isPointerBlocker = true
  xinnuxModel.visible = true;
  xinnuxFloor.addComponentOrReplace(xinnuxModel);
  engine.addEntity(xinnuxFloor);

  xinnuxFloor.setParent(building);

  // const building = Resources.Models.MrcBuilding;
  // building.withCollisions = true
  // building.isPointerBlocker = true
  // building.visible = true
  // mrcbuilding.addComponentOrReplace(building)
  // engine.addEntity(mrcbuilding)

}
