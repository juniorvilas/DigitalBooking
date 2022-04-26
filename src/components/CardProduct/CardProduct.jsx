import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardProduct.sass";
import PropTypes from "prop-types";
import {
  faHeart,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardProduct = ({ product }) => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={product.imagens[0]?.url} alt="imagem camp" />
        <FontAwesomeIcon icon={faHeart} className="product__heartIcon" />
      </div>
      <div className="product__details">
        <div className="product__title-category">
          <span className="product-category">{product.categoria.nome}</span>
          <span className="product-title">{product.nome}</span>
        </div>
        <div className="product__rating">
          <span>8</span>
          <p>Muito bom</p>
        </div>
        <p className="product__location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="product__mapIcon" />
          {product.cidade.nome}
        </p>
        <div className="product__features">
          {product.caracteristicas.map((caracteristica) => {
            return (
              <img
                src={`${caracteristica.icone}`}
                key={caracteristica.id}
                className="product__icon"
              />
            );
          })}
        </div>

        <p className="product__description">
          {showMore
            ? product.descricao.substring(0, 140)
            : `${product.descricao.substring(0, 70)}`}{" "}
          {!showMore ? (
            <Link to="" onClick={showMoreHandler}>
              Ver detalhes
            </Link>
          ) : (
            <Link to="" onClick={showMoreHandler}>
              Esconder
            </Link>
          )}
        </p>

        <Link to={`/product/${product.id}`} className="product__link">
          <button className="btn-filled">Ver Mais</button>
        </Link>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  img: PropTypes.string,
  categoria: PropTypes.string,
  title: PropTypes.string,
  localizacao: PropTypes.string,
  descricao: PropTypes.string,
};
export default CardProduct;
