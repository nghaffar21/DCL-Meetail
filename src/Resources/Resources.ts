export default {
  Models:
  {
    //TestModel: new GLTFShape("models/cubeTest.glb"),
    MrcBuilding: new GLTFShape("Models/building/MrcBuilding020.glb"),
    MrcPanel: new GLTFShape("models/MrcPanel.glb"),
    GroundFloor: new GLTFShape("Models/floors/P02_MARCOMKT.glb"),
    FirstFloor: new GLTFShape("Models/floors/P01_BLUEO_v2.glb"),
    SecondFloor: new GLTFShape("Models/floors/P02_MARCOMKT.glb"),
    ThirdFloor: new GLTFShape("Models/floors/P03_XINNUX.glb")
  },
  Variables:
  {

    KeepSocketAliveTime: 10000,
    TeleportDelay: 100,

    GroundFirstRowButtonOffetY: 0.75, // 1.03
    GroundSecondRowButtonOffetY: 1.51, // 1.59

    SecondFloorFirstRowButtonOffetY: 0.38,
    SecondFloorSecondRowButtonOffetY: 1.10,

    ThirdFloorFirstRowButtonOffetY: -0.4,
    ThirdFloorSecondRowButtonOffetY: 0.35,

    FourthFloorFirstRowButtonOffetY: 0.80,
    FourthFloorSecondRowButtonOffetY: 1.51,


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
    MeetingFloorOffsetX: 13.9
  },
  Text: {
    // GroundButtonText: "Ground Floor(1)",
    // SecondFloorButtonText: "MarcoMkt Floor(2)",
    // ThirdFloorButtonText: "XinNux Floor(3)",
    // FourthFloorButtonText: "BlueO Floor(4)",
    // FifthFloorButtonText: "Meetail Floor(5)",
    // SixthFloorButtonText: "Meeting Floor(6)",

    GroundButtonText: "BlueO",
    SecondFloorButtonText: "MarcoMkt",
    ThirdFloorButtonText: "EXIT", //Only used in the meeting floor for getting out of the building
    FourthFloorButtonText: "BlueO Floor(4)",
    FifthFloorButtonText: "Meeting Floor",
    SixthFloorButtonText: "Xinnux",
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
      //GroundFloor: new Vector3(6, 0, 15),
      GroundFloor: new Vector3(4, 5, 15),
      SecondFloor: new Vector3(4, 9.32, 15), // 3, 3.5, 15
      ThirdFloor: new Vector3(4, 9.32, 15),
      FourthFloor: new Vector3(3, 14.5, 15),
      FifthFloor: new Vector3(3, 20.75, 15),
      SixthFloor: new Vector3(3, 14.5, 15), // 3, 20.75, 15
    },
  },

}
