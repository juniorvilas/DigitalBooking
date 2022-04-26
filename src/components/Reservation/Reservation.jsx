import "./reservation.sass";
import Calendar from "../Calendar/Calendar";
import UserDetails from "./UserDetails/UserDetails";
import CheckinHour from "./CheckinHour/CheckinHour";
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductDetails from "./ProductDetails/ProductDetails";
import PoliticaInfo from "../PoliticaInfo/PoliticaInfo";
import React from 'react';

const Reservation = () => {
  return (
    <>
      <ProductHeader />
      <div className="booking-reserva">
        <div className="booking-form-item">
          <UserDetails />
        </div>
        <div className="booking-reserva-item">
          <Calendar
            title={"Seleciona sua data de reserva"}
            
          />
        </div>
        <div className="booking-horario-item">
          <CheckinHour />
        </div>
        <div className="booking-details-item">
          <ProductDetails />
        </div>
      </div>
      <PoliticaInfo />
    </>
  );
};

export default Reservation;
