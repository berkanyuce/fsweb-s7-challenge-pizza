import { Button } from "reactstrap";
import "./CounterController.css"

function CounterController(props) {
  return (
    <div className="counter">
        <Button
          color="warning"
          disabled={props.sayac <= 0 ? true : false}
          onClick={props.decrease}
          data-cy="decrease"
        >
          -
        </Button>

        <h5 data-cy="counter-display">
        {props.sayac}
        </h5>

        <Button
          color="warning"
          disabled={props.sayac >= 10 ? true : false}
          onClick={props.increase}
          data-cy="increase"
        >
          +
        </Button>
    </div>
   
  );
}

export default CounterController;