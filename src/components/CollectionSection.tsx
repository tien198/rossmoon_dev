import { useEffect, useState } from "react"
import type { Product } from "../models/product.zod"

import Products from '../assets/products.json'
import ProductCard from "./ProductCard"


export default function CollectionSection() {
    const [prods, setProds] = useState<Product[] | null>(null)
    useEffect(() => {
        setProds(Products)
    }, [])
    return (
        <div>
            {prods?.map(prod =>
                <ProductCard prod={prod} key={String(prod._id)} />
            )}
        </div>
    )
}