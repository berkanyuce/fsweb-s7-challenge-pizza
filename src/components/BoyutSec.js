import { Form, FormGroup, Input, Label } from "reactstrap"
import "./BoyutSec.css"

function BoyutSec() {
  return (
    <>
    <div className="boyut-sec">
        <h5>Boyut Seç <span class="red-star">*</span></h5>
        <Form>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radioGroup" /> Küçük
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radioGroup" /> Orta
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="radioGroup" /> Büyük
                </Label>
            </FormGroup>
        </Form>
    </div>
    </>
  );
}

export default BoyutSec;