import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label } from "reactstrap";
import * as Yup from "yup";

import "./HamurSec.css"


function HamurSec({ selectedHamur, setSelectedHamur }) {
  const [isValid, setIsValid] = useState(false);

  // Hata durumlarını saklamak için errors objesi
  const [errors, setErrors] = useState({
    kalinlik: "",
  });

  const formSchema = Yup.object().shape({
    kalinlik: Yup.string()
      .oneOf(["İnce", "Kalın"])
      .required("Hamur seçimi zorunlu"),
  });

  useEffect(() => {
    // Hata mesajını sayfa yüklendiğinde de göster
    formSchema.isValid(selectedHamur).then((valid) => {
      setIsValid(valid);
      if (!valid) {
        setErrors({ ...errors, kalinlik: "Bir hamur seçmelisiniz!" });
      }
    });
  }, [selectedHamur]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    formSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.message });
      });
      setSelectedHamur({ ...selectedHamur, [name]: value });
  }

  return (
    <>
      <div className='hamur-sec'>
        <h5>Hamur Seç <span className="red-star">*</span></h5>
        {errors.kalinlik && <div className="error" style={{ color: "red" }}>{errors.kalinlik}</div>}
        <select name="kalinlik" value={selectedHamur.kalinlik} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="İnce">İnce</option>
          <option value="Kalın">Kalın</option>
        </select>
        
      </div>
    </>
  );
}


export default HamurSec;
