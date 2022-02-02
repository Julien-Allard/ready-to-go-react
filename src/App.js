import "./App.css";
import { useState } from "react";
import Switches from "./components/Switches";
import Alert from "./components/Alert";
import Abort from "./components/Abort";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const switchOn1 = () => {
    switch1 === true ? setSwitch1(false) : setSwitch1(true);
  };
  const switchOn2 = () => {
    switch2 === true ? setSwitch2(false) : setSwitch2(true);
  };
  const switchOn3 = () => {
    switch3 === true ? setSwitch3(false) : setSwitch3(true);
  };
  const killSwitch = () => {
    if (switch1 || switch2 || switch3) {
      setSwitch1(false);
      setSwitch2(false);
      setSwitch3(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="all-btn">
          <Switches status={switch1} switchOn={switchOn1} />
          <Switches status={switch2} switchOn={switchOn2} />
          <Switches status={switch3} switchOn={switchOn3} />
          <Abort
            status1={switch1}
            status2={switch2}
            status3={switch3}
            killSwitch={killSwitch}
          />
        </div>
        <Alert status1={switch1} status2={switch2} status3={switch3} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
