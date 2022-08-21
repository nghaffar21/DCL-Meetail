import Resources from "src/Resources/Resources";

const mrcbuilding = new Entity('BuildingEntity');

export function LoadMainBuilding(): void {

    const transform = new Transform({
        position: Resources.Transforms.StaticTransforms.BuildingPos,
        rotation: Resources.Transforms.StaticTransforms.BuildingRotation,
        scale: new Vector3(1, 1, 1)
    })
    mrcbuilding.addComponentOrReplace(transform)

    const building = Resources.Models.MrcBuilding;
    building.withCollisions = true
    building.isPointerBlocker = true
    building.visible = true
    mrcbuilding.addComponentOrReplace(building)
    engine.addEntity(mrcbuilding)

}
