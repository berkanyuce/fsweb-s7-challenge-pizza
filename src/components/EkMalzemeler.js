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
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Pepperoni"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Pepperoni")}/> 
            Pepperoni
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Sosis"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Sosis")}/> 
            Sosis
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="KanadaJambonu"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("KanadaJambonu")}/> 
            Kanada Jambonu
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="TavukIzgara"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("TavukIzgara")}/> 
            Tavuk Izgara
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Sogan"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Sogan")}/> 
            Soğan
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Domates"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Domates")}/> 
            Domates
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Mısır"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Mısır")}/> 
            Mısır
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Sucuk"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Sucuk")}/> 
            Sucuk
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Jalepino"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Jalepino")}/> 
            Jalepino
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Sarımsak"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Sarımsak")}/> 
            Sarımsak
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Biber"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Biber")}/> 
            Biber
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Ananas"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Ananas")}/> 
            Ananas
            </Label>
        </FormGroup>
        <FormGroup check className="FormGroup">
            <Label check>
            <Input type="checkbox" 
            value="Kabak"
            onChange={handleCheckboxChange}
            checked={selectedItems.includes("Kabak")}/> 
            Kabak
            </Label>
        </FormGroup>
    </Form>
    </>
  );


}
export default EkMalzemeler