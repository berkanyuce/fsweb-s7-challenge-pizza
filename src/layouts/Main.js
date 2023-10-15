import "./Main.css";
import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import PizzaDescription from "../components/PizzaDescription";
import BoyutSec from "../components/BoyutSec";
import HamurSec from "../components/HamurSec";
import EkMalzemeler from "../components/EkMalzemeler"
import SiparisNotu from "../components/SiparisNotu"
import Counter from "../components/Counter";
import SiparisToplami from "../components/SiparisToplami";

function Main() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [priceOfPizza, setPriceOfPizza] = useState(85.50)
    const [counter, setCounter] = useState(1);
    const [selectedBoyut, setSelectedBoyut] = useState("");
    const [selectedHamur, setSelectedHamur] = useState("");


    return (
        <>
        <div class="header">
            <svg className="main-logo"></svg>
            
            <Breadcrumb className="header-nav">
                <BreadcrumbItem >
                <a href="/" style={{color: "white"}}>
                    Anasayfa
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <a href="/" style={{color: "white"}}>
                    Seçenekler
                </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                <a href="#" style={{color: "white"}}>
                    Sipariş Oluştur
                </a>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>

        <div class="order">
            <PizzaDescription priceOfPizza={priceOfPizza}/>
            <section>
                <BoyutSec selectedBoyut={selectedBoyut} setSelectedBoyut={setSelectedBoyut}/>
                <HamurSec selectedHamur={selectedHamur} setSelectedHamur={setSelectedHamur}/>
            </section>
            <EkMalzemeler selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
            <SiparisNotu />
            <section>
                <Counter counter={counter} setCounter={setCounter}/>
                <SiparisToplami 
                    priceOfPizza={priceOfPizza} 
                    selectedItems={selectedItems} 
                    counter={counter} 
                    selectedBoyut={selectedBoyut.boyutlar} 
                    selectedHamur={selectedHamur.kalinlik}
                />
            </section>
            
        </div>
        
        </>
    )
}

export default Main;