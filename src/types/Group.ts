import { TCustomer } from "./Customer";
import { TLocation } from "./Location";
import { TProduct } from "./Product";

export type TGroup = {
    id: number;
    uid: string;
    join_code: string;
    isPaid: boolean;
    type: string;
    created_at: string;
    status: string;
    total_quantity: number;
    initiator?: TCustomer;
    product?: TProduct;
    members?: TCustomer[];
    location?: TLocation;
}