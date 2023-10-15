import { Card, CardTitle, CardText, Button } from "reactstrap";
import { useHistory } from "react-router-dom"; 
import axios from 'axios';


function SiparisToplami(props) {
  const history = useHistory(); 
  
  const SuccessPage = () => { 
    const dataToPass = {
      selectedItems: props.selectedItems,
      counter: props.counter,
      priceOfPizza: props.priceOfPizza,
      selectedBoyut: props.selectedBoyut,
      selectedHamur: props.selectedHamur
    };

    history.push({
      pathname: "/success",
      state: dataToPass,
    });    

    /*
    // Axios ile POST isteği yapma
    axios.post('/api/siparis', dataToPass)
      .then((response) => {
        console.log('Sipariş gönderildi!', response.data);
        history.push('/success');
      })
      .catch((error) => {
        console.error('Sipariş gönderme hatası:', error);
      });
      */
  }

  // Seçilen boyutun değeri boşsa butonu etkisiz hale getir
  const isButtonDisabledWithBoyut = !["Küçük", "Orta", "Büyük"].includes(props.selectedBoyut)
  const isButtonDisabledWithHamur = !["İnce", "Kalın"].includes(props.selectedHamur);

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
      <Button color="warning" onClick={SuccessPage} disabled={isButtonDisabledWithBoyut || isButtonDisabledWithHamur}>
        SİPARİŞ VER 
      </Button>
    </Card>
  );
}

export default SiparisToplami;
