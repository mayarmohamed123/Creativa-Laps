// import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./Component/CardComponent/CardComponent";
import HomePageButton from "./Component/HomePageButton/HomePageButton";
// import ClassComponent from "./Component/ClassComponent/ClassComponent";
// import FunctionComponent from "./Component/FunctionComponent/FunctionComponent";
// import FunctionProps from "./Component/FunctionProps/FunctionProps";
// import ClassProps from "./Component/ClassProps/ClassProps";
// import StateComponent from "./Component/StateComponent/StateComponent";
// import Form from "./Component/FormComponent/FormComponent";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FunctionComponent />
      <FunctionProps
        fname="mayar"
        lname="mohamed"
        age={21}
        Skills="HTML , CSS , JavaScript"
      >
        <p>This is the child Section of the Function</p>
      </FunctionProps>
      <ClassProps fname="mayar" lname="mohamed">
        <p>This is the child section of the Class</p>
      </ClassProps>
      <StateComponent />
      <Form /> */}
      <CardComponent />
      <HomePageButton />
    </div>
  );
}

export default App;
