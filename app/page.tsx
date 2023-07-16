import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center pt-6">Product Inventory</h1>

      <form action="">
        <input type="text" />
        <input type="text" />
        <button>Add Product</button>
      </form>
    </main>
  )
}
