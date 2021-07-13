import React ,{useState}from "react";
import Carousel from 'react-bootstrap/Carousel'
import style from "../css/carousel.module.css"

function Carousell() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
 
  
    return (
      <Carousel className={style.carousel}  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Stores/SL_Clearance/GW/PC_bunk/ClearanceStore_SL_PCBunk_50._CB659141515_.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> Styles for Men and women</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>COMPUTERS AND ACESSORIES</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Echodevice21/smartshoppingdays/ASH-GW_1500X600._CB664047323_.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>One Stop Solution For Your Home</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Carousell

