import { format, parseISO } from 'date-fns';
import { useState, useEffect } from "react";
import React from 'react';

const DetailsReservation = ({ reservation }) => {

    const [imgThumbnail, setImgThumbnail] = useState();

    useEffect(() => {
        if (reservation) {
            reservation.produto.imagens.forEach((imagem) => {
                if (imagem.ehImagemCapa) setImgThumbnail(imagem.url);
            })

        }
    })

    return (
        <>
            <li className="reservations__item">
                <img src={imgThumbnail} alt="" />
                <span className="reservations__name">
                    {reservation.produto.nome}
                </span>
                <span className="reservations__checkin">
                    {format(parseISO(reservation.dataInicio), "dd/MM/yyyy - ")}
                    {reservation.horarioInicio.slice(0, 5)}
                </span>
                <span className="reservations__checkout">
                    {format(parseISO(reservation.dataFinal), "dd/MM/yyyy")}
                </span>
                <span className="reservations__location">
                    {reservation.produto.cidade.nome}
                </span>
                <span className="reservations_quant">
                    {reservation.qtdPessoas}
                </span>
                <span className="reservations__status">Reservado</span>
            </li>
        </>

    );
}

export default DetailsReservation;