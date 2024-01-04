import React from "react";
import ReactDOM from "react-dom";
import "./css/app.css";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      {/* <div className="container-view w-10 bg-red-500">Some activities should be here</div> */}
      <div className="">
        <Footer />{" "}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
