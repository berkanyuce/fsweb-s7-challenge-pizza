import { Card, CardTitle, CardText, Button } from "reactstrap";
import { useHistory } from "react-router-dom"; 

function SiparisToplami(props) {
  const history = useHistory(); 
  
    const SuccessPage = () => { 
        history.push("/success") 
    } 

  return (
    <Card
        body
        className="text-center"
        style={{
        width: '18rem'
        }}
    >
        <CardTitle tag="h5">
        Sipariş Toplamı
        </CardTitle>
        <CardText>
        Seçimler {props.selectedItems.length * 5} ₺
        </CardText>
        <CardText style={{ color: 'red' }}>
        Toplam {props.counter * (props.priceOfPizza + props.selectedItems.length * 5)} ₺
        </CardText>
        <Button color="warning" onClick={SuccessPage}>
        SİPARİŞ VER
        </Button>
    </Card>
  );
}

export default SiparisToplami;

