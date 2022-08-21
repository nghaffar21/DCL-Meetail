export default {
  Models:
  {
    TestModel: new GLTFShape("models/cubeTest.glb"),
    MrcBuilding: new GLTFShape("models/MrcBuilding.glb"),
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



    FirstColumnOffsetX: 16.6,
    SecondColumnOffsetX: 15.95,
    ThirdColumnOffsetX: 15.36,

    GroundOffsetZ: 5.8,
    SecondFloorOffsetZ: 2.8,
    ThirdFloorOffsetZ: 3.5,
    FourthFloorOffsetZ: 2.1,
    FifthFloorOffsetZ: 2.1,
  },
  Text: {
    GroundButtonText: "Ground Floor(1)",
    SecondFloorButtonText: "MarkoMkt Floor(2)",
    ThirdFloorButtonText: "XinNux Floor(3)",
    FourthFloorButtonText: "BlueO Floor(4)",
    FifthFloorButtonText: "Meetail Floor(5)",
    SixthFloorButtonText: "Meeting Floor(6)",
  },
  Transforms:
  {
    StaticTransforms: {
      BuildingPos: new Vector3(16, 0, 8),
      BuildingScale: new Vector3(1, 1, 1),
      BuildingRotation: new Quaternion(0, 0, 0, 1),

      BoxShapeScale: new Vector3(0.4, 0.4, 0.3),
      // BoxModel  scale: Resources.Transforms.StaticTransforms.BoxShapeScale

    },
    DynamicTransforms: {
      GroundFloor: new Vector3(15.5, 0, 6),
      SecondFloor: new Vector3(15, 3.5, 3),
      ThirdFloor: new Vector3(15, 9.32, 4),
      FourthFloor: new Vector3(15, 14.5, 3),
      FifthFloor: new Vector3(15, 20.58, 3),
      SixthFloor: new Vector3(15, 31.84, 3),
    },
  },

}
