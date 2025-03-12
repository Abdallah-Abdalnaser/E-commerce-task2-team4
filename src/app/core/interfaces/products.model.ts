import { Product } from "./singleProduct.model";

export interface products {
  products:Product[],
  total:number,
  skip:number,
  limit:number
}
