import { AuthRequiredError } from "@/lib/exceptions"
import { TProduct } from "@/types/Product"
import { redirect } from "next/navigation"
import axios from "axios"

export const getProducts = async (): Promise<TProduct[]> => {
    const response = await axios.get("https://nere-server.herokuapp.com/api/products")
    // const response = await fetch("https://nere-server.herokuapp.com/api/products")
    // console.log(response.json())
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("Something went wrong")
    return response.data
}


export const getCustomerById = async (id: number) => {
    try {
        const response = await axios.get(`https://nere-server.herokuapp.com/api/customers/${id}`)
        // const response = await fetch(`https://nere-server.herokuapp.com/api/customers/${id}`)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        console.log(error.response.data.message)
        throw new Error(`${error.response.data.message}`);
    }
}