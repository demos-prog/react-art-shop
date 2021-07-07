import "./null_styles.css";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
      </div>
      <hr />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}
