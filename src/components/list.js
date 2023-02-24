import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
  const [products, setProduct] = useState([]);
  const [half, setHalf] = useState(true);
  const [full, setFull] = useState(false);

  useEffect(() => {
    axios
      .get("https://63e5189a8e1ed4ccf6edc068.mockapi.io/api/products/")
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  const loadMore = () => {
    setHalf(false);
    setFull(true);
  };

  const filterList = (q) => {
    const keyword = q.target.value;
    if (keyword !== "") {
      const updatedList = products.filter((product) => {
        return product.name.toLowerCase().match(keyword.toLowerCase());
      });
      setProduct(updatedList);
    } else {
      axios
        .get("https://63e5189a8e1ed4ccf6edc068.mockapi.io/api/products/")
        .then((response) => {
          setProduct(response.data);
        });
    }
  };

  const SomeProduct = () => {
    return (
      <div>
        {products
          .filter((product, index) => index < 5)
          .map((product) => (
            <div
              key={product.id}
              className="items flex justify-between mb-3 border-2 border-green-800 rounded-3xl"
            >
              <div id="product-info" className="p-3 items-center">
                <div className="flex gap-2 xs:text-sm sm:text-md text-xl font-bold">
                  {product.name}
                  <input className="form-check-input" type="checkbox" />
                </div>
                <div className="xs:text-xs sm:text-xs text-md">
                  IDR {product.price}
                </div>
                <div className="text-xs text-justify">
                  {product.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  const AllProduct = () => {
    return (
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className="items flex justify-between mb-3 border-2 border-green-800 rounded-3xl"
          >
            <div id="product-info" className="p-3 items-center">
                <div className="flex gap-2 xs:text-sm sm:text-md text-xl font-bold">
                  {product.name}
                  <input className="form-check-input" type="checkbox" />
                </div>
                <div className="xs:text-xs sm:text-xs text-md">
                  IDR {product.price}
                </div>
                <div className="text-xs text-justify">
                  {product.description}
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  };

  return (
    <div className="xs:p-1 py-3">
      <label className="text-2xl pb-2 text-red-700">
        Show List Option, Search, and Multiple/Single Selection
      </label>
      <div className="searching-bar pb-3">
        <input
          className="form-control"
          placeholder="Search the product"
          onChange={filterList}
        />
      </div>

      <>
        {half ? (
          <div>
            <SomeProduct />
            <button
              className="btn btn-success text-sm bg-green-600 rounded-3xl"
              onClick={loadMore}
            >
              Show All
            </button>
          </div>
        ) : null}

        {full ? <AllProduct /> : null}
      </>
    </div>
  );
}
