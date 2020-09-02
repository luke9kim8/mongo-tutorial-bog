  
let studentList = [
    {
      _id: 1,
      name: "Luke Kim",
      classesEnrolled: ["CS 2200", "MATH 3012"],
      year: 2,
      major: "Computer Science",
      creditHrs: "15"
    },
    {
      _id:2,
      name: "Adib Khan",
      classesEnrolled: ["CS 2200", "MATH 2550"],
      year: 3,
      major: "Computer Science",
      creditHrs: "17"
    }
  ];
  let classList = [
    {
      _id: 2200,
      name: "CS 2200",
      time: "MWF 4:30 PM EST",
      creditHrs: 4,
      enrolled: [ {
        _id: 1,
        name: "Luke Kim",
        classesEnrolled: ["CS 2200", "MATH 3012"],
        year: 2,
        major: "Computer Science",
        creditHrs: "15"
      },
      {
        _id:2,
        name: "Adib Khan",
        classesEnrolled: ["CS 2200", "MATH 2550"],
        year: 3,
        major: "Computer Science",
        creditHrs: "17"
      }],
      major: "Computer Science"
    },
    {
      _id: 3510,
      name: "CS 3510",
      time: "TR 12:30PM-1:45PM EST",
      creditHrs: 4,
      enrolled: ["Luke Kim"],
      major: "Computer Science"
    }
  ]
export {classList, studentList}