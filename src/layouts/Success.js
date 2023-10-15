import "./Success.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";


function Success(props) {
    const location = useLocation();
    const { selectedItems, counter, priceOfPizza, selectedBoyut, selectedHamur } = location.state;



    return (
        <>
        <div className="success-background">
            <svg className="logo"></svg>
            <h1 className="slogan">TEBRİKLER! SİPARİŞİNİZ ALINDI!</h1>
            <h1>Seçilen Ürünler: {selectedItems.join(", ")}</h1>
            <h1>Seçilen boyut: {selectedBoyut}</h1>
            <h1>Seçilen kalınlık: {selectedHamur}</h1>
            <h2>Toplam Tutar: {counter * (priceOfPizza + selectedItems.length * 5)} ₺</h2>
              </div>
        
        </>
    )
}

export default Success;