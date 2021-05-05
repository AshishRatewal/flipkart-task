import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProduct.products);
  const renderList = products.map((product) => {
    const { category, id, image, price, title } = product;
    return (
      <div className="col-md-3 mb-3" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card">
            <img className="card-img-top width p-5" src={image} alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{price}$</p>
              <p className="card-text">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponents;
