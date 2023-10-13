import "./PizzaDescription.css"
import { useEffect } from "react";

function PizzaDescription({priceOfPizza}) {
  return (
    <>
    <h4>Position Absolute Acı Pizza</h4>

    <div class="baz-secim">
        <h3>{priceOfPizza} ₺</h3>
        <div>
          <p>4.8</p>
          <p>(200)</p>
        </div>
    </div>

    <div className="item-description">
        <span>
        Frontent Dev olarak hala position:absolute kullaniyorsan 
        bu çok aci pizza tam sana göre. Pizza, domates, peynir ve 
        genellikle çesitli diger malzemelerle kaplanmis, daha sonra 
        geleneksel olarak odun atesinde bir firinda yüksek sicaklikta 
        pisirilen, genellikle yuvarlak, düzlestirilmis mayali bugday 
        bazil hamurdan olusan italyan kökenli lezzetli bir yemektir... 
        Küçük bir pizzaya bazen pizzetta denir.
        </span>
    </div>
    </>
  );
}

export default PizzaDescription;