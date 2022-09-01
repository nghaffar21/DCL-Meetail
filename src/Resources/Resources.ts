export default {
  Models:
  {
    TestModel: new GLTFShape("models/cubeTest.glb"),
    MrcBuilding: new GLTFShape("Models/building/MrcBuilding6.glb"),
    MrcPanel: new GLTFShape("models/MrcPanel.glb")
  },
  Variables:
  {

    TeleportDelay: 100,

    GroundFirstRowButtonOffetY: 1.03,
    GroundSecondRowButtonOffetY: 1.59,

    SecondFloorFirstRowButtonOffetY: 0.45,
    SecondFloorSecondRowButtonOffetY: 1.05,

    ThirdFloorFirstRowButtonOffetY: -0.1,
    ThirdFloorSecondRowButtonOffetY: 0.35,

    FourthFloorFirstRowButtonOffetY: 0.91,
    FourthFloorSecondRowButtonOffetY: 1.45,


    FifthFloorFirstRowButtonOffetY: 0.45,
    FifthFloorSecondRowButtonOffetY: 1.05,

    MeetingFloorFirstRowButtonOffetY: 0.22,
    MeetingFloorSecondRowButtonOffetY: 0.78,

    FirstColumnOffsetZ: 16.57,
    SecondColumnOffsetZ: 15.92,
    ThirdColumnOffsetZ: 15.33,

    GroundOffsetX: 10.2,
    SecondFloorOffsetX: 13.2,
    ThirdFloorOffsetX: 12.5,
    FourthFloorOffsetX: 14,
    FifthFloorOffsetX: 12.5,
    MeetingFloorOffsetX: 14
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
      BuildingRotation: Quaternion.Euler(0, 270, 0),

      BoxShapeScale: new Vector3(0.3, 0.4, 0.4),
      // BoxModel  scale: Resources.Transforms.StaticTransforms.BoxShapeScale

    },
    DynamicTransforms: {
      GroundFloor: new Vector3(6, 0, 15),
      SecondFloor: new Vector3(3, 3.5, 15),
      ThirdFloor: new Vector3(4, 9.32, 15),
      FourthFloor: new Vector3(3, 14.5, 15),
      FifthFloor: new Vector3(3, 20.58, 15),
      SixthFloor: new Vector3(3, 20.75, 15),//31.84
    },
  },

}
