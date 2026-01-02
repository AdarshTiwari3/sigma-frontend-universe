// enums in typescript

enum Priority {
  LOW,
  MEDIUM,
  High,
}

// or

enum Priority1 {
  LOW = "LOW",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
}

console.log("enum1=", Priority, "enum2=", Priority1); //enum1= { '0': 'LOW', '1': 'MEDIUM', '2': 'High', LOW: 0, MEDIUM: 1, High: 2 } enum2= { LOW: 'LOW', HIGH: 'HIGH', MEDIUM: 'MEDIUM' }
