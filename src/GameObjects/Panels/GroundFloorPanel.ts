import Resources from "src/Resources/Resources";
import { Teleport } from "src/Player/Teleport";

export function GroundPanel(): void {

    //#region TransparentMaterial
    let buttonMaterial = new Material()
    let transparentColor = new Color4(0, 0, 0, 0)
    buttonMaterial.albedoColor = transparentColor
    //#endregion


    let button = new Array(6);


    for (let i = 0; i < button.length; i++) {

        button[i] = new Entity()
        button[i].addComponent(new BoxShape())
        button[i].getComponent(BoxShape).visible = true
        button[i].addComponent(buttonMaterial)
        engine.addEntity(button[i])

        if (i == 0) {
            let transform = new Transform({
                position: new Vector3(
                    Resources.Variables.GroundOffsetX,
                    0 + Resources.Variables.GroundFirstRowButtonOffetY,
                    Resources.Variables.FirstColumnOffsetZ),
                scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            })
            button[i].addComponent(transform)

            //clickable
            button[i].addComponent(
                new OnPointerDown(() => {
                    Teleport(button[i], Resources.Transforms.DynamicTransforms.GroundFloor);
                },
                    {
                        hoverText: Resources.Text.GroundButtonText
                    }
                ))
        } else if (i == 1) {
            const transform2 = new Transform({
                position: new Vector3(
                    Resources.Variables.GroundOffsetX,
                    0 + Resources.Variables.GroundSecondRowButtonOffetY,
                    Resources.Variables.FirstColumnOffsetZ),
                scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            })
            button[i].addComponent(transform2)
            //clickable
            button[i].addComponent(
                new OnPointerDown(() => {
                    // let data = <ITeleport>{ entity: button1, Vector3: Resources.Transforms.DynamicTransforms.Ground }
                    Teleport(button[i], Resources.Transforms.DynamicTransforms.SixthFloor);
                },
                    {
                        hoverText: Resources.Text.SixthFloorButtonText
                    }
                ))
        } else if (i == 2) {
            const transform3 = new Transform({
                position: new Vector3(
                    Resources.Variables.GroundOffsetX,
                    0 + Resources.Variables.GroundSecondRowButtonOffetY,
                    Resources.Variables.SecondColumnOffsetZ),
                scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            })
            button[i].addComponent(transform3)

            //clickable
            button[i].addComponent(
                new OnPointerDown(() => {
                    Teleport(button[i], Resources.Transforms.DynamicTransforms.FifthFloor);
                },
                    {
                        hoverText: Resources.Text.FifthFloorButtonText
                    }
                ))

        }else if (i == 3) {
            // const transform4 = new Transform({
            //     position: new Vector3(
            //         Resources.Variables.GroundOffsetX,
            //         Resources.Transforms.DynamicTransforms.GroundFloor.y + Resources.Variables.GroundSecondRowButtonOffetY
            //         , Resources.Variables.ThirdColumnOffsetZ),
            //     scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            // })
            // button[i].addComponent(transform4)
            // //clickable
            // button[i].addComponent(
            //     new OnPointerDown(() => {
            //         Teleport( button[i], Resources.Transforms.DynamicTransforms.FourthFloor);
            //     },
            //         {
            //             hoverText: Resources.Text.FourthFloorButtonText
            //         }
            //     ))
        }else if (i == 4) {
            const transform5 = new Transform({
                position: new Vector3(
                    Resources.Variables.GroundOffsetX,
                    0 + Resources.Variables.GroundFirstRowButtonOffetY,
                    Resources.Variables.SecondColumnOffsetZ),
                scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            })
            button[i].addComponent(transform5)

            //clickable
            button[i].addComponent(
                new OnPointerDown(() => {
                    Teleport(button[i], Resources.Transforms.DynamicTransforms.SecondFloor);
                },
                    {
                        hoverText: Resources.Text.SecondFloorButtonText
                    }
                ))
        }else if (i ==5) {
            // const transform6 = new Transform({
            //     position: new Vector3(
            //         Resources.Variables.GroundOffsetX,
            //         Resources.Transforms.DynamicTransforms.GroundFloor.y + Resources.Variables.GroundFirstRowButtonOffetY,
            //         Resources.Variables.ThirdColumnOffsetZ),
            //     scale: Resources.Transforms.StaticTransforms.BoxShapeScale
            // })
            // button[i].addComponent(transform6)
            // //clickable
            // button[i].addComponent(
            //     new OnPointerDown(() => {
            //         Teleport(button[i], Resources.Transforms.DynamicTransforms.ThirdFloor);
            //     },
            //         {
            //             hoverText: Resources.Text.ThirdFloorButtonText
            //         }
            //     ))
        }

    }




}
