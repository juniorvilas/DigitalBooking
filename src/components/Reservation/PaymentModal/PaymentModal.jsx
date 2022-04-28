import "./paymentModal.sass";
import React from "react"
import api from "../../../services/api";
import StripeCheckout from "react-stripe-checkout";

export const PaymentModal = (props) => {

  const handleToken = async (token, addresses) => {
    const cliente = {
      nome: token.card?.name,
      email: token?.email,
      cidade: token.card?.address_city,
      pais: token.card?.address_country,
      bandeiraCartao: token.card?.brand,
    }

    const body = {
      valor: Math.round(props.amount * 100),
      tokenId: token.id,
      descricao: `Pagamento efetuado para o camping: ${props.product.nome}. Cliente: { nome: ${cliente.nome}, email: ${cliente.email}, cidade: ${cliente.cidade}/${cliente.pais} }`,
      moeda: "BRL",
      reserva: {
        id: props.idReserva
      }
    };
    const orderPayment = await api.post("pagamentos", body)
    console.log(body)
    const data = orderPayment.data
    if (orderPayment.status === 200) {
      const reserva = await api.put("reservas/cliente/atualizar", {
        reservaId: props.idReserva,
        ordemDePagamentoId: data.id
      })

      if (reserva.status === 200) {
        props.setSuccess(true)
      } else {
        console.log(reserva)
      }
    }
  }

  return (
    <div>
      <p>Eba! Reserva registrada com sucesso em nossos sistemas. Realize o pagamento agora mesmo para efetivá-la garantir seu agendamento!</p>
      <p>Produto: {props.product.nome}</p>
      <span>Valor total: {new Intl.NumberFormat("pt-br", {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }).format(props.amount)}</span>
      <StripeCheckout
        currency="BRL"
        billingAddress
        // shippingAddress
        token={handleToken}
        amount={props.amount * 100}
        label="Realizar Pagamento 💳"
        stripeKey={import.meta.env.VITE_PUBLISHABLE_KEY}
        name={"Digital Booking - " + props.product.nome}
        image="https://pi-t2-g3.s3.amazonaws.com/icons/logo.svg"
      />
    </div>
  )
}
