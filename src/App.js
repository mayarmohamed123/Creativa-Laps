// import logo from "./logo.svg";
import "./App.css";
import ComponentOne from "./Component/ComponentOne/ComponentOne";
import GetComponent from "./Component/GetComponent/GetComponent";
import PostComponent from "./Component/PostComponent/PostComponent";
import { UserProvider } from "./Context/Context";
// import CardButtons from "./Component/CardButtons/CardButtons";
import HomePageButton from "./Component/HomePageButton/HomePageButton";
// import CardOfProducts from "./Component/Products/CardOfProducts";

function App() {
  return (
    <div className="App">
      <HomePageButton />
      {/* <CardButtons /> */}
      {/* <CardOfProducts /> */}
      {/* <UserProvider
        value={{
          id: 1,
          img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          name: "State of mind watch",
          price: 1960,
          description:
            "The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable",
          category: "Watches",
        }}
      >
        <ComponentOne />
      </UserProvider> */}
      {/* <GetComponent /> */}
      {/* <PostComponent /> */}
      {/* <Home */}
    </div>
  );
}

export default App;
