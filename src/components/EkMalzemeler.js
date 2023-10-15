import React, { useState } from "react";
import { Checkbox } from "react-control-library";
import { Input, Form, Label, FormGroup } from "reactstrap";
import "./EkMalzemeler.css"

function EkMalzemeler({ selectedItems, setSelectedItems }) {
  const maxSelectionCount = 10;

  const handleCheckboxChange = (e) => {
    const item = e.target.value;
    if (e.target.checked) {
      if (selectedItems.length < maxSelectionCount) {
        setSelectedItems([...selectedItems, item]);
      } else {
        e.target.checked = false;
        return;
      }
    } else {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    }
  };

  return (
    <>
    <h4>Ek Malzemeler</h4>
    <p>En Fazla 10 Malzeme seçebilirsiniz 5₺</p>
    

    
    <Form className="checkbox-grid">
      {[
        "Pepperoni",
        "Sosis",
        "KanadaJambonu",
        "TavukIzgara",
        "Sogan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalepino",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak"
      ].map((item) => (
        <FormGroup key={item} check className="FormGroup">
          <Label check>
            <Input
              type="checkbox"
              value={item}
              onChange={handleCheckboxChange}
              checked={selectedItems.includes(item)}
            />
            {item}
          </Label>
    </FormGroup>
  ))}
</Form>

    </>
  );


}
export default EkMalzemeler