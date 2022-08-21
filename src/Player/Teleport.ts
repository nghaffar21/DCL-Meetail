import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as utils from '@dcl/ecs-scene-utils'
import Resources from '../Resources/Resources';

export function Teleport( entity: Entity,goTo: Vector3): void {

    entity.addComponent(
        new utils.Delay(Resources.Variables.TeleportDelay, () => {
            movePlayerTo({ x: goTo.x, y: goTo.y, z: goTo.z }, { x: 0, y: 0, z: 0 });
        })
    )


}


