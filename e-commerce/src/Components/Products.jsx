import React from "react";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((dat) => {
          console.log(dat);
          return dat;
        }),
  });

  if (error) {
    return <div>Error: error loading api call.</div>;
  }
  if (isLoading) return <div>Data is being loaded.</div>;
  return (
    <>
      <h1 className="font-bold text-2xl tracking-wide m-7">
        List of Our Products
      </h1>
      <div className="products-container w-[75vw] mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {data?.map((product) => (
          <div
            key={product.id}
            className="product-card h-[16rem] p-4 my-4 rounded-lg shadow-custom flex flex-col cursor-pointer group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[7rem] w-auto mx-auto object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <h3 className="my-3 text-center flex-grow overflow-hidden text-ellipsis whitespace-normal max-h-[3rem]">
              {product.title.split(" ").slice(0, 6).join(" ")}
              {product.title.split(" ").length > 6 ? "..." : ""}
            </h3>
            <h3 className="mt-auto">{`Price: $${product.price}`}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
