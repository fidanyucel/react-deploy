import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image9 from '../images/img-9.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image8 from '../images/img-8.jpg';



function Cards() {
  return (
    <div className='cards'>
      <h1>Bu DESTANSI yerlere göz atın!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src={image9}
            text='Amazon Ormanı derinliklerinde saklı şelaleyi keşfedin'
            label='Macera'
            path='/services'
            />
             <CardItem 
            src={image2}
            text='Özel bir yolculukta Bali Adalarını seyahet edin'
            label='Lüks'
            path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src={image3}
            text='Atlantik Okyanusunda keşfedilmemiş suları ziyaret edin'
            label='Gizem'
            path='/services'
            />
             <CardItem 
            src={image4}
            text='Himalaya Dağlarının zirvesinde Futbol Deneyimi'
            label='Macera'
            path='/products'
            />
               <CardItem 
            src={image8}
            text='Rehberli bir deve turunda Sahra Çölüne gezintiye çıkın'
            label='Adrenalin'
            path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
