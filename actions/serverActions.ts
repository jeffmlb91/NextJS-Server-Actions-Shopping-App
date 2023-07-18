"use server";

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  //we are grabbing the values from the form (just like we would with useState)
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  //then we will create/build a new product object for the new product to be added.(storing the values)
  const newProduct: Product = {
    product,
    price,
  };
  //then we pass the new Product to the endPoint we created in MockAPI and Make a post request and in the body strinfify the new product
  await fetch("https://64b492340efb99d8626913b5.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //We have to revalidate the tag here
  revalidateTag("products");
};
