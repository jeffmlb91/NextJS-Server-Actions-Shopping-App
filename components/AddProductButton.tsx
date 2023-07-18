'use client';

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append('product', "Macbook Pro 16")
  formData.append("price", "3000")
    
  return (
    <button
        onClick={() => startTransition(() => addProductToDatabase(formData))}
        className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
        {/**We are replaceing this "Add Macbook" with a ternary operator which is more efficient */}
        {isPending ? "Adding..." : "Add another Item"}
    </button>
  );
    
}

export default AddProductButton