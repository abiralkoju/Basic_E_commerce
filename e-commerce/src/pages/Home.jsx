import React from "react";
import Navbar from "../Components/Navbar";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (error) return <div>Your API call was error!</div>;

  if (isLoading) return <h4>Your api call is loading</h4>;
  return (
    <div>
      <Navbar />
      {data?.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
