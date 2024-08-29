import "./App.css";
// import ComponentOne from "./Component/ComponentTree/ComponentOne/ComponentOne";
import GetComponent from "./Component/GetComponent/GetComponent";
// import HomePageButton from "./Component/HomePageButton/HomePageButton";
import PostComponent from "./Component/PostComponent/PostComponent";
// import { UserProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      {/* <HomePageButton />
      <UserProvider value="passedvalue">
        <ComponentOne />
      </UserProvider> */}
      <GetComponent />
      <PostComponent />
    </div>
  );
}

export default App;
