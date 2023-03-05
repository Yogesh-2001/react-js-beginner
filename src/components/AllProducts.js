import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AllProducts.css";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setAllProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  return (
    <>
      <section className="outer-container col-11 mx-auto">
        {loading ? (
          <h4 className="my-5">Loading... Please Wait</h4>
        ) : (
          products?.map((product, index) => {
            return (
              <>
                <div
                  className="product-item col-md-3 col-sm-5 col-10 mx-auto p-2"
                  key={index}
                >
                  <img src={product.thumbnail} />
                  <h5 className="text-center">{product.title}</h5>
                  <div className="product-footer">
                    <p className="rating">
                      {product.rating}{" "}
                      <i
                        className="fa fa-star"
                        aria-hidden="true"
                        color="white"
                      ></i>
                    </p>
                    <h5>₹ {product.price}</h5>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm col-6 mx-auto"
                    onClick={() => navigate(`/product-details/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </>
            );
          })
        )}
      </section>
    </>
  );
};

export default AllProducts;
