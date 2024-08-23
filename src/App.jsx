import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import Title from "./components/Title";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (item) => {
    // console.log(item);
    if (item === "c") {
      setCalVal("");
    } else if (item === "=") {
      const newval1 = eval(calVal);
      setCalVal(newval1);
    } else {
      const newVal = calVal + item;
      setCalVal(newVal);
    }
  };
  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Title />
          <Display calVal={calVal} />
          <ButtonsContainer onClickH={onButtonClick} />
        </div>
      </center>
    </>
  );
}

export default App;
