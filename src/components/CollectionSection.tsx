import type { Product } from "../models/product.zod"

import Products from '../assets/db/products.json'
import ProductCard from "./ProductCard"


export default function CollectionSection() {
    const prods = getProducts()
    return (
        <div>
            {prods?.map(prod =>
                <ProductCard prod={prod} key={String(prod._id)} />
            )}
        </div>
    )
}


function getProducts(): Product[] {
    return Products as Product[]
}