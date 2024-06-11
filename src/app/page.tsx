import { getProducts } from "@/actions/getProducts";
import Groups from "@/components/Groups";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/data/get-products";
import { AuthRequiredError } from "@/lib/exceptions";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate
} from '@tanstack/react-query'
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // console.log(products);

  // const { data: products, isFetching } = useProducts();

  // if (isFetching) {
  //   return <div>Loading...</div>
  // }

  return (
    <main className="max-w-7xl m-auto bg-slate-400">
      <div>
        {products?.length}
        {products.slice(0, 6).map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:items-center mx-5 md:flex-row md:justify-between md:items-start">
        <Button variant={"destructive"}>Delete</Button>
        <Button variant={"destructive"}>Delete</Button>
        <Button variant={"destructive"}>Delete</Button>
        <Button variant={"destructive"}>Delete</Button>
        <Modal />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Groups />
      </Suspense>
    </main>
  );
}
