import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Product.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <h4 className="text-center my-5"> Loading ... Please wait</h4>
      ) : (
        <>
          <h4 className="my-5 text-center">Product Detail Page</h4>

          <section className="detail-container col-10 mx-auto">
            <div className="col-5">
              <img src={product?.thumbnail} className="product-banner" />
            </div>
            <div className="col-6">
              <h3 style={{ color: "red" }}>{product.title}</h3>
              <h6>{product.description} </h6>
              <h6>price : ₹ {product.price} </h6>
              <h6>Category : {product.category}</h6>
              <h6>brand : {product.brand}</h6>
              <h6>products in stock : {product.stock}</h6>
              <h6>rating : {product.rating}</h6>
              <h6>discountpercentage : {product.discountpercentage}</h6>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SingleProduct;
