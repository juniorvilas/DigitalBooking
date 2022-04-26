import "./myReservations.sass";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { format, parseISO } from 'date-fns';
import React from 'react';

const MyReservations = () => {
  const { user } = useUser();
  const { email } = user;
  const [reservations, setReservations] = useState();
  // const [productImg, setProductImg] = useState();
  const getAllReservationsByEmail = (email) => {
    if (email) {
      api
        .get(`/reservas/cliente/buscar?email-cliente=${email}`)
        .then((res) => {
          if (res.status === 200) {
            if(res.data.length > 0) {
              setReservations(res.data);
              // getProductById(res.data[0].produto.id);
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  // const getProductById = (id) => {
  //   if(id) {
  //     api
  //       .get(`/produtos/permitAll/buscar/${id}`)
  //       .then(res => {
  //         if(res.status === 200) {
  //           setProductImg(res.data.imagens[0].url);
  //         }
  //       })
  //   }
  // }
  useEffect(() => {
    getAllReservationsByEmail(email);
  }, [email]);

  return (
    <div className="reservations">
      <h2>Minhas reservas</h2>
      {reservations ? (
        <ul className="reservations__list">
          {reservations.map((reservation, index) => {
            return (
              <li className="reservations__item" key={index}>
                <img src={reservation.produto.categoria.urlImagem} alt="" />
                <span className="reservations__name">
                  {reservation.produto.nome}
                </span>
                <span className="reservations__checkin">
                  {format(parseISO(reservation.dataInicio), "dd/MM/yyyy")}
                </span>
                <span className="reservations__checkout">
                  {format(parseISO(reservation.dataFinal), "dd/MM/yyyy")}
                </span>
                <span className="reservations__location">
                  {reservation.produto.cidade.nome}
                </span>
                <span className="reservations__status">Reservado</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty">
          Você ainda não fez nenhuma reserva
          <FontAwesomeIcon
            icon={faSmileWink}
            fontSize="42"
            color="var(--primary-color)"
          />
          <Link to="/" className="btn-filled">
            Voltar para home
          </Link>
        </p>
      )}
    </div>
  );
};

export default MyReservations;
