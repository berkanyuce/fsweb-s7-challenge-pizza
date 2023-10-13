import { FormGroup, Label, Input } from "reactstrap";
import "./SiparisNotu.css"

function SiparisNotu() {
  return (
    <>
    <div className="siparis-notu">
    <FormGroup>
      <Label for="exampleText">
        <h5>Sipariş Notu</h5>
      </Label>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
        placeholder="Siparişine eklemek istediğin bir not var mı?"

      />
    </FormGroup>
    </div>
      <div className="horizontal-line"></div>

      </>
  );
}

export default SiparisNotu;
