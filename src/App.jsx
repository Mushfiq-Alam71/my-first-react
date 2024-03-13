import "./App.css";
import "./Employee.css";
import Employee from "./Employee";

function App() {
  // const fruits = [
  //   "mulberry",
  //   "mango",
  //   "orange",
  //   "guava",
  //   "strawberry",
  //   "grape",
  // ];

  const employees = [
    { id: 1, name: "mushfiq", age: 20, profession: "react developer" },
    { id: 2, name: "sakib", age: 20, profession: "node developer" },
    { id: 3, name: "sami", age: 20, profession: "angular developer" },
    { id: 4, name: "rubayet", age: 20, profession: "npm developer" },
    { id: 5, name: "protick", age: 20, profession: "vue.js developer" },
  ];
  return (
    <>
      <h1>React</h1>
      <div>
        {employees.map((employee) => (
          <Employee employee={employee}></Employee>
        ))}
      </div>

      {/* <Fruit name="jack-fruit"></Fruit>
      {fruits.map((fruit) => (
        <Fruit name={fruit}></Fruit>
      ))} */}
      {/* <Todo task="explore react" istrue={true}></Todo>
      <Todo task="explore core concepts" istrue={false}></Todo>
      <Todo task="explore JSX" istrue={true}></Todo> */}
      {/* <Person></Person>
      <Student grade="5" score="88"></Student>
      <Student grade="6" score="78"></Student>
      <Student grade="7" score="68"></Student>
      <Devoloper></Devoloper>
      <Device name="laptop" price="90"></Device>
      <Device name="mobile" price="80"></Device>
      <Device name="watch" price="50"></Device> */}
    </>
  );
}

// function Student({ grade, score }) {
//   console.log(grade, score);
//   return (
//     <div className="student">
//       <h3>
//         {/* student name {person.name}, my age is: {age} and my id is: {id}. */}
//         this is a student
//       </h3>
//       <p>grade: {grade}</p>
//       <p>score: {score}</p>
//     </div>
//   );
// }

// function Device(props) {
//   // console.log(props);
//   return (
//     <h2>
//       This device: {props.name} price: {props.price}
//     </h2>
//   );
// }

// function Person() {
//   const age = 23;
//   const money = 200;
//   const person = { name: "John", age: age, money: money };
//   return (
//     <div className="person">
//       <h3>
//         hey, i am {person.name}, my age is: {age} and i have {money} dollars
//       </h3>
//     </div>
//   );
// }

// function Devoloper() {
//   const developerStyle = {
//     border: "2px solid red",
//     borderRadius: "40px",
//     margin: "15px",
//     padding: "15px",
//   };
//   return (
//     <div style={developerStyle}>
//       <h3>hello developer.</h3>
//     </div>
//   );
// }

export default App;
