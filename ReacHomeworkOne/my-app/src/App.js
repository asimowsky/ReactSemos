import Homework from "./components/Homework";
import CallJson from "./components/CallJson"
const App = () => {

  return (

    <div>
   
      <h1>Vo red profesore</h1>
      <Homework></Homework>
      <CallJson/>

    </div>);
}


export default App;


// import Student from "./components/Student";
// import PersonIterator from "./components/PersonIterator";
// import StudentClass from "./components/StudentClass";
// import "./css/styles.css"

// function App() {
//   const Name = "Jordan Michael"
//   const Age = 18;
//   const toShow = true;
//   const fruits = ["apple", "watermelon", "cherry"];
//   return (
//     <div className="App">
//       <h1>AA</h1>
//       <Student name={Name} age={Age} shouldTheComponentShow={toShow}>
//       </Student>
//       <div className="red"> Fruit 1 : {fruits[0]}</div>
//       <div> Fruit 2 : {fruits[1]}</div>
//       <div> Fruit 3 : {fruits[2]}</div>
//       {/* <div>Fruits : {JSON.stringify(fruits)}</div> */}
//       <div>Fruits : {fruits.map
//         (a => { return <li key={a}>{a}</li> })
//       }
//       </div>
//       <Student fruits={["orange","lemon"]} name={"Svetle"} age={Age} shouldTheComponentShow={true}
//       />
//       {/* bez return ako ima edna funkcija */}
//       {/* <div>Fruits: {fruits.map(fruit => <li><b>{fruit}</b></li>)}</div> */}
//       <hr />
//       <PersonIterator/>
//       <hr />
//       <StudentClass fruits={fruits} name={Name} age={Age} shouldTheComponentShow={toShow}/>
//     </div>

//   );
// }

// export default App;
