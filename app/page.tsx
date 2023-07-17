import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center pt-6">Product Inventory</h1>

      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          type="text"
          placeholder="Enter New Product Name"
          className="border border-gray  p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter New Product Price"
          className="border border-gray p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
      </form>
    </main>
  );
}
