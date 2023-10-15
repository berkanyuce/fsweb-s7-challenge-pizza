import { Form, FormGroup, Input, Label } from "reactstrap";
import "./BoyutSec.css";
import { useState, useEffect } from "react";
import * as Yup from "yup";


function BoyutSec({selectedBoyut, setSelectedBoyut}) {
    const boyutlar = ["Küçük", "Orta", "Büyük"];

    const [isValid, setIsValid] = useState(false);

    // Hata durumlarını saklamak için errors objesi
    const [errors, setErrors] = useState({
        boyutlar: "",
    });

    const formSchema = Yup.object().shape({
        boyutlar: Yup.string()
            .oneOf(["Küçük", "Orta", "Büyük"], "Lütfen bir boyut seçin")
            .required("Boyut seçimi zorunlu"),
    });

    useEffect(() => {
        // Hata mesajını sayfa yüklendiğinde de göster
        formSchema.isValid(selectedBoyut).then((valid) => {
          setIsValid(valid);
          if (!valid) {
            setErrors({ ...errors, boyutlar: "Bir boyut seçmelisiniz!" });
          }
        });
      }, [selectedBoyut]);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const newFormData = { ...selectedBoyut, [name]: value };

        formSchema
            .validateAt(name, newFormData)
            .then(() => {
                setErrors({ ...errors, [name]: "" });
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.message });
            });

        setSelectedBoyut(newFormData);
    }

    return (
        <>
            <div className="boyut-sec">
                <h5>Boyut Seç <span className="red-star">*</span></h5>
                {errors.boyutlar && <div className="error" style={{color:"red"}}>{errors.boyutlar}</div>}
                <Form>
                    {boyutlar.map((boyut, index) => (
                        <FormGroup check key={index}>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="boyutlar"
                                    value={boyut}
                                    checked={selectedBoyut.boyutlar === boyut}
                                    onChange={handleChange}
                                />{" "}
                                {boyut}
                            </Label>
                        </FormGroup>
                    ))}
                </Form>
            </div>
        </>
    );
}

export default BoyutSec;
