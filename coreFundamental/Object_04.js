// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";

tinderUser.name = "sammy";

tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "Panku)7@google.com",
  fullname: {
    userFullName: {
      firstname: "Xyzz",
      lastName: "Chingam",
    },
  },
};

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullName.firstname)

///MERGE THE VALUES OF OBJ
const obj1 = { 1: "A", 2: "B" };

const obj2 = { 3: "a", 4: "b" };

const obj4 = { 5: "Aa", 6: "Bb" };
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(,obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }; //***IMP***/
console.log(obj3);

const userr = [
  {
    id: 1,
    email: "panku07@gmail.com",
  },
];

// userr[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js-journey",
  courseIsFor: "Pankaj",
};
course.courseIsFor;

const { courseIsFor } = course;
console.log(courseIsFor);