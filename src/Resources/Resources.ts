export default {
  Models:
  {
    TestModel: new GLTFShape("models/cubeTest.glb"),
    MrcBuilding: new GLTFShape("models/MrcBuilding2.glb"),
    MrcPanel: new GLTFShape("models/MrcPanel.glb")
  },
  Variables:
  {

    TeleportDelay: 100,

    GroundFirstRowButtonOffetY: 0.99,
    GroundSecondRowButtonOffetY: 1.55,

    SecondFloorFirstRowButtonOffetY: 0.45,
    SecondFloorSecondRowButtonOffetY: 1.05,

    ThirdFloorFirstRowButtonOffetY: -0.1,
    ThirdFloorSecondRowButtonOffetY: 0.35,

    FourthFloorFirstRowButtonOffetY: 0.85,
    FourthFloorSecondRowButtonOffetY: 1.45,


    FifthFloorFirstRowButtonOffetY: 0.45,
    FifthFloorSecondRowButtonOffetY: 1.05,



    FirstColumnOffsetZ: 15.45,
    SecondColumnOffsetZ: 16.04,
    ThirdColumnOffsetZ: 16.69,

    GroundOffsetX: 5.8,
    SecondFloorOffsetX: 2.8,
    ThirdFloorOffsetX: 3.6,
    FourthFloorOffsetX: 2.1,
    FifthFloorOffsetX: 2.1,
  },
  Text: {
    GroundButtonText: "Ground Floor(1)",
    SecondFloorButtonText: "MarcoMkt Floor(2)",
    ThirdFloorButtonText: "XinNux Floor(3)",
    FourthFloorButtonText: "BlueO Floor(4)",
    FifthFloorButtonText: "Meetail Floor(5)",
    SixthFloorButtonText: "Meeting Floor(6)",
  },
  Transforms:
  {
    StaticTransforms: {
      BuildingPos: new Vector3(8, 0, 16),
      BuildingScale: new Vector3(0.8, 0.8, 0.8),
      BuildingRotation: Quaternion.Euler(0, 90, 0),

      BoxShapeScale: new Vector3(0.3, 0.4, 0.4),
      // BoxModel  scale: Resources.Transforms.StaticTransforms.BoxShapeScale

    },
    DynamicTransforms: {
      GroundFloor: new Vector3(6, 0, 15),
      SecondFloor: new Vector3(3, 3.5, 15),
      ThirdFloor: new Vector3(4, 9.32, 15),
      FourthFloor: new Vector3(3, 14.5, 15),
      FifthFloor: new Vector3(3, 20.58, 15),
      SixthFloor: new Vector3(3, 25, 15),//31.84
    },
  },

}
