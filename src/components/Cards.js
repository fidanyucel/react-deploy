import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


function Cards() {
  return (
    <div className='cards'>
      <h1>Bu DESTANSI yerlere göz atın!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src='images/img-9.jpg'
            text='Amazon Ormanı derinliklerinde saklı şelaleyi keşfedin'
            label='Macera'
            path='/services'
            />
             <CardItem 
            src='images/img-2.jpg'
            text='Özel bir yolculukta Bali Adalarını seyahet edin'
            label='Lüks'
            path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src='images/img-3.jpg'
            text='Atlantik Okyanusunda keşfedilmemiş suları ziyaret edin'
            label='Gizem'
            path='/services'
            />
             <CardItem 
            src='images/img-4.jpg'
            text='Himalaya Dağlarının zirvesinde Futbol Deneyimi'
            label='Macera'
            path='/products'
            />
               <CardItem 
            src='images/img-8.jpg'
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
