import "./App.css";
import ComponentOne from "./Component/ComponentTree/ComponentOne/ComponentOne";
import HomePageButton from "./Component/HomePageButton/HomePageButton";
import { UserProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <HomePageButton />
      <UserProvider value="passedvalue">
        <ComponentOne />
      </UserProvider>
    </div>
  );
}

export default App;
