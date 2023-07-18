import { revalidateTag } from "next/cache";
import Image from "next/image";

export interface Product {
  id?: number;
  product: string;
  price: string;
}
export default async function Home() {
  const res = await fetch(
    "https://64b492340efb99d8626913b5.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"] //this tag will be revalidated to update the ui
      }
    }
  );

  const products: Product[] = await res.json();

  const addProductToDatabase = async (e: FormData) => {
    'use server'
    //we are grabbing the values from the form (just like we would with useState)
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return; 

    //then we will create/build a new product object for the new product to be added.(storing the values)
    const newProduct: Product = {
      product,
      price
    }
    //then we pass the new Product to the endPoint we created in MockAPI and Make a post request and in the body strinfify the new product
    await fetch("https://64b492340efb99d8626913b5.mockapi.io/products", {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //We have to revalidate the tag here
    revalidateTag('products')
  }

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center pt-6">
        Products Inventory
      </h1>

      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          name="product"
          placeholder="Enter New Product Name"
          className="border border-gray  p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter New Product Price"
          className="border border-gray p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5 text-center text-blue-300">
        List of Products
      </h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
