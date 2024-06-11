import { getProducts } from "@/actions/getProducts";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => getProducts()
    })
}