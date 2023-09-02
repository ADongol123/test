import { useQuery } from "react-query";

export function useGetProducts() {
  return useQuery("products", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
