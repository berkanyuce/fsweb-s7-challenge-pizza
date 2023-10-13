import { useState, useEffect } from "react";
import CounterController from "./CounterController";


const Counter = (props) => {
  //let counter = 0;
  const [showCounter, setShowCounter] = useState(true);

  function artir() {
    props.setCounter(props.counter + 1);
    //console.log("artır:", counter);
  }

  function azalt() {
    props.setCounter(props.counter - 1);
    //console.log("azalt", counter);
  }

  return (
    <>
      <CounterController sayac={props.counter} increase={artir} decrease={azalt} />
    </>
  );
};

export default Counter;