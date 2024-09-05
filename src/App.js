import "./App.css";
import SignupWithHooks from "./Component/SignupWithHooks/SignupWithhooks";
// import HooksProduct from "./Component/HooksComponent/HooksProduct/HooksProduct";
// import LoginWithHooks from "./Component/LoginWithHooks/LoginWithHooks";
// import SignupWithHooks from "./Component/StateComponent/SignupWithHooks/SignupWithhooks";
// import ComponentOne from "./Component/ComponentTree/ComponentOne/ComponentOne";
// import GetComponent from "./Component/GetComponent/GetComponent";
// import HomePageButton from "./Component/HomePageButton/HomePageButton";
// import PostComponent from "./Component/PostComponent/PostComponent";
// import { UserProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      {/* <HomePageButton />
      <UserProvider value="passedvalue">
        <ComponentOne />
      </UserProvider> */}
      {/* <GetComponent />
      <PostComponent /> */}
      {/* <HooksProduct /> */}
      {/* <LoginWithHooks /> */}
      <SignupWithHooks />
    </div>
  );
}

export default App;
